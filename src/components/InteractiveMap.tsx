import sriLankaMap from '@/assets/sri-lanka-map.png';

const InteractiveMap = () => {

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="text-gradient">Adventure Awaits</span>
            <br />
            <span className="text-foreground">Where Will You Go?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the beautiful island of Sri Lanka and its amazing destinations.
          </p>
        </div>

        {/* Interactive Map Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl shadow-strong">
            {/* Map Background */}
            <img 
              src={sriLankaMap} 
              alt="Sri Lanka Aerial Map View" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;