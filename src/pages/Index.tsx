import HeroSection from '@/components/HeroSection';
import AdventureCards from '@/components/AdventureCards';
import ExploreSection from '@/components/ExploreSection';
import InteractiveMap from '@/components/InteractiveMap';
import DestinationDetails from '@/components/DestinationDetails';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';
import BookingSidebar from '@/components/BookingSidebar';
import BookingTrigger from '@/components/BookingTrigger';
import { useState } from 'react';

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
      <BookingTrigger onClick={() => setIsSidebarOpen(true)} />
      <BookingSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
    </div>
  );
};

export default Index;
