import { Camera, Binoculars, Waves, Mountain, ChefHat } from 'lucide-react';

const AdventureCards = () => {
  const adventures = [
    {
      title: "Cultural Heritage",
      description: "Explore ancient temples, royal palaces, and UNESCO World Heritage Sites",
      icon: Camera,
      gradient: "from-blue-100 to-blue-200",
      hoverGradient: "hover:from-blue-200 hover:to-blue-300",
      destinationId: "village-vibes"
    },
    {
      title: "Wildlife Safari", 
      description: "Encounter elephants, leopards, and exotic birds in pristine national parks",
      icon: Binoculars,
      gradient: "from-sky-100 to-sky-200",
      hoverGradient: "hover:from-sky-200 hover:to-sky-300",
      destinationId: "wild-free"
    },
    {
      title: "Beach Paradise",
      description: "Relax on golden beaches, enjoy water sports, and witness stunning sunsets",
      icon: Waves,
      gradient: "from-cyan-100 to-cyan-200", 
      hoverGradient: "hover:from-cyan-200 hover:to-cyan-300",
      destinationId: "golden-escape"
    },
    {
      title: "Mountain Adventures",
      description: "Hike scenic trails, visit tea plantations, and enjoy breathtaking views",
      icon: Mountain,
      gradient: "from-indigo-100 to-indigo-200",
      hoverGradient: "hover:from-indigo-200 hover:to-indigo-300",
      destinationId: "eco-explorer"
    },
    {
      title: "Culinary Journey",
      description: "Taste authentic Sri Lankan cuisine and learn traditional cooking methods",
      icon: ChefHat,
      gradient: "from-slate-100 to-slate-200",
      hoverGradient: "hover:from-slate-200 hover:to-slate-300",
      destinationId: "taste-ceylon"
    }
  ];

  const handleAdventureClick = (destinationId: string) => {
    const destinationElement = document.querySelector(`[data-section-id="${destinationId}"]`);
    if (destinationElement) {
      destinationElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/5" id="adventures">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gradient">
            Choose Your Adventure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the diverse experiences that make Sri Lanka the perfect paradise destination
          </p>
        </div>

        {/* Adventure Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {adventures.map((adventure, index) => {
            const IconComponent = adventure.icon;
            return (
              <div
                key={adventure.title}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${adventure.gradient} ${adventure.hoverGradient} p-8 cursor-pointer transform transition-all duration-500 hover-scale animate-fade-in hover:shadow-2xl hover:shadow-primary/20`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleAdventureClick(adventure.destinationId)}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Card Content */}
                <div className="relative z-10 text-primary text-center h-full flex flex-col">
                  {/* Icon Container */}
                  <div className="flex-1 flex items-center justify-center mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <IconComponent 
                        size={36} 
                        className="text-primary" 
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-primary/80 transition-colors">
                      {adventure.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-primary/70 transition-colors">
                      {adventure.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 border-t-2 border-r-2 border-primary transform rotate-45"></div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-primary/30 rounded-full"></div>
                <div className="absolute bottom-8 left-6 w-2 h-2 bg-primary/20 rounded-full"></div>
                <div className="absolute top-1/2 right-4 w-1 h-8 bg-primary/10 rounded-full transform -translate-y-1/2"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <button className="btn-ocean text-lg px-8 py-4 hover-scale story-link">
            Plan Your Adventure
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdventureCards;