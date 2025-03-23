import { MenuItem, Location } from "@shared/schema";

// Specialty items shown on homepage
export const SpecialtyItems: MenuItem[] = [
  {
    id: 1,
    name: "Mie Ayam Special",
    description: "Our signature chicken noodles with special homemade broth, tender chicken, and fresh vegetables.",
    price: 35000,
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=600",
    category: "mie-ayam"
  },
  {
    id: 2,
    name: "Bakso Beranak",
    description: "Traditional Indonesian meatball soup with large beef meatball stuffed with smaller meatballs inside.",
    price: 40000,
    image: "https://images.unsplash.com/photo-1583835746434-cf1534674b41?auto=format&fit=crop&q=80&w=600",
    category: "bakso"
  },
  {
    id: 3,
    name: "Mie Ayam Bakso Combo",
    description: "The best of both worlds - our famous Mie Ayam topped with Bakso meatballs for the ultimate experience.",
    price: 45000,
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=600",
    category: "mie-ayam"
  }
];

// Menu items
export const MenuItems: MenuItem[] = [
  // Mie Ayam Items
  {
    id: 1,
    name: "Mie Ayam Special",
    description: "Our signature chicken noodles with special homemade broth, tender chicken, and fresh vegetables.",
    price: 35000,
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=600",
    category: "mie-ayam"
  },
  {
    id: 2,
    name: "Mie Ayam Original",
    description: "Classic chicken noodles with our special broth and savory chicken topping.",
    price: 30000,
    image: "https://images.unsplash.com/photo-1593001872095-7d5af02339ec?auto=format&fit=crop&q=80&w=600",
    category: "mie-ayam"
  },
  {
    id: 3,
    name: "Mie Ayam Jamur",
    description: "Chicken noodles with added mushrooms for extra flavor and texture.",
    price: 35000,
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=600",
    category: "mie-ayam"
  },
  {
    id: 4,
    name: "Mie Ayam Bakso Combo",
    description: "The best of both worlds - our famous Mie Ayam topped with Bakso meatballs for the ultimate experience.",
    price: 45000,
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=600",
    category: "mie-ayam"
  },
  
  // Bakso Items
  {
    id: 5,
    name: "Bakso Regular",
    description: "Traditional meatball soup with beef broth and tender meatballs.",
    price: 25000,
    image: "https://images.unsplash.com/photo-1583835746434-cf1534674b41?auto=format&fit=crop&q=80&w=600",
    category: "bakso"
  },
  {
    id: 6,
    name: "Bakso Beranak",
    description: "Traditional Indonesian meatball soup with large beef meatball stuffed with smaller meatballs inside.",
    price: 40000,
    image: "https://images.unsplash.com/photo-1570368294249-567fd3b9324b?auto=format&fit=crop&q=80&w=600",
    category: "bakso"
  },
  {
    id: 7,
    name: "Bakso Urat",
    description: "Meatball soup with special beef tendon meatballs for extra texture.",
    price: 30000,
    image: "https://images.unsplash.com/photo-1593252742293-5521b095045b?auto=format&fit=crop&q=80&w=600",
    category: "bakso"
  },
  {
    id: 8,
    name: "Bakso Tahu",
    description: "Meatball soup with tofu stuffed with meat, a delicious combination of textures.",
    price: 28000,
    image: "https://images.unsplash.com/photo-1582527512862-7de4d1bb9c4a?auto=format&fit=crop&q=80&w=600",
    category: "bakso"
  },
  
  // Sides
  {
    id: 9,
    name: "Pangsit Goreng",
    description: "Crispy fried wontons filled with seasoned meat, perfect as a side.",
    price: 15000,
    image: "https://images.unsplash.com/photo-1622403096764-93133b3c1559?auto=format&fit=crop&q=80&w=600",
    category: "sides"
  },
  {
    id: 10,
    name: "Siomay",
    description: "Steamed fish dumplings served with peanut sauce.",
    price: 18000,
    image: "https://images.unsplash.com/photo-1563245372-73002f5ad673?auto=format&fit=crop&q=80&w=600",
    category: "sides"
  },
  {
    id: 11,
    name: "Kerupuk",
    description: "Traditional Indonesian crackers, the perfect accompaniment to any meal.",
    price: 5000,
    image: "https://images.unsplash.com/photo-1562024364-f05469318949?auto=format&fit=crop&q=80&w=600",
    category: "sides"
  },
  
  // Drinks
  {
    id: 12,
    name: "Es Teh Manis",
    description: "Sweet iced tea, the perfect refreshing drink with your meal.",
    price: 8000,
    image: "https://images.unsplash.com/photo-1625535163131-9d1fc29ea8a9?auto=format&fit=crop&q=80&w=600",
    category: "drinks"
  },
  {
    id: 13,
    name: "Es Jeruk",
    description: "Fresh orange juice served with ice, sweet and tangy.",
    price: 10000,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=80&w=600",
    category: "drinks"
  },
  {
    id: 14,
    name: "Es Kelapa Muda",
    description: "Fresh young coconut water served with coconut flesh and ice.",
    price: 12000,
    image: "https://images.unsplash.com/photo-1536153084108-22e6a0a2d194?auto=format&fit=crop&q=80&w=600",
    category: "drinks"
  }
];

// Restaurant locations
export const LocationData: Location[] = [
  {
    id: 1,
    name: "Jakarta (Main Branch)",
    address: "Jl. Sudirman No. 123, Jakarta Pusat",
    phone: "(021) 5551234",
    hours: "Open daily: 10:00 AM - 10:00 PM"
  },
  {
    id: 2,
    name: "Bandung",
    address: "Jl. Asia Afrika No. 45, Bandung",
    phone: "(022) 2003456",
    hours: "Open daily: 10:00 AM - 9:00 PM"
  },
  {
    id: 3,
    name: "Surabaya",
    address: "Jl. Pemuda No. 78, Surabaya",
    phone: "(031) 3456789",
    hours: "Open daily: 10:00 AM - 9:30 PM"
  }
];
