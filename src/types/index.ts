// User types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  createdAt: Date;
}

// Blog post types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: User;
  publishedAt: Date;
  tags: string[];
  featuredImage?: string;
}

// Product types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  inStock: boolean;
  createdAt: Date;
}

// Service types
export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  price?: number;
}

// Contact form types
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Theme types
export interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}
