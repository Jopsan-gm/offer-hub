"use client";

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { EmptyState } from '@/components/ui/EmptyState';

export default function OffersPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [offers, setOffers] = useState<unknown[]>([]);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setOffers([]);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClearFilters = () => {
    setIsLoading(true);
    // Simulate refetching without filters
    setTimeout(() => {
      setOffers([]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8 text-[var(--color-text-primary)]">Marketplace Offers</h1>
      
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-64 rounded-2xl shadow-raised bg-[var(--color-bg-base)]"></div>
          ))}
        </div>
      ) : offers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Offer cards would go here */}
        </div>
      ) : (
        <EmptyState 
          icon={Search}
          title="No offers found"
          description="Try adjusting your filters or search terms"
          onClearFilters={handleClearFilters}
        />
      )}
    </div>
  );
}
