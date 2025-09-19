import { useState, useEffect } from 'react';
import { Clock, Users, Star, MapPin, Calendar, Camera, Play } from 'lucide-react';
import polonnaruwaImage from '@/assets/polonnaruwa.jpg';
import nuwaraEliyaImage from '@/assets/nuwara-eliya.jpg';
import hotAirBalloonImage from '@/assets/hot-air-balloon-new.jpg';
import colomboNightlifeImage from '@/assets/colombo-nightlife.jpg';
import sinharajaForestImage from '@/assets/sinharaja-forest.jpg';
import ecoExplorerImage from '@/assets/eco-explorer-zipline.jpg';
import sriLankanFoodImage from '@/assets/sri-lankan-food.jpg';
import bentotaBeachImage from '@/assets/bentota-beach.jpg';
import arugamBayNewImage from '@/assets/arugam-bay-new.jpg';
import galleFortImage from '@/assets/galle-fort.jpg';
import mirissaWhaleImage from '@/assets/mirissa-whale.jpg';
import arugamBaySurfImage from '@/assets/arugam-bay-surf.jpg';
import yalaLeopardImage from '@/assets/yala-leopard.jpg';
import sriLankaLeopardNewImage from '@/assets/sri-lanka-leopard-new.jpg';
import ellaRockImage from '@/assets/ella-rock.jpg';
import diyalumaFallsImage from '@/assets/diyaluma-falls.jpg';
import ayurvedaSpaImage from '@/assets/ayurveda-spa.jpg';
import villageVibesImage from '@/assets/traditional-village-life.jpg';

interface DestinationCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  duration: string;
  groupSize: string;
  rating: number;
  highlights: string[];
  subDestinations: SubDestination[];
}

interface SubDestination {
  name: string;
  description: string;
  image: string;
}

const destinationCategories: DestinationCategory[] = [
  {
    id: 'golden-escape',
    title: 'Golden Escape',
    subtitle: 'Pristine Beaches & Coastal Bliss',
    description: 'Discover Sri Lanka\'s golden coastline where turquoise waters meet pristine sands. From surfing at Arugam Bay to whale watching in Mirissa, experience the island\'s coastal treasures and beachfront luxury.',
    image: arugamBayNewImage,
    duration: '4-7 Days',
    groupSize: '2-20 People',
    rating: 4.8,
    highlights: [
      'Premium Beach Resorts',
      'Water Sports Activities',
      'Whale & Dolphin Watching',
      'Beachfront Dining',
      'Ayurveda Spa Treatments'
    ],
    subDestinations: [
      {
        name: 'Bentota & Beruwala',
        description: 'Luxury beachfront resorts with golden sands and water sports',
        image: bentotaBeachImage
      },
      {
        name: 'Galle Fort',
        description: 'Historic Dutch fort with cobblestone streets and colonial charm',
        image: galleFortImage
      },
      {
        name: 'Mirissa',
        description: 'World-renowned whale watching and stunning sunset beaches',
        image: mirissaWhaleImage
      },
      {
        name: 'Arugam Bay',
        description: 'Surfer\'s paradise with world-class breaks and laid-back vibes',
        image: arugamBaySurfImage
      }
    ]
  },
  {
    id: 'wild-free',
    title: 'Wild & Free',
    subtitle: 'Wildlife Safaris & Nature Adventures',
    description: 'Reconnect with nature through thrilling safaris, mountain treks, and waterfall adventures. Experience the raw beauty of Sri Lanka\'s wilderness, from leopard spotting in Yala to hiking through misty mountains.',
    image: sriLankaLeopardNewImage,
    duration: '5-8 Days',
    groupSize: '2-12 People',
    rating: 4.9,
    highlights: [
      'Leopard & Elephant Safaris',
      'Mountain Hiking Adventures',
      'Waterfall Exploration',
      'Rainforest Treks',
      'Wildlife Photography'
    ],
    subDestinations: [
      {
        name: 'Yala National Park',
        description: 'World\'s highest density of leopards and diverse wildlife',
        image: yalaLeopardImage
      },
      {
        name: 'Ella Rock & Little Adam\'s Peak',
        description: 'Breathtaking hikes through tea country with panoramic views',
        image: ellaRockImage
      },
      {
        name: 'Diyaluma Falls',
        description: 'Sri Lanka\'s second highest waterfall with natural rock pools',
        image: diyalumaFallsImage
      },
      {
        name: 'Sinharaja Forest Reserve',
        description: 'UNESCO World Heritage rainforest with endemic species',
        image: sinharajaForestImage
      }
    ]
  },
  {
    id: 'village-vibes',
    title: 'Village Vibes',
    subtitle: 'Authentic Cultural Immersion',
    description: 'Experience the authentic heart of Sri Lanka through immersive village stays. Participate in traditional farming, learn local crafts, enjoy home-cooked meals, and connect with warm-hearted locals in their natural environment.',
    image: villageVibesImage,
    duration: '3-6 Days',
    groupSize: '2-10 People',
    rating: 4.8,
    highlights: [
      'Traditional Village Stays',
      'Local Cooking Classes',
      'Artisan Craft Workshops',
      'Organic Farming Experience',
      'Cultural Performances'
    ],
    subDestinations: [
      {
        name: 'Traditional Farming Villages',
        description: 'Join local farmers in rice paddies and organic spice gardens',
        image: villageVibesImage
      },
      {
        name: 'Artisan Villages',
        description: 'Learn pottery, weaving, and wood carving from master craftsmen',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Home-Stay Experiences',
        description: 'Live with local families and experience authentic village life',
        image: '/api/placeholder/400/300'
      }
    ]
  },
  {
    id: 'taste-ceylon',
    title: 'Taste of Ceylon',
    subtitle: 'Tea Trails & Food Journeys',
    description: 'Embark on a culinary adventure through Sri Lanka\'s hill country tea estates and bustling local markets. From traditional cooking classes to tea tasting sessions, savor the authentic flavors of Ceylon.',
    image: nuwaraEliyaImage,
    duration: '4-7 Days',
    groupSize: '2-12 People',
    rating: 4.8,
    highlights: [
      'Tea Plantation Tours',
      'Cooking Classes',
      'Market Visits',
      'Spice Garden Tours',
      'Traditional Meals'
    ],
    subDestinations: [
      {
        name: 'Nuwara Eliya Tea Estates',
        description: 'Visit working tea factories and learn about Ceylon tea production',
        image: nuwaraEliyaImage
      },
      {
        name: 'Culinary Experiences',
        description: 'Master the art of Sri Lankan curries with local cooking classes',
        image: sriLankanFoodImage
      }
    ]
  },
  {
    id: 'adrenaline-rush',
    title: 'Adrenaline Rush',
    subtitle: 'Sky Adventures & Thrills',
    description: 'Get your heart pumping with exhilarating aerial adventures over Sri Lanka\'s stunning landscapes. From hot air ballooning to paragliding, experience the island from a bird\'s eye view.',
    image: hotAirBalloonImage,
    duration: '2-4 Days',
    groupSize: '1-8 People',
    rating: 4.7,
    highlights: [
      'Hot Air Ballooning',
      'Paragliding',
      'Scenic Flights',
      'Professional Instructors',
      'Safety Equipment'
    ],
    subDestinations: [
      {
        name: 'Dambulla Hot Air Ballooning',
        description: 'Float over ancient temples and lush landscapes at sunrise',
        image: hotAirBalloonImage
      },
      {
        name: 'Ella Paragliding',
        description: 'Soar over tea plantations and misty mountain valleys',
        image: '/api/placeholder/400/300'
      }
    ]
  },
  {
    id: 'island-nights',
    title: 'Island Nights',
    subtitle: 'Nightlife & Entertainment',
    description: 'Experience Sri Lanka\'s vibrant nightlife scene from sophisticated rooftop bars in Colombo to laid-back beach parties on the southern coast. Discover the island\'s party spirit.',
    image: colomboNightlifeImage,
    duration: '3-5 Days',
    groupSize: '4-20 People',
    rating: 4.6,
    highlights: [
      'Rooftop Bars',
      'Beach Parties',
      'Live Music',
      'Casino Experiences',
      'VIP Access'
    ],
    subDestinations: [
      {
        name: 'Colombo Nightlife',
        description: 'Experience world-class rooftop bars and vibrant nightclubs',
        image: colomboNightlifeImage
      },
      {
        name: 'Southern Coast Beach Parties',
        description: 'Join full moon parties and sunset sessions on pristine beaches',
        image: '/api/placeholder/400/300'
      }
    ]
  },
  {
    id: 'eco-explorer',
    title: 'Eco Explorer',
    subtitle: 'Sustainable Journeys',
    description: 'Discover Sri Lanka\'s incredible biodiversity while minimizing your environmental impact. Stay in eco-lodges, participate in conservation projects, and explore pristine rainforests.',
    image: ecoExplorerImage,
    duration: '5-10 Days',
    groupSize: '2-10 People',
    rating: 4.9,
    highlights: [
      'Eco-Friendly Accommodations',
      'Wildlife Conservation',
      'Rainforest Treks',
      'Community Tourism',
      'Sustainable Travel'
    ],
    subDestinations: [
      {
        name: 'Sinharaja Forest Reserve',
        description: 'Trek through UNESCO World Heritage rainforest with endemic species',
        image: sinharajaForestImage
      },
      {
        name: 'Community-Based Tourism',
        description: 'Stay with local families and support village communities',
        image: '/api/placeholder/400/300'
      }
    ]
  }
];

const DestinationDetails = () => {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section-id');
            if (sectionId) {
              setVisibleSections(prev => [...prev, sectionId]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.destination-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="destinations" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="text-gradient">Discover</span>
            <br />
            <span className="text-foreground">Amazing Destinations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each experience is carefully crafted to showcase the best of Sri Lanka, 
            from ancient wonders to modern adventures.
          </p>
        </div>

        {/* Destination Categories */}
        <div className="space-y-32">
          {destinationCategories.map((category, index) => {
            const isVisible = visibleSections.includes(category.id);
            const isEven = index % 2 === 0;

            return (
              <div
                key={category.id}
                data-section-id={category.id}
                className={`destination-section grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                {/* Image */}
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} relative`}>
                  <div className="group destination-card overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-80 lg:h-96 object-cover image-hover-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                  <div className="space-y-4">
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-xl text-primary font-semibold">
                      {category.subtitle}
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">What's Included:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {category.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gradient-ocean rounded-full"></div>
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sub-destinations */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {category.subDestinations.map((sub, idx) => (
                      <div key={idx} className="group destination-card p-4 hover:scale-100">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <h5 className="font-semibold text-foreground mb-1">{sub.name}</h5>
                            <p className="text-sm text-muted-foreground">{sub.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Watch Experience Button */}
                  <div className="flex justify-center lg:justify-start">
                    <button 
                      className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-full shadow-2xl hover:from-red-600 hover:via-red-700 hover:to-red-800 transition-all duration-300 hover:scale-105 hover:shadow-3xl border-0 overflow-hidden"
                      onClick={() => {
                        // Open YouTube videos for specific sections
                        if (category.id === 'golden-escape') {
                          window.open('https://youtu.be/pt07PvGvAZI?si=QhfiRUHzk42IDWki', '_blank');
                        } else if (category.id === 'wild-free') {
                          window.open('https://youtu.be/w2I3c1f-N0Q?si=Owsbzc-Xpyj9WA4C', '_blank');
                        } else if (category.id === 'village-vibes') {
                          window.open('https://youtu.be/2r7ZYibfObg?si=MqKQhBkhuXfuRPUg', '_blank');
                        } else if (category.id === 'taste-ceylon') {
                          window.open('https://youtu.be/FYfGtZBFrTk?si=4tptAqS284IGS3zZ', '_blank');
                        } else if (category.id === 'adrenaline-rush') {
                          window.open('https://youtu.be/DvSEGZVQ8qY?si=QIjEBbzrWlDDnxEm', '_blank');
                        } else if (category.id === 'island-nights') {
                          window.open('https://youtube.com/shorts/SPzKEgOKnB8?si=dQ32e5j4M-UJIMIn', '_blank');
                        } else if (category.id === 'eco-explorer') {
                          window.open('https://youtu.be/68agKvFYjgE?si=L-u094qkjHrHFQSd', '_blank');
                        } else {
                          // Placeholder for other videos
                          console.log(`Watch ${category.title} video`);
                        }
                      }}
                    >
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Ripple effect */}
                      <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 group-hover:scale-150 transition-all duration-500"></div>
                      
                      {/* Content */}
                      <div className="relative flex items-center space-x-3">
                        <div className="relative">
                          <Play className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-white/20 rounded-full animate-ping group-hover:animate-none"></div>
                        </div>
                        <span className="font-semibold">Watch Experience</span>
                        <div className="w-0 group-hover:w-2 h-2 bg-white/50 rounded-full transition-all duration-300"></div>
                      </div>
                      
                      {/* Shine effect */}
                      <div className="absolute top-0 -left-full h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-700"></div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DestinationDetails;