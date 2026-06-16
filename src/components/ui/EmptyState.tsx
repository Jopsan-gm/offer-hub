import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClearFilters: () => void;
}

export function EmptyState({ icon: Icon, title, description, onClearFilters }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center shadow-sunken rounded-2xl bg-[var(--color-bg-sunken)] w-full max-w-2xl mx-auto my-12 animate-fadeIn">
      <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full shadow-raised bg-[var(--color-bg-base)] text-primary">
        <Icon className="w-10 h-10 text-[var(--color-primary)]" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-[var(--color-text-primary)]">{title}</h3>
      <p className="text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto">
        {description}
      </p>
      <button 
        onClick={onClearFilters}
        className="px-6 py-3 font-medium rounded-full btn-neumorphic-primary"
      >
        Clear filters
      </button>
    </div>
  );
}
