import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { getCarouselImages, createCarouselImage, deleteCarouselImage, updateCarouselImageOrder } from "./db";

describe("Carousel Image Database Functions", () => {
  let testImageId: number;

  describe("createCarouselImage", () => {
    it("should create a carousel image", async () => {
      const image = await createCarouselImage({
        title: "Test Image",
        description: "A test carousel image",
        imageUrl: "https://example.com/test.jpg",
        fileKey: "test/test-image.jpg",
        uploadedBy: 1,
        displayOrder: 0,
        isActive: 1,
      });

      expect(image).toBeDefined();
      expect(image?.title).toBe("Test Image");
      expect(image?.description).toBe("A test carousel image");
      expect(image?.imageUrl).toBe("https://example.com/test.jpg");
      
      if (image?.id) {
        testImageId = image.id;
      }
    });
  });

  describe("getCarouselImages", () => {
    it("should retrieve carousel images", async () => {
      const images = await getCarouselImages();
      
      expect(Array.isArray(images)).toBe(true);
      if (images.length > 0) {
        expect(images[0]).toHaveProperty("id");
        expect(images[0]).toHaveProperty("title");
        expect(images[0]).toHaveProperty("imageUrl");
      }
    });

    it("should only return active images", async () => {
      const images = await getCarouselImages();
      
      for (const image of images) {
        expect(image.isActive).toBe(1);
      }
    });
  });

  describe("updateCarouselImageOrder", () => {
    it("should update image display order", async () => {
      if (!testImageId) {
        expect(testImageId).toBeDefined();
        return;
      }

      const success = await updateCarouselImageOrder(testImageId, 5);
      expect(success).toBe(true);
    });
  });

  describe("deleteCarouselImage", () => {
    it("should delete a carousel image", async () => {
      if (!testImageId) {
        expect(testImageId).toBeDefined();
        return;
      }

      const success = await deleteCarouselImage(testImageId);
      expect(success).toBe(true);

      // Verify deletion
      const images = await getCarouselImages();
      const deleted = images.find(img => img.id === testImageId);
      expect(deleted).toBeUndefined();
    });
  });
});
