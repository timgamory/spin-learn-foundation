import { getSessionCookieOptions } from "./_core/cookies";
import { COOKIE_NAME } from "../shared/const";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { createCarouselImage, deleteCarouselImage, getCarouselImages, updateCarouselImageOrder } from "./db";
import { storagePut } from "./storage";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  carousel: router({
    list: publicProcedure.query(async () => {
      return await getCarouselImages();
    }),

    upload: protectedProcedure
      .input(
        z.object({
          title: z.string().min(1).max(255),
          description: z.string().optional(),
          imageBase64: z.string(),
          mimeType: z.string(),
          fileName: z.string(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new Error("Unauthorized: Only admins can upload carousel images");
        }

        try {
          const buffer = Buffer.from(input.imageBase64, "base64");
          const fileKey = `carousel/${Date.now()}-${input.fileName}`;
          const { url } = await storagePut(fileKey, buffer, input.mimeType);

          const image = await createCarouselImage({
            title: input.title,
            description: input.description || null,
            imageUrl: url,
            fileKey,
            uploadedBy: ctx.user.id,
            displayOrder: 0,
            isActive: 1,
          });

          return image;
        } catch (error) {
          console.error("[Carousel Upload] Error:", error);
          throw new Error("Failed to upload carousel image");
        }
      }),

    delete: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new Error("Unauthorized: Only admins can delete carousel images");
        }

        const success = await deleteCarouselImage(input.id);
        return { success };
      }),

    updateOrder: protectedProcedure
      .input(
        z.object({
          id: z.number(),
          displayOrder: z.number(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new Error("Unauthorized: Only admins can reorder carousel images");
        }

        const success = await updateCarouselImageOrder(input.id, input.displayOrder);
        return { success };
      }),
  }),
});

export type AppRouter = typeof appRouter;
