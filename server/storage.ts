import { 
  users, 
  menuItems, 
  orders, 
  contacts, 
  type User, 
  type InsertUser, 
  type MenuItem, 
  type InsertMenuItem,
  type Order,
  type InsertOrder,
  type Contact,
  type InsertContact
} from "@shared/schema";
import { MenuItems, SpecialtyItems } from "../client/src/lib/constants";

// Interface with all CRUD methods needed
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Menu item operations
  getAllMenuItems(): Promise<MenuItem[]>;
  getSpecialtyMenuItems(): Promise<MenuItem[]>;
  getMenuItemsByCategory(category: string): Promise<MenuItem[]>;
  getMenuItem(id: number): Promise<MenuItem | undefined>;
  
  // Order operations
  createOrder(order: InsertOrder): Promise<Order>;
  getOrder(id: number): Promise<Order | undefined>;
  
  // Contact operations
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private menuItems: Map<number, MenuItem>;
  private orders: Map<number, Order>;
  private contacts: Map<number, Contact>;
  private userCurrentId: number;
  private orderCurrentId: number;
  private contactCurrentId: number;

  constructor() {
    this.users = new Map();
    this.menuItems = new Map();
    this.orders = new Map();
    this.contacts = new Map();
    this.userCurrentId = 1;
    this.orderCurrentId = 1;
    this.contactCurrentId = 1;
    
    // Initialize with menu items from constants
    MenuItems.forEach(item => {
      this.menuItems.set(item.id, item);
    });
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Menu item operations
  async getAllMenuItems(): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values());
  }
  
  async getSpecialtyMenuItems(): Promise<MenuItem[]> {
    return SpecialtyItems;
  }
  
  async getMenuItemsByCategory(category: string): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values()).filter(
      (item) => item.category === category
    );
  }
  
  async getMenuItem(id: number): Promise<MenuItem | undefined> {
    return this.menuItems.get(id);
  }
  
  // Order operations
  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const id = this.orderCurrentId++;
    const now = new Date();
    
    // Create a properly typed Order object with explicit properties
    const order: Order = {
      id,
      customerName: insertOrder.customerName,
      phone: insertOrder.phone,
      address: insertOrder.address,
      instructions: insertOrder.instructions ?? null, // Ensure null if undefined
      paymentMethod: insertOrder.paymentMethod,
      totalAmount: insertOrder.totalAmount,
      items: insertOrder.items,
      status: "pending",
      createdAt: now
    };
    
    this.orders.set(id, order);
    return order;
  }
  
  async getOrder(id: number): Promise<Order | undefined> {
    return this.orders.get(id);
  }
  
  // Contact operations
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactCurrentId++;
    const now = new Date();
    
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: now
    };
    
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage();
