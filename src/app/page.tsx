import { HeroSection } from '@/components/hero-section';
import { HomeSectionsNav } from '@/components/home-sections-nav';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-full">
      <HeroSection />

      <HomeSectionsNav />
    </div>
  );
}
