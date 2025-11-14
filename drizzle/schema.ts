import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const photos = mysqlTable("photos", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  originalImageUrl: text("originalImageUrl").notNull(),
  editedImageUrl: text("editedImageUrl"),
  presetName: varchar("presetName", { length: 64 }),
  title: varchar("title", { length: 255 }),
  description: text("description"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Photo = typeof photos.$inferSelect;
export type InsertPhoto = typeof photos.$inferInsert;

export const editHistory = mysqlTable("editHistory", {
  id: int("id").autoincrement().primaryKey(),
  photoId: int("photoId").notNull(),
  userId: int("userId").notNull(),
  presetName: varchar("presetName", { length: 64 }).notNull(),
  filters: text("filters"), // JSON string with filter settings
  editedImageUrl: text("editedImageUrl"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type EditHistory = typeof editHistory.$inferSelect;
export type InsertEditHistory = typeof editHistory.$inferInsert;