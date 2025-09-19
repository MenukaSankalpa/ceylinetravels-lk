import { useState } from 'react';
import { Mail, MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingContactButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleEmail = () => {
    window.open('mailto:inbound@ceyline.lk?subject=Travel Inquiry - Sri Lanka Adventure', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/94743898637?text=Hi! I\'m interested in your Sri Lanka travel packages', '_blank');
  };

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
      {/* Contact Options */}
      <div className={`flex flex-col gap-3 transition-all duration-300 ease-out ${
        isExpanded 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}>
        {/* Email Button */}
        <Button
          onClick={handleEmail}
          className="group relative w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-0"
        >
          <Mail className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Send Email
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>
        </Button>

        {/* WhatsApp Button */}
        <Button
          onClick={handleWhatsApp}
          className="group relative w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-0"
        >
          <MessageCircle className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            WhatsApp Chat
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>
        </Button>
      </div>

      {/* Main Toggle Button */}
      <Button
        onClick={toggleExpanded}
        className={`group relative w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-0 ${
          isExpanded ? 'rotate-45' : 'rotate-0'
        }`}
      >
        {isExpanded ? (
          <X className="h-7 w-7 text-white transition-all duration-300" />
        ) : (
          <div className="relative">
            <MessageCircle className="h-7 w-7 text-white transition-all duration-300 group-hover:scale-110" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        )}
        
        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-300"></div>
        
        {/* Tooltip for main button */}
        {!isExpanded && (
          <div className="absolute right-18 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Contact Us
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>
        )}
      </Button>

      {/* Floating animation for the main button */}
      <div className="absolute inset-0 -z-10 rounded-full bg-blue-500/20 animate-ping opacity-75"></div>
    </div>
  );
};

export default FloatingContactButton;