import { ContactSection } from '@/components/contact-section';
import { ExperienceSection } from '@/components/experience-section';
import { HeroSection } from '@/components/hero-section';
import { SetupSection } from '@/components/setup-section';
import { StackSection } from '@/components/stack-section';
import { WorkSection } from '@/components/work-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <ExperienceSection />
      <StackSection />
      <SetupSection />
      <ContactSection />
    </>
  );
}
