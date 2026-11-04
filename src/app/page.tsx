import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { ExperienceSection } from '@/components/experience-section';
import { FeaturedSection } from '@/components/featured-section';
import { HeroSection } from '@/components/hero-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
