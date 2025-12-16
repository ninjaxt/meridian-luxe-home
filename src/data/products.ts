export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  categorySlug: string;
  description: string;
  features: string[];
  images: string[];
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Furniture",
    slug: "furniture",
    description: "Timeless pieces crafted for modern living",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    id: "2",
    name: "Bedroom",
    slug: "bedroom",
    description: "Create your personal sanctuary",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
  },
  {
    id: "3",
    name: "Kitchen & Dining",
    slug: "kitchen-dining",
    description: "Where memories are made",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    id: "4",
    name: "Home Décor",
    slug: "home-decor",
    description: "Finishing touches that define spaces",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80",
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Velvet Chesterfield Sofa",
    price: 185000,
    category: "Furniture",
    categorySlug: "furniture",
    description: "A stunning velvet Chesterfield sofa that combines classic British design with contemporary comfort. Deep button tufting and rolled arms create an air of sophistication, while high-density foam cushioning ensures exceptional comfort for years to come.",
    features: [
      "Premium velvet upholstery",
      "Hand-tufted buttons",
      "Solid hardwood frame",
      "High-density foam cushioning",
      "Dimensions: 220cm x 95cm x 75cm",
    ],
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80",
    ],
    inStock: true,
  },
  {
    id: "2",
    name: "Carrara Marble Coffee Table",
    price: 78500,
    category: "Furniture",
    categorySlug: "furniture",
    description: "An exquisite coffee table featuring a genuine Carrara marble top supported by a minimalist brass-finished steel frame. Each piece is unique due to natural variations in the marble veining.",
    features: [
      "Genuine Carrara marble top",
      "Brass-finished steel frame",
      "Natural marble variations",
      "Dimensions: 120cm x 60cm x 45cm",
    ],
    images: [
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80",
      "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80",
    ],
    inStock: true,
  },
  {
    id: "3",
    name: "Sculptural Accent Chair",
    price: 62000,
    category: "Furniture",
    categorySlug: "furniture",
    description: "A statement piece that blends mid-century modern aesthetics with contemporary design. The sculptural silhouette and premium bouclé fabric create visual interest while offering supreme comfort.",
    features: [
      "Premium bouclé fabric",
      "Solid walnut legs",
      "Ergonomic design",
      "Dimensions: 75cm x 80cm x 85cm",
    ],
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    ],
    inStock: true,
  },
  {
    id: "4",
    name: "Upholstered King Bed Frame",
    price: 145000,
    category: "Bedroom",
    categorySlug: "bedroom",
    description: "A luxurious king-size bed frame featuring a tall, channel-tufted headboard in sumptuous velvet. The perfect centerpiece for a sophisticated bedroom retreat.",
    features: [
      "Channel-tufted headboard",
      "Premium velvet upholstery",
      "Solid wood slat system",
      "King size: 200cm x 210cm",
    ],
    images: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
    ],
    inStock: true,
  },
  {
    id: "5",
    name: "Art Deco Nightstand",
    price: 38500,
    category: "Bedroom",
    categorySlug: "bedroom",
    description: "An elegant nightstand inspired by Art Deco design, featuring curved silhouettes and brass accents. Two soft-close drawers provide practical storage with refined style.",
    features: [
      "Lacquered wood finish",
      "Brass hardware",
      "Soft-close drawers",
      "Dimensions: 50cm x 40cm x 55cm",
    ],
    images: [
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=800&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    ],
    inStock: true,
  },
  {
    id: "6",
    name: "Oak Dining Table Set",
    price: 225000,
    category: "Kitchen & Dining",
    categorySlug: "kitchen-dining",
    description: "A statement dining table crafted from solid European oak with a natural live edge. Seats 8 comfortably and includes matching oak dining chairs with leather seats.",
    features: [
      "Solid European oak",
      "Natural live edge",
      "Includes 8 dining chairs",
      "Table dimensions: 240cm x 100cm x 76cm",
    ],
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=800&q=80",
    ],
    inStock: true,
  },
  {
    id: "7",
    name: "Brass Bar Cart",
    price: 42000,
    category: "Kitchen & Dining",
    categorySlug: "kitchen-dining",
    description: "A sophisticated bar cart featuring a polished brass frame and two tiers of tempered glass shelving. Perfect for entertaining and displaying your finest spirits.",
    features: [
      "Polished brass frame",
      "Tempered glass shelves",
      "360° rotating casters",
      "Dimensions: 80cm x 45cm x 85cm",
    ],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
    ],
    inStock: true,
  },
  {
    id: "8",
    name: "Ceramic Vase Collection",
    price: 18500,
    category: "Home Décor",
    categorySlug: "home-decor",
    description: "A curated set of three handcrafted ceramic vases in complementary organic shapes. Each piece is wheel-thrown and finished with a matte glaze in soft neutral tones.",
    features: [
      "Set of 3 vases",
      "Handcrafted ceramic",
      "Matte glaze finish",
      "Heights: 20cm, 28cm, 35cm",
    ],
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80",
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80",
      "https://images.unsplash.com/photo-1612198273689-b437f53152ca?w=800&q=80",
    ],
    inStock: true,
  },
  {
    id: "9",
    name: "Abstract Canvas Art",
    price: 35000,
    category: "Home Décor",
    categorySlug: "home-decor",
    description: "A striking abstract canvas painting featuring bold brushstrokes and a sophisticated neutral palette. Hand-painted by contemporary artists, each piece is unique.",
    features: [
      "Hand-painted canvas",
      "Gallery-wrapped edges",
      "Ready to hang",
      "Dimensions: 120cm x 90cm",
    ],
    images: [
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80",
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80",
    ],
    inStock: true,
  },
  {
    id: "10",
    name: "Designer Table Lamp",
    price: 28500,
    category: "Home Décor",
    categorySlug: "home-decor",
    description: "A sculptural table lamp featuring an organic ceramic base and a hand-stitched linen shade. Casts a warm, ambient glow perfect for creating intimate atmospheres.",
    features: [
      "Ceramic base",
      "Linen shade",
      "LED compatible",
      "Height: 55cm",
    ],
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80",
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
    ],
    inStock: true,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter((product) => product.categorySlug === categorySlug);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
};
