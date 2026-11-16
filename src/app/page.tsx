import { ContactSection } from '@/components/contact-section';
import { AboutSection } from '@/components/about-section';
import { ExperienceSection } from '@/components/experience-section';
import { HeroSection } from '@/components/hero-section';
import { ProcessSection } from '@/components/process-section';
import { ServicesSection } from '@/components/services-section';
import { SetupSection } from '@/components/setup-section';
import { StackSection } from '@/components/stack-section';
import { WorkSection } from '@/components/work-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <ExperienceSection />
      <StackSection />
      <SetupSection />
      <ContactSection />
    </>
  );
}
