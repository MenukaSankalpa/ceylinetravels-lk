import React from 'react';
import { useBooking } from '@/contexts/BookingContext';
import { Clipboard, Plus } from 'lucide-react';

interface BookingTriggerProps {
  onClick: () => void;
}

const BookingTrigger: React.FC<BookingTriggerProps> = ({ onClick }) => {
  const { selectedDestinations } = useBooking();

  return (
    <button
      onClick={onClick}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 group"
    >
      {/* Main Button */}
      <div className="bg-gradient-ocean text-white p-4 rounded-l-2xl shadow-strong hover:shadow-glow transition-all duration-300 hover:scale-105 flex items-center gap-3">
        <div className="relative">
          <Clipboard size={24} />
          {selectedDestinations.length > 0 && (
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-secondary text-primary text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
              {selectedDestinations.length}
            </div>
          )}
        </div>
        
        {/* Expandable Text */}
        <div className="overflow-hidden transition-all duration-300 w-0 group-hover:w-32">
          <span className="whitespace-nowrap text-sm font-semibold">
            Plan Journey
          </span>
        </div>
      </div>

      {/* Side Tab */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full">
        <div className="bg-gradient-ocean text-white px-2 py-6 rounded-l-lg text-xs font-semibold writing-mode-vertical-rl">
          {selectedDestinations.length > 0 
            ? `${selectedDestinations.length} Selected` 
            : 'Plan Your Trip'
          }
        </div>
      </div>

      {/* Pulse Animation for Empty State */}
      {selectedDestinations.length === 0 && (
        <div className="absolute inset-0 rounded-l-2xl bg-gradient-ocean opacity-20 animate-ping"></div>
      )}
    </button>
  );
};

export default BookingTrigger;