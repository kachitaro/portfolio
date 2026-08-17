import React from 'react';
import { HeroSection } from '@/components/hero-section';
import { HomeSectionsNav } from '@/components/home-sections-nav';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Explore Section Cards & Featured Preview */}
      <HomeSectionsNav />
    </div>
  );
}
