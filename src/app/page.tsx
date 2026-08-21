import { HeroSection } from '@/components/hero-section';
import { HomeSectionsNav } from '@/components/home-sections-nav';

export default function HomePage() {
  return (
    <div className="flex min-h-full flex-col">
      <HeroSection />

      <HomeSectionsNav />
    </div>
  );
}
