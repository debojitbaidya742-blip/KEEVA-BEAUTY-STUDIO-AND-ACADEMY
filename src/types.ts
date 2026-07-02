export interface Service {
  id: string;
  name: string;
  category: 'Hair' | 'Makeup' | 'Skin' | 'Nails' | 'Academy';
  description: string;
  price?: string;
  image: string;
  duration?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  level: 'Beginner' | 'Advanced' | 'All Levels';
  description: string;
  curriculum: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Interior' | 'Bridal' | 'Hair' | 'Nails' | 'Makeover';
  image: string;
}

export interface Booking {
  id: string;
  name: string;
  phone: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  message?: string;
  status: 'Pending' | 'Confirmed' | 'Completed';
  createdAt: string;
}
