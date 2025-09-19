import HeroSection from '@/components/HeroSection';
import AdventureCards from '@/components/AdventureCards';
import ExploreSection from '@/components/ExploreSection';
import InteractiveMap from '@/components/InteractiveMap';
import DestinationDetails from '@/components/DestinationDetails';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AdventureCards />
      <ExploreSection />
      <InteractiveMap />
      <DestinationDetails />
      <ContactSection />
      <Footer />
      <FloatingContactButton />
    </div>
  );
};

export default Index;
