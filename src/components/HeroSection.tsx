import { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Star } from 'lucide-react';
import heroImage from '@/assets/hero-sigiriya.jpg';
import logoImage from '@/assets/travel_logo.png';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToExplore = () => {
    const exploreSection = document.getElementById('explore');
    exploreSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="hero-section relative min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Sigiriya Rock Fortress Sri Lanka" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/60"></div>
      </div>

      {/* Floating Navigation */}
      <nav className="floating-nav px-6 py-4 animate-fade-in">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center hover-scale cursor-pointer" onClick={scrollToTop}>
            <img 
              src={logoImage} 
              alt="Ceyline Travels Logo" 
              className="h-16 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#explore" className="text-foreground/80 hover:text-primary transition-colors story-link hover-scale">Explore</a>
            <a href="#destinations" className="text-foreground/80 hover:text-primary transition-colors story-link hover-scale">Destinations</a>
            <a href="#contact" className="btn-ocean text-sm px-6 py-2 hover-scale animate-pulse">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight animate-fade-in">
            Find Paradise,
            <span className="block text-secondary animate-pulse-glow hover-scale">Find Sri Lanka</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-light mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Where emerald mountains meet golden beaches, ancient temples whisper stories, 
            and every moment becomes an unforgettable adventure in paradise.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 hover-scale transition-all duration-300 hover:bg-white/20 hover:shadow-lg">
              <Star className="h-5 w-5 text-secondary animate-pulse" />
              <span className="font-semibold">8 UNESCO World Heritage Sites</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 hover-scale transition-all duration-300 hover:bg-white/20 hover:shadow-lg">
              <MapPin className="h-5 w-5 text-secondary animate-pulse" style={{ animationDelay: '0.2s' }} />
              <span className="font-semibold">9 Provinces</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 hover-scale transition-all duration-300 hover:bg-white/20 hover:shadow-lg">
              <Star className="h-5 w-5 text-secondary animate-pulse" style={{ animationDelay: '0.4s' }} />
              <span className="font-semibold">26 National Parks</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <button 
              onClick={scrollToExplore}
              className="btn-ocean text-lg px-10 py-4 shadow-2xl"
            >
              Discover Paradise
            </button>
            <a 
              href="https://www.youtube.com/watch?v=8g9ccCkT-u0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-block hover-scale story-link"
            >
              Watch Paradise
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToExplore}
            className="text-white/80 hover:text-white transition-colors"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default HeroSection;