import api from './api';
import type { Article, ArticleFormData, PaginatedResponse } from '../types';

export const articleService = {
  async getAll(page = 1, limit = 12, tag?: string, search?: string): Promise<PaginatedResponse<Article>> {
    const params = new URLSearchParams({ page: String(page), limit: String(limit) });
    if (tag) params.append('tag', tag);
    if (search) params.append('search', search);
    const response = await api.get(`/articles?${params}`);
    return response.data;
  },

  async getFeatured(): Promise<Article[]> {
    const response = await api.get('/articles/featured');
    return response.data;
  },

  async getById(id: string): Promise<Article> {
    const response = await api.get(`/articles/${id}`);
    return response.data;
  },

  async create(data: ArticleFormData): Promise<Article> {
    const response = await api.post('/articles', data);
    return response.data;
  },

  async update(id: string, data: Partial<ArticleFormData>): Promise<Article> {
    const response = await api.put(`/articles/${id}`, data);
    return response.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/articles/${id}`);
  },

  async getMyArticles(): Promise<Article[]> {
    const response = await api.get('/articles/my');
    return response.data;
  },
};
