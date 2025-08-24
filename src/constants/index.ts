// Site configuration
export const SITE_CONFIG = {
  name: 'Codleo',
  description: 'We Build Ideas Driven by the Future. Professional IT solutions and technology services.',
  url: 'https://codleo.com',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/codleo',
    github: 'https://github.com/codleo',
    linkedin: 'https://linkedin.com/company/codleo',
  },
};

// Navigation items
export const NAV_ITEMS = [
  { 
    label: 'Home', 
    href: '/',
    children: [
      { label: 'Home 1', href: '/' },
      { label: 'Home 2', href: '/home-2' },
      { label: 'Home 3', href: '/home-3' },
    ]
  },
  { 
    label: 'About Us', 
    href: '/about',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Company History', href: '/history' },
    ]
  },
  { 
    label: 'Services', 
    href: '/services',
    children: [
      { label: 'Cybersecurity', href: '/services/cybersecurity' },
      { label: 'Mobile Development', href: '/services/mobile' },
      { label: 'Software Development', href: '/services/software' },
      { label: 'Managed IT', href: '/services/managed-it' },
    ]
  },
  { 
    label: 'Projects', 
    href: '/products',
    children: [
      { label: 'Web Projects', href: '/projects/web' },
      { label: 'Mobile Apps', href: '/projects/mobile' },
      { label: 'Software Solutions', href: '/projects/software' },
    ]
  },
  { 
    label: 'Blog', 
    href: '/blog',
    children: [
      { label: 'Latest Posts', href: '/blog' },
      { label: 'Technology', href: '/blog/technology' },
      { label: 'Industry News', href: '/blog/news' },
    ]
  },
  { label: 'Contact', href: '/contact' },
];

// Services data
export const SERVICES = [
  {
    id: 'cybersecurity',
    name: 'Cybersecurity Services',
    description: 'Comprehensive security solutions to protect your business',
    icon: '🔒',
    features: ['24/7 Monitoring', 'Threat Detection', 'Security Audits', 'Incident Response'],
  },
  {
    id: 'mobile-development',
    name: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications',
    icon: '📱',
    features: ['iOS & Android', 'React Native', 'Performance Optimized', 'App Store Ready'],
  },
  {
    id: 'managed-it',
    name: 'Managed IT Services',
    description: 'Complete IT infrastructure management',
    icon: '⚙️',
    features: ['Infrastructure Management', 'Cloud Solutions', 'Backup & Recovery', '24/7 Support'],
  },
  {
    id: 'software-development',
    name: 'Software Development',
    description: 'Custom software solutions for your business',
    icon: '💻',
    features: ['Custom Applications', 'Web Development', 'API Integration', 'Database Design'],
  },
];

// Contact information
export const CONTACT_INFO = {
  email: 'help.me@example.com',
  phone: '+12456978963',
  address: '128 Munich 1258, Germany',
  hours: '8:00 AM - 7:00 PM',
  hotline: '+1 (555) 123-4567',
};

// Social media links
export const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://facebook.com/codleo', icon: 'facebook' },
  { name: 'Twitter', url: 'https://twitter.com/codleo', icon: 'twitter' },
  { name: 'Behance', url: 'https://behance.net/codleo', icon: 'behance' },
  { name: 'YouTube', url: 'https://youtube.com/codleo', icon: 'youtube' },
];

// API endpoints
export const API_ENDPOINTS = {
  contact: '/api/contact',
  blog: '/api/blog',
  products: '/api/products',
  services: '/api/services',
};

// Form validation rules
export const VALIDATION_RULES = {
  name: {
    required: 'Name is required',
    minLength: { value: 2, message: 'Name must be at least 2 characters' },
  },
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address',
    },
  },
  message: {
    required: 'Message is required',
    minLength: { value: 10, message: 'Message must be at least 10 characters' },
  },
};

// Team members
export const TEAM_MEMBERS = [
  {
    name: 'James Anderson',
    position: 'IT Director',
    image: '/team/james.jpg',
  },
  {
    name: 'Catherine Brooks',
    position: 'Cybersecurity Analyst',
    image: '/team/catherine.jpg',
  },
  {
    name: 'Thomas Reynolds',
    position: 'Software Developer',
    image: '/team/thomas.jpg',
  },
];

// Features
export const FEATURES = [
  {
    title: 'Deployment Services',
    description: 'We denounce with righteous indignation & dislike men who are so beguiled',
    icon: '🚀',
  },
  {
    title: 'Software Development',
    description: 'We denounce with righteous indignation & dislike men who are so beguiled',
    icon: '💻',
  },
  {
    title: 'Technology Solutions',
    description: 'We denounce with righteous indignation & dislike men who are so beguiled',
    icon: '🔧',
  },
  {
    title: 'AI-Driven Insights',
    description: 'We denounce with righteous indignation & dislike men who are so beguiled',
    icon: '🤖',
  },
];
