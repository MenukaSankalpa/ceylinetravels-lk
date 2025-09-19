import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-display font-bold text-gradient mb-4">
              Ceyline Travels
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Discover the wonders of Sri Lanka with our expertly crafted travel experiences. 
              Join our journey and explore the pearl of the Indian Ocean through unforgettable adventures.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gradient-ocean rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                <p className="text-muted-foreground text-sm">+94 11 4511064</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gradient-ocean rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground text-sm">travels@ceyline.lk</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gradient-ocean rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Office</h4>
                <p className="text-muted-foreground text-sm">No 536, R A De Mel Mawatha</p>
                <p className="text-muted-foreground text-sm">Colombo 3, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Ceyline Travels. All rights reserved. | Crafted with love for Sri Lankan adventures.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;