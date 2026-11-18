// All café content lives here, so a new client = edit this one file.

export const site = {
  name: "Kaapi & Co.",
  tagline: "Filter coffee, slow mornings, Bandra West.",
  phone: "+91 98200 00000",
  email: "hello@kaapiandco.in",
  address: "14, Chapel Road, Bandra West, Mumbai 400050",
  hours: [
    { days: "Mon – Fri", time: "8:00 am – 10:00 pm" },
    { days: "Sat – Sun", time: "9:00 am – 11:30 pm" },
  ],
  instagram: "@kaapiandco",

  // Floating WhatsApp button. Number = country code + number, digits only (no +, spaces or dashes).
  whatsapp: {
    number: "919820000000",
    message: "Hi Kaapi & Co.! I'd like to book a table.", // pre-filled when the chat opens
  },

  // Google Map in the "Visit us" section, also used for the "Get directions" link.
  // Use the business name as it appears on Google Maps for the best pin, or an address, or "lat,lng".
  map: {
    query: "Chapel Road, Bandra West, Mumbai 400050",
    zoom: 16, // 14 = neighbourhood, 16 = street, 18 = building
  },
};

export type GalleryPhoto = {
  src: string; // a full https URL, or a file in /public, e.g. "/gallery/brew-bar.jpg"
  alt: string; // describes the photo for screen readers and Google
  label: string; // the small caption shown on the photo
};

// The first photo is shown large. Unsplash photos are free to use (unsplash.com/license).
// The "?w=1200..." part asks Unsplash for a reasonably sized file; Next.js then resizes it per device.
// Any new image host must also be added to images.remotePatterns in next.config.ts.
export const gallery: GalleryPhoto[] = [
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=80&fm=jpg&fit=crop",
    alt: "Pour-over coffee being brewed with a gooseneck kettle",
    label: "The brew bar",
  },
  {
    src: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1200&q=80&fm=jpg&fit=crop",
    alt: "Bakery shelves stacked with fresh bread loaves and buns",
    label: "Morning bakes",
  },
  {
    src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1200&q=80&fm=jpg&fit=crop",
    alt: "Small café table by a sunny window with a French press and cups",
    label: "Window seats",
  },
  {
    src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1200&q=80&fm=jpg&fit=crop",
    alt: "Brunch table with waffles, eggs, fruit and fresh juice",
    label: "Weekend brunch",
  },
  {
    src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&q=80&fm=jpg&fit=crop",
    alt: "Close-up of dark roasted coffee beans",
    label: "Coorg beans",
  },
];

export type MenuItem = {
  name: string;
  description: string;
  price: number;
  tag?: "Bestseller" | "New" | "Vegan";
};

export const menu: Record<string, MenuItem[]> = {
  Coffee: [
    { name: "Classic Filter Kaapi", description: "Chicory blend, brass dabarah, frothed by hand.", price: 140, tag: "Bestseller" },
    { name: "Iced Jaggery Latte", description: "Double shot, organic jaggery, cold milk.", price: 220 },
    { name: "Coorg Pour Over", description: "Single estate, notes of cocoa and orange peel.", price: 260 },
    { name: "Oat Cortado", description: "Equal parts espresso and steamed oat milk.", price: 210, tag: "Vegan" },
  ],
  Breakfast: [
    { name: "Masala Omelette Toast", description: "Sourdough, green chutney, three eggs.", price: 290 },
    { name: "Akuri on Brioche", description: "Parsi-style scrambled eggs, crispy onions.", price: 320, tag: "Bestseller" },
    { name: "Ragi Pancake Stack", description: "Banana, honey butter, roasted almonds.", price: 340 },
    { name: "Avocado Thecha Toast", description: "Smashed avocado, Kolhapuri thecha, feta.", price: 380, tag: "New" },
  ],
  Bakes: [
    { name: "Cardamom Bun", description: "Laminated dough, elaichi sugar crust.", price: 160, tag: "Bestseller" },
    { name: "Mango Cheesecake", description: "Alphonso purée, biscuit base. Seasonal.", price: 280 },
    { name: "Chocolate Chilli Cookie", description: "70% dark, a slow Kashmiri chilli kick.", price: 120 },
    { name: "Banana Walnut Loaf", description: "Eggless, served warm with salted butter.", price: 150, tag: "New" },
  ],
};

export const reviews = [
  { quote: "The filter kaapi tastes exactly like my grandmother's in Chennai. I come here every Sunday.", name: "Ananya R.", detail: "Regular since 2024" },
  { quote: "Quiet enough to work, good Wi-Fi, and the cardamom bun is unreal.", name: "Rohan M.", detail: "Freelance designer" },
  { quote: "Booked the back room for a birthday brunch. The team handled everything.", name: "Sneha & Karan", detail: "Private booking" },
];
