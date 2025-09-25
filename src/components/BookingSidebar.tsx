import React, { useState } from 'react';
import { useBooking } from '@/contexts/BookingContext';
import { X, Mail, Calendar, MapPin, Clipboard, Send, ChevronRight, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BookingSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingSidebar: React.FC<BookingSidebarProps> = ({ isOpen, onClose }) => {
  const {
    selectedDestinations,
    selectedDays,
    removeDestination,
    setDays,
    clearSelections,
  } = useBooking();

  const handleDaysChange = (change: number) => {
    const newDays = Math.max(1, selectedDays + change);
    setDays(newDays);
  };

  const handleSendInquiry = () => {
    if (selectedDestinations.length === 0) return;

    const destinationList = selectedDestinations
      .map((dest) => `${dest.title} (${dest.subtitle})`)
      .join('\n- ');

    const emailBody = `Dear Ceyline Travel Team,

I am interested in planning a trip to Sri Lanka with the following details:

Selected Destinations:
- ${destinationList}

Journey Duration: ${selectedDays} days

Please provide me with a customized itinerary and pricing for this trip.

Looking forward to hearing from you soon.

Best regards`;

    const subject = `Sri Lanka Travel Inquiry - ${selectedDays} Days`;
    const mailtoLink = `mailto:inbound@ceyline.lk?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.open(mailtoLink, '_self');
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-ocean text-white">
          <div className="flex items-center gap-3">
            <Clipboard size={24} />
            <div>
              <h2 className="text-xl font-bold">Journey Planner</h2>
              <p className="text-blue-100 text-sm">Plan your Sri Lankan adventure</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Empty State */}
            {selectedDestinations.length === 0 ? (
              <Card className="border-dashed border-2 border-muted">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No destinations selected</h3>
                  <p className="text-muted-foreground mb-4">
                    Browse the destinations below and click the + button to add them to your journey.
                  </p>
                  <div className="flex items-center gap-1 text-sm text-primary">
                    <span>Start exploring</span>
                    <ChevronRight size={16} />
                  </div>
                </CardContent>
              </Card>
            ) : (
              <>
                {/* Selected Destinations */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MapPin className="text-primary" size={20} />
                        Selected Destinations
                      </div>
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm font-medium">
                        {selectedDestinations.length}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {selectedDestinations.map((destination, index) => (
                      <div
                        key={destination.id}
                        className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm">{destination.title}</h4>
                            <p className="text-xs text-muted-foreground">{destination.subtitle}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeDestination(destination.id)}
                          className="p-1.5 hover:bg-destructive/10 hover:text-destructive rounded-full transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Journey Duration */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="text-primary" size={20} />
                      Journey Duration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center gap-4">
                      <button
                        onClick={() => handleDaysChange(-1)}
                        disabled={selectedDays <= 1}
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        <Minus size={20} />
                      </button>
                      <div className="text-center min-w-[120px]">
                        <div className="text-2xl font-bold text-foreground">{selectedDays}</div>
                        <div className="text-sm text-muted-foreground">Any Days</div>
                      </div>
                      <button
                        onClick={() => handleDaysChange(1)}
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-200"
                      >
                        <Plus size={20} />
                      </button>
                    </div>
                  </CardContent>
                </Card>

                {/* Send Inquiry Button */}
                <Button
                  onClick={handleSendInquiry}
                  disabled={selectedDestinations.length === 0}
                  className="w-full btn-ocean flex items-center gap-2 py-6"
                >
                  <Send size={18} />
                  Send Inquiry to Ceyline Travel
                </Button>
              </>
            )}
          </div>

          {/* Footer Actions */}
          <div className="border-t border-border p-6 bg-muted/20">
            {selectedDestinations.length > 0 && (
              <button
                onClick={clearSelections}
                className="w-full text-sm text-muted-foreground hover:text-destructive transition-colors"
              >
                Clear all selections
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingSidebar;