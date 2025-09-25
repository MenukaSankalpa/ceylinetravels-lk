import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface SelectedDestination {
  id: string;
  title: string;
  subtitle: string;
}

interface BookingContextType {
  selectedDestinations: SelectedDestination[];
  selectedDays: number;
  addDestination: (destination: SelectedDestination) => void;
  removeDestination: (id: string) => void;
  setDays: (days: number) => void;
  clearSelections: () => void;
  isDestinationSelected: (id: string) => boolean;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

interface BookingProviderProps {
  children: ReactNode;
}

export const BookingProvider: React.FC<BookingProviderProps> = ({ children }) => {
  const [selectedDestinations, setSelectedDestinations] = useState<SelectedDestination[]>([]);
  const [selectedDays, setSelectedDays] = useState<number>(7);

  const addDestination = (destination: SelectedDestination) => {
    setSelectedDestinations((prev) => {
      if (prev.find((d) => d.id === destination.id)) {
        return prev; // Already selected
      }
      return [...prev, destination];
    });
  };

  const removeDestination = (id: string) => {
    setSelectedDestinations((prev) => prev.filter((d) => d.id !== id));
  };

  const setDays = (days: number) => {
    setSelectedDays(days);
  };

  const clearSelections = () => {
    setSelectedDestinations([]);
    setSelectedDays(7);
  };

  const isDestinationSelected = (id: string) => {
    return selectedDestinations.some((d) => d.id === id);
  };

  return (
    <BookingContext.Provider
      value={{
        selectedDestinations,
        selectedDays,
        addDestination,
        removeDestination,
        setDays,
        clearSelections,
        isDestinationSelected,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};