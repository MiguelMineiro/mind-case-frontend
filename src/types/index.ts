export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  bannerUrl?: string;
  tag: string;
  author: User;
  createdAt: string;
  readTime: number;
  views: number;
  likes: number;
  comments: number;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface ArticleFormData {
  title: string;
  content: string;
  tag: string;
  bannerUrl?: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
