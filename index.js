// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// client/src/lib/constants.ts
var SpecialtyItems = [
  {
    id: 1,
    name: "Mie Ayam Special",
    description: "Our signature chicken noodles with special homemade broth, tender chicken, and fresh vegetables.",
    price: 35e3,
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=600",
    category: "mie-ayam"
  },
  {
    id: 2,
    name: "Bakso Beranak",
    description: "Traditional Indonesian meatball soup with large beef meatball stuffed with smaller meatballs inside.",
    price: 4e4,
    image: "https://images.unsplash.com/photo-1583835746434-cf1534674b41?auto=format&fit=crop&q=80&w=600",
    category: "bakso"
  },
  {
    id: 3,
    name: "Mie Ayam Bakso Combo",
    description: "The best of both worlds - our famous Mie Ayam topped with Bakso meatballs for the ultimate experience.",
    price: 45e3,
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=600",
    category: "mie-ayam"
  }
];
var MenuItems = [
  // Mie Ayam Items
  {
    id: 1,
    name: "Mie Ayam Special",
    description: "Our signature chicken noodles with special homemade broth, tender chicken, and fresh vegetables.",
    price: 35e3,
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=600",
    category: "mie-ayam"
  },
  {
    id: 2,
    name: "Mie Ayam Original",
    description: "Classic chicken noodles with our special broth and savory chicken topping.",
    price: 3e4,
    image: "https://images.unsplash.com/photo-1593001872095-7d5af02339ec?auto=format&fit=crop&q=80&w=600",
    category: "mie-ayam"
  },
  {
    id: 3,
    name: "Mie Ayam Jamur",
    description: "Chicken noodles with added mushrooms for extra flavor and texture.",
    price: 35e3,
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=600",
    category: "mie-ayam"
  },
  {
    id: 4,
    name: "Mie Ayam Bakso Combo",
    description: "The best of both worlds - our famous Mie Ayam topped with Bakso meatballs for the ultimate experience.",
    price: 45e3,
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=600",
    category: "mie-ayam"
  },
  // Bakso Items
  {
    id: 5,
    name: "Bakso Regular",
    description: "Traditional meatball soup with beef broth and tender meatballs.",
    price: 25e3,
    image: "https://images.unsplash.com/photo-1583835746434-cf1534674b41?auto=format&fit=crop&q=80&w=600",
    category: "bakso"
  },
  {
    id: 6,
    name: "Bakso Beranak",
    description: "Traditional Indonesian meatball soup with large beef meatball stuffed with smaller meatballs inside.",
    price: 4e4,
    image: "https://images.unsplash.com/photo-1570368294249-567fd3b9324b?auto=format&fit=crop&q=80&w=600",
    category: "bakso"
  },
  {
    id: 7,
    name: "Bakso Urat",
    description: "Meatball soup with special beef tendon meatballs for extra texture.",
    price: 3e4,
    image: "https://images.unsplash.com/photo-1593252742293-5521b095045b?auto=format&fit=crop&q=80&w=600",
    category: "bakso"
  },
  {
    id: 8,
    name: "Bakso Tahu",
    description: "Meatball soup with tofu stuffed with meat, a delicious combination of textures.",
    price: 28e3,
    image: "https://images.unsplash.com/photo-1582527512862-7de4d1bb9c4a?auto=format&fit=crop&q=80&w=600",
    category: "bakso"
  },
  // Sides
  {
    id: 9,
    name: "Pangsit Goreng",
    description: "Crispy fried wontons filled with seasoned meat, perfect as a side.",
    price: 15e3,
    image: "https://images.unsplash.com/photo-1622403096764-93133b3c1559?auto=format&fit=crop&q=80&w=600",
    category: "sides"
  },
  {
    id: 10,
    name: "Siomay",
    description: "Steamed fish dumplings served with peanut sauce.",
    price: 18e3,
    image: "https://images.unsplash.com/photo-1563245372-73002f5ad673?auto=format&fit=crop&q=80&w=600",
    category: "sides"
  },
  {
    id: 11,
    name: "Kerupuk",
    description: "Traditional Indonesian crackers, the perfect accompaniment to any meal.",
    price: 5e3,
    image: "https://images.unsplash.com/photo-1562024364-f05469318949?auto=format&fit=crop&q=80&w=600",
    category: "sides"
  },
  // Drinks
  {
    id: 12,
    name: "Es Teh Manis",
    description: "Sweet iced tea, the perfect refreshing drink with your meal.",
    price: 8e3,
    image: "https://images.unsplash.com/photo-1625535163131-9d1fc29ea8a9?auto=format&fit=crop&q=80&w=600",
    category: "drinks"
  },
  {
    id: 13,
    name: "Es Jeruk",
    description: "Fresh orange juice served with ice, sweet and tangy.",
    price: 1e4,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=80&w=600",
    category: "drinks"
  },
  {
    id: 14,
    name: "Es Kelapa Muda",
    description: "Fresh young coconut water served with coconut flesh and ice.",
    price: 12e3,
    image: "https://images.unsplash.com/photo-1536153084108-22e6a0a2d194?auto=format&fit=crop&q=80&w=600",
    category: "drinks"
  }
];

// server/storage.ts
var MemStorage = class {
  users;
  menuItems;
  orders;
  contacts;
  userCurrentId;
  orderCurrentId;
  contactCurrentId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.menuItems = /* @__PURE__ */ new Map();
    this.orders = /* @__PURE__ */ new Map();
    this.contacts = /* @__PURE__ */ new Map();
    this.userCurrentId = 1;
    this.orderCurrentId = 1;
    this.contactCurrentId = 1;
    MenuItems.forEach((item) => {
      this.menuItems.set(item.id, item);
    });
  }
  // User operations
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.userCurrentId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  // Menu item operations
  async getAllMenuItems() {
    return Array.from(this.menuItems.values());
  }
  async getSpecialtyMenuItems() {
    return SpecialtyItems;
  }
  async getMenuItemsByCategory(category) {
    return Array.from(this.menuItems.values()).filter(
      (item) => item.category === category
    );
  }
  async getMenuItem(id) {
    return this.menuItems.get(id);
  }
  // Order operations
  async createOrder(insertOrder) {
    const id = this.orderCurrentId++;
    const now = /* @__PURE__ */ new Date();
    const order = {
      id,
      customerName: insertOrder.customerName,
      phone: insertOrder.phone,
      address: insertOrder.address,
      instructions: insertOrder.instructions ?? null,
      // Ensure null if undefined
      paymentMethod: insertOrder.paymentMethod,
      totalAmount: insertOrder.totalAmount,
      items: insertOrder.items,
      status: "pending",
      createdAt: now
    };
    this.orders.set(id, order);
    return order;
  }
  async getOrder(id) {
    return this.orders.get(id);
  }
  // Contact operations
  async createContact(insertContact) {
    const id = this.contactCurrentId++;
    const now = /* @__PURE__ */ new Date();
    const contact = {
      ...insertContact,
      id,
      createdAt: now
    };
    this.contacts.set(id, contact);
    return contact;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, integer, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var menuItems = pgTable("menu_items", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(),
  // In cents (e.g., 35000 for Rp 35.000)
  image: text("image").notNull(),
  category: text("category").notNull()
  // mie-ayam, bakso, sides, drinks
});
var insertMenuItemSchema = createInsertSchema(menuItems).omit({
  id: true
});
var orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  customerName: text("customer_name").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  instructions: text("instructions"),
  paymentMethod: text("payment_method").notNull(),
  totalAmount: integer("total_amount").notNull(),
  // In cents
  status: text("status").notNull().default("pending"),
  // pending, processing, completed, cancelled
  items: jsonb("items").notNull(),
  // Array of order items
  createdAt: timestamp("created_at").notNull().defaultNow()
});
var insertOrderSchema = createInsertSchema(orders).omit({
  id: true,
  createdAt: true,
  status: true
});
var orderValidationSchema = insertOrderSchema.extend({
  customerName: z.string().min(3, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  address: z.string().min(5, "Address is required"),
  items: z.array(z.object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
    quantity: z.number().min(1)
  })).min(1, "Order must contain at least one item"),
  paymentMethod: z.enum(["cash", "transfer", "wallet"], {
    errorMap: () => ({ message: "Please select a payment method" })
  })
});
var contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow()
});
var insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true
});
var contactValidationSchema = insertContactSchema.extend({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message is required (min 10 characters)")
});

// server/routes.ts
import { z as z2 } from "zod";

// server/midtrans.ts
import midtransClient from "midtrans-client";
var snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY
});
async function createTransaction(orderId, amount, customerDetails) {
  const transaction = await snap.createTransaction({
    transaction_details: {
      order_id: orderId,
      gross_amount: amount
    },
    customer_details: customerDetails,
    credit_card: {
      secure: true
    }
  });
  return transaction;
}

// server/routes.ts
async function registerRoutes(app2) {
  app2.post("/api/payment/create", async (req, res) => {
    try {
      const { orderId, amount, customerDetails } = req.body;
      const transaction = await createTransaction(orderId, amount, customerDetails);
      res.json({
        token: transaction.token,
        redirect_url: transaction.redirect_url
      });
    } catch (error) {
      console.error("Error creating payment:", error);
      res.status(500).json({ message: "Failed to create payment" });
    }
  });
  app2.get("/api/menu", async (req, res) => {
    try {
      const menuItems2 = await storage.getAllMenuItems();
      res.json(menuItems2);
    } catch (error) {
      console.error("Error fetching menu items:", error);
      res.status(500).json({ message: "Failed to fetch menu items" });
    }
  });
  app2.get("/api/specialties", async (req, res) => {
    try {
      const specialties = await storage.getSpecialtyMenuItems();
      res.json(specialties);
    } catch (error) {
      console.error("Error fetching specialty items:", error);
      res.status(500).json({ message: "Failed to fetch specialty items" });
    }
  });
  app2.get("/api/menu/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const menuItems2 = await storage.getMenuItemsByCategory(category);
      res.json(menuItems2);
    } catch (error) {
      console.error(`Error fetching menu items for category ${req.params.category}:`, error);
      res.status(500).json({ message: "Failed to fetch menu items by category" });
    }
  });
  app2.get("/api/menu/:id", async (req, res) => {
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
  app2.post("/api/orders", async (req, res) => {
    try {
      const validatedOrder = insertOrderSchema.parse(req.body);
      const order = await storage.createOrder(validatedOrder);
      res.status(201).json(order);
    } catch (error) {
      console.error("Error creating order:", error);
      if (error instanceof z2.ZodError) {
        return res.status(400).json({
          message: "Invalid order data",
          errors: error.errors
        });
      }
      res.status(500).json({ message: "Failed to create order" });
    }
  });
  app2.get("/api/orders/:id", async (req, res) => {
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
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedContact = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedContact);
      res.status(201).json(contact);
    } catch (error) {
      console.error("Error creating contact entry:", error);
      if (error instanceof z2.ZodError) {
        return res.status(400).json({
          message: "Invalid contact data",
          errors: error.errors
        });
      }
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2, { dirname as dirname2 } from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = dirname2(__filename2);
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        __dirname2,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(__dirname2, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
