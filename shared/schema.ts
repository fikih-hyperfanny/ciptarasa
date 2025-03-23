import { pgTable, text, serial, integer, jsonb, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Menu items schema
export const menuItems = pgTable("menu_items", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(), // In cents (e.g., 35000 for Rp 35.000)
  image: text("image").notNull(),
  category: text("category").notNull(), // mie-ayam, bakso, sides, drinks
});

export const insertMenuItemSchema = createInsertSchema(menuItems).omit({
  id: true,
});

// Orders schema
export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  customerName: text("customer_name").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  instructions: text("instructions"),
  paymentMethod: text("payment_method").notNull(),
  totalAmount: integer("total_amount").notNull(), // In cents
  status: text("status").notNull().default("pending"), // pending, processing, completed, cancelled
  items: jsonb("items").notNull(), // Array of order items
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertOrderSchema = createInsertSchema(orders).omit({
  id: true,
  createdAt: true,
  status: true,
});

// Extend the order schema for validation
export const orderValidationSchema = insertOrderSchema.extend({
  customerName: z.string().min(3, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  address: z.string().min(5, "Address is required"),
  items: z.array(z.object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
    quantity: z.number().min(1),
  })).min(1, "Order must contain at least one item"),
  paymentMethod: z.enum(["cash", "transfer", "wallet"], {
    errorMap: () => ({ message: "Please select a payment method" })
  }),
});

// Feedback/contact schema
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
});

// Contact validation schema
export const contactValidationSchema = insertContactSchema.extend({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message is required (min 10 characters)"),
});

// Type definitions
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type MenuItem = typeof menuItems.$inferSelect;
export type InsertMenuItem = z.infer<typeof insertMenuItemSchema>;

export type Order = typeof orders.$inferSelect;
export type InsertOrder = z.infer<typeof insertOrderSchema>;
export type OrderValidation = z.infer<typeof orderValidationSchema>;

export type Contact = typeof contacts.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactValidation = z.infer<typeof contactValidationSchema>;

// Cart type for frontend state management
export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

// Location type
export type Location = {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
};
