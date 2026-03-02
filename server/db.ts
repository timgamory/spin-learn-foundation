import { eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, carouselImages, InsertCarouselImage, CarouselImage } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// TODO: add feature queries here as your schema grows.

// Carousel image queries
export async function getCarouselImages(): Promise<CarouselImage[]> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get carousel images: database not available");
    return [];
  }

  try {
    const result = await db
      .select()
      .from(carouselImages)
      .where(eq(carouselImages.isActive, 1))
      .orderBy(desc(carouselImages.displayOrder), desc(carouselImages.createdAt));
    return result;
  } catch (error) {
    console.error("[Database] Failed to get carousel images:", error);
    return [];
  }
}

export async function createCarouselImage(image: InsertCarouselImage): Promise<CarouselImage | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create carousel image: database not available");
    return null;
  }

  try {
    const result = await db.insert(carouselImages).values(image);
    // Fetch and return the created record
    const created = await db
      .select()
      .from(carouselImages)
      .where(eq(carouselImages.id, result[0].insertId as number))
      .limit(1);
    return created.length > 0 ? created[0] : null;
  } catch (error) {
    console.error("[Database] Failed to create carousel image:", error);
    return null;
  }
}

export async function deleteCarouselImage(id: number): Promise<boolean> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot delete carousel image: database not available");
    return false;
  }

  try {
    await db.delete(carouselImages).where(eq(carouselImages.id, id));
    return true;
  } catch (error) {
    console.error("[Database] Failed to delete carousel image:", error);
    return false;
  }
}

export async function updateCarouselImageOrder(id: number, displayOrder: number): Promise<boolean> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update carousel image: database not available");
    return false;
  }

  try {
    await db
      .update(carouselImages)
      .set({ displayOrder })
      .where(eq(carouselImages.id, id));
    return true;
  } catch (error) {
    console.error("[Database] Failed to update carousel image:", error);
    return false;
  }
}

// Contact form submission queries
export async function createContactSubmission(data: {
  name: string;
  email: string;
  category: string;
  message: string;
}) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create contact submission: database not available");
    return null;
  }

  try {
    const { contactSubmissions } = await import("../drizzle/schema");
    const result = await db.insert(contactSubmissions).values(data);
    
    // Fetch and return the created record
    const created = await db
      .select()
      .from(contactSubmissions)
      .where(eq(contactSubmissions.id, result[0].insertId as number))
      .limit(1);
    return created.length > 0 ? created[0] : null;
  } catch (error) {
    console.error("[Database] Failed to create contact submission:", error);
    return null;
  }
}

export async function getContactSubmissions() {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get contact submissions: database not available");
    return [];
  }

  try {
    const { contactSubmissions } = await import("../drizzle/schema");
    const result = await db
      .select()
      .from(contactSubmissions)
      .orderBy(desc(contactSubmissions.createdAt));
    return result;
  } catch (error) {
    console.error("[Database] Failed to get contact submissions:", error);
    return [];
  }
}
