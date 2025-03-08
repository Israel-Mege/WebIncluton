import Layout from '@/components/shared/Layout';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ChallengesPreview from '@/components/home/ChallengesPreview';
import EventStructureSection from '@/components/home/EventStructureSection';
import WorkshopsSection from '@/components/home/WorkshopsSection';
import RegistrationSection from '@/components/home/RegistrationSection';
import ImpactSection from '@/components/home/ImpactSection';
import VideoSection from '@/components/home/VideoSection';
import OrganizersSection from '@/components/home/OrganizersSection';
import SponsorsSection from '@/components/home/SponsorsSection';
import FAQSection from '@/components/home/FAQSection';
import SponsorshipPlans from '@/components/home/SponsorshipPlans';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <div id="challenges">
        <ChallengesPreview />
      </div>
      <EventStructureSection />
      <div id="workshops">
        <WorkshopsSection />
      </div>
      <RegistrationSection />
      <div id="impact">
        <ImpactSection />
      </div>
      <VideoSection />
      <OrganizersSection />
      <SponsorsSection />
      <FAQSection />
      <SponsorshipPlans />
      <ContactSection />
    </Layout>
  );
}