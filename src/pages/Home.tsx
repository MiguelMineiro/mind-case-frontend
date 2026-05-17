import { useEffect, useState } from 'react';
import { HeroSection } from '../components/HeroSection';
import { FeaturedArticles } from '../components/FeaturedArticles';
import { RecentArticles } from '../components/RecentArticles';
import { NewsletterSection } from '../components/NewsletterSection';
import { CTASection } from '../components/CTASection';
import { ArticleCardSkeleton, ArticleCardCompactSkeleton } from '../components/Skeleton';
import { articleService } from '../services/articleService';
import type { Article } from '../types';

export function Home() {
  const [featured, setFeatured] = useState<Article[]>([]);
  const [recent, setRecent] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [featuredData, recentData] = await Promise.all([
          articleService.getFeatured(),
          articleService.getAll(1, 4),
        ]);
        setFeatured(Array.isArray(featuredData) ? featuredData : []);
        setRecent(recentData.data || []);
      } catch {
        setFeatured([]);
        setRecent([]);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <div>
      <HeroSection />
      {loading ? (
        <>
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <div className="h-8 w-64 bg-bg-card-hover rounded animate-pulse mb-2" />
                <div className="h-4 w-80 bg-bg-card-hover rounded animate-pulse" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <ArticleCardSkeleton key={i} />
                ))}
              </div>
            </div>
          </section>
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <div className="h-8 w-64 bg-bg-card-hover rounded animate-pulse mb-2" />
                <div className="h-4 w-72 bg-bg-card-hover rounded animate-pulse" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <ArticleCardCompactSkeleton key={i} />
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {featured.length > 0 && <FeaturedArticles articles={featured} />}
          {recent.length > 0 && <RecentArticles articles={recent} />}
        </>
      )}
      <NewsletterSection />
      <CTASection />
    </div>
  );
}
