import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertOrderSchema, type OrderValidation } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  
  // Menu items routes
  app.get("/api/menu", async (req, res) => {
    try {
      const menuItems = await storage.getAllMenuItems();
      res.json(menuItems);
    } catch (error) {
      console.error("Error fetching menu items:", error);
      res.status(500).json({ message: "Failed to fetch menu items" });
    }
  });

  app.get("/api/specialties", async (req, res) => {
    try {
      const specialties = await storage.getSpecialtyMenuItems();
      res.json(specialties);
    } catch (error) {
      console.error("Error fetching specialty items:", error);
      res.status(500).json({ message: "Failed to fetch specialty items" });
    }
  });

  app.get("/api/menu/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const menuItems = await storage.getMenuItemsByCategory(category);
      res.json(menuItems);
    } catch (error) {
      console.error(`Error fetching menu items for category ${req.params.category}:`, error);
      res.status(500).json({ message: "Failed to fetch menu items by category" });
    }
  });

  app.get("/api/menu/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid menu item ID" });
      }
      
      const menuItem = await storage.getMenuItem(id);
      if (!menuItem) {
        return res.status(404).json({ message: "Menu item not found" });
      }
      
      res.json(menuItem);
    } catch (error) {
      console.error(`Error fetching menu item ${req.params.id}:`, error);
      res.status(500).json({ message: "Failed to fetch menu item" });
    }
  });

  // Order routes
  app.post("/api/orders", async (req, res) => {
    try {
      // Use insertOrderSchema to validate required fields
      const validatedOrder = insertOrderSchema.parse(req.body);
      
      // Create the order
      const order = await storage.createOrder(validatedOrder);
      res.status(201).json(order);
    } catch (error) {
      console.error("Error creating order:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid order data", 
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Failed to create order" });
    }
  });

  app.get("/api/orders/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid order ID" });
      }
      
      const order = await storage.getOrder(id);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      
      res.json(order);
    } catch (error) {
      console.error(`Error fetching order ${req.params.id}:`, error);
      res.status(500).json({ message: "Failed to fetch order" });
    }
  });

  // Contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate with the insert schema
      const validatedContact = insertContactSchema.parse(req.body);
      
      // Create the contact entry
      const contact = await storage.createContact(validatedContact);
      res.status(201).json(contact);
    } catch (error) {
      console.error("Error creating contact entry:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid contact data", 
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
