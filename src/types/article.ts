export type Article = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  authorName: string;
  publishedAt: string;
  readMinutes: number;
  views: number;
  likes: number;
  thumbnailVariant?: "rose" | "sky" | "mint" | "violet";
};
