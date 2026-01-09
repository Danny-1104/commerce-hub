export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  subcategory?: string;
  rating: number;
  reviews: number;
  stock: number;
  tags?: string[];
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories?: string[];
}

export const categories: Category[] = [
  { id: 'electronics', name: 'Electrónica', icon: '📱', subcategories: ['Smartphones', 'Laptops', 'Tablets', 'Accesorios'] },
  { id: 'fashion', name: 'Moda', icon: '👕', subcategories: ['Hombre', 'Mujer', 'Niños', 'Accesorios'] },
  { id: 'home', name: 'Hogar', icon: '🏠', subcategories: ['Muebles', 'Decoración', 'Cocina', 'Jardín'] },
  { id: 'sports', name: 'Deportes', icon: '⚽', subcategories: ['Fitness', 'Outdoor', 'Ropa Deportiva', 'Equipamiento'] },
  { id: 'beauty', name: 'Belleza', icon: '💄', subcategories: ['Maquillaje', 'Skincare', 'Perfumes', 'Cabello'] },
  { id: 'toys', name: 'Juguetes', icon: '🎮', subcategories: ['Videojuegos', 'Juegos de Mesa', 'Educativos', 'Figuras'] },
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max 256GB',
    description: 'El iPhone más avanzado con chip A17 Pro, cámara de 48MP y diseño de titanio. Pantalla Super Retina XDR de 6.7 pulgadas con ProMotion.',
    price: 1299.99,
    originalPrice: 1499.99,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500',
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
      'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=800',
    ],
    category: 'electronics',
    subcategory: 'Smartphones',
    rating: 4.9,
    reviews: 2547,
    stock: 50,
    tags: ['nuevo', 'bestseller'],
    featured: true,
  },
  {
    id: '2',
    name: 'MacBook Pro 14" M3 Pro',
    description: 'Potencia extraordinaria con el chip M3 Pro. Pantalla Liquid Retina XDR, hasta 18 horas de batería y diseño profesional.',
    price: 1999.99,
    originalPrice: 2199.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
    category: 'electronics',
    subcategory: 'Laptops',
    rating: 4.8,
    reviews: 1823,
    stock: 25,
    tags: ['nuevo'],
    featured: true,
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5 Auriculares',
    description: 'La mejor cancelación de ruido del mercado. Audio Hi-Res, 30 horas de batería y diseño ultraligero.',
    price: 349.99,
    originalPrice: 399.99,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500',
    category: 'electronics',
    subcategory: 'Accesorios',
    rating: 4.7,
    reviews: 3421,
    stock: 100,
    featured: true,
  },
  {
    id: '4',
    name: 'Nike Air Max 270',
    description: 'Zapatillas con la unidad Air más grande de Nike para máxima comodidad. Diseño moderno y estilo urbano.',
    price: 149.99,
    originalPrice: 179.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    category: 'fashion',
    subcategory: 'Hombre',
    rating: 4.6,
    reviews: 5632,
    stock: 200,
    featured: true,
  },
  {
    id: '5',
    name: 'Samsung Galaxy Watch 6',
    description: 'Smartwatch premium con monitorización de salud avanzada, GPS integrado y batería de larga duración.',
    price: 299.99,
    originalPrice: 349.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    category: 'electronics',
    subcategory: 'Accesorios',
    rating: 4.5,
    reviews: 1256,
    stock: 75,
  },
  {
    id: '6',
    name: 'Chaqueta North Face Thermoball',
    description: 'Chaqueta ultraligera con aislamiento sintético. Perfecta para actividades outdoor y uso diario.',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500',
    category: 'fashion',
    subcategory: 'Hombre',
    rating: 4.7,
    reviews: 892,
    stock: 60,
  },
  {
    id: '7',
    name: 'iPad Pro 12.9" M2',
    description: 'La tablet más potente con chip M2, pantalla Liquid Retina XDR y compatibilidad con Apple Pencil.',
    price: 1099.99,
    originalPrice: 1199.99,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500',
    category: 'electronics',
    subcategory: 'Tablets',
    rating: 4.8,
    reviews: 2103,
    stock: 40,
    featured: true,
  },
  {
    id: '8',
    name: 'Dyson V15 Detect',
    description: 'Aspiradora inalámbrica con tecnología láser para detectar polvo microscópico. Potencia extrema.',
    price: 749.99,
    originalPrice: 849.99,
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500',
    category: 'home',
    subcategory: 'Electrodomésticos',
    rating: 4.6,
    reviews: 1547,
    stock: 30,
  },
  {
    id: '9',
    name: 'Perfume Chanel N°5 100ml',
    description: 'El icónico perfume femenino. Notas florales y aldehídicas con un toque de elegancia atemporal.',
    price: 139.99,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500',
    category: 'beauty',
    subcategory: 'Perfumes',
    rating: 4.9,
    reviews: 4521,
    stock: 80,
  },
  {
    id: '10',
    name: 'PlayStation 5 Console',
    description: 'La consola de nueva generación con gráficos 4K, SSD ultrarrápido y DualSense controller.',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500',
    category: 'toys',
    subcategory: 'Videojuegos',
    rating: 4.9,
    reviews: 8932,
    stock: 15,
    tags: ['popular'],
    featured: true,
  },
  {
    id: '11',
    name: 'Bolso Coach Signature',
    description: 'Bolso de diseñador con el icónico estampado de Coach. Cuero premium y acabados de lujo.',
    price: 395.00,
    originalPrice: 495.00,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500',
    category: 'fashion',
    subcategory: 'Accesorios',
    rating: 4.7,
    reviews: 756,
    stock: 25,
  },
  {
    id: '12',
    name: 'Bicicleta de Montaña Trek X-Caliber',
    description: 'Bicicleta de montaña profesional con cuadro de aluminio y suspensión delantera RockShox.',
    price: 1299.99,
    originalPrice: 1499.99,
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500',
    category: 'sports',
    subcategory: 'Outdoor',
    rating: 4.8,
    reviews: 423,
    stock: 10,
  },
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return mockProducts.filter((p) => p.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return mockProducts.filter((p) => p.featured);
};

export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find((p) => p.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return mockProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
  );
};
