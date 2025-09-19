import { useState, useEffect } from 'react';
import { Clock, Utensils, Zap, Moon, Leaf, Camera } from 'lucide-react';
import hotAirBalloonImage from '@/assets/hot-air-balloon-new.jpg';

const experiences = [
  {
    id: 'time-travelers',
    title: 'Time Travelers',
    subtitle: 'Ancient Cities & UNESCO Heritage',
    description: 'Journey through millennia of history in Polonnaruwa and Sigiriya',
    icon: Clock,
    color: 'from-blue-500 to-cyan-500',
    image: '/api/placeholder/400/300'
  },
  {
    id: 'taste-ceylon',
    title: 'Taste of Ceylon',
    subtitle: 'Tea Trails & Food Journeys',
    description: 'Savor authentic flavors from hill country tea estates to street food',
    icon: Utensils,
    color: 'from-green-500 to-emerald-500',
    image: '/api/placeholder/400/300'
  },
  {
    id: 'adrenaline-rush',
    title: 'Adrenaline Rush',
    subtitle: 'Sky Adventures & Thrills',
    description: 'Soar above paradise with hot air balloons and paragliding',
    icon: Zap,
    color: 'from-orange-500 to-red-500',
    image: hotAirBalloonImage
  },
  {
    id: 'island-nights',
    title: 'Island Nights',
    subtitle: 'Nightlife & Entertainment',
    description: 'Experience vibrant Colombo nightlife and coastal beach parties',
    icon: Moon,
    color: 'from-purple-500 to-pink-500',
    image: '/api/placeholder/400/300'
  },
  {
    id: 'eco-explorer',
    title: 'Eco Explorer',
    subtitle: 'Sustainable Journeys',
    description: 'Discover pristine rainforests with minimal environmental impact',
    icon: Leaf,
    color: 'from-green-600 to-teal-500',
    image: '/api/placeholder/400/300'
  }
];

const ExploreSection = () => {
  const [visibleCards, setVisibleCards] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute('data-card-id');
            if (cardId) {
              setVisibleCards(prev => [...prev, cardId]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.experience-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="explore" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="text-gradient">Choose Your</span>
            <br />
            <span className="text-foreground">Adventure</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover Sri Lanka through five extraordinary experiences, each offering 
            a unique perspective on this incredible island nation.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            const isVisible = visibleCards.includes(experience.id);
            
            return (
              <div
                key={experience.id}
                data-card-id={experience.id}
                className={`experience-card destination-card p-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${experience.color} p-4 mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {experience.title}
                  </h3>
                  <p className="text-primary font-semibold">
                    {experience.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;