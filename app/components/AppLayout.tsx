'use client';

import React from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
}

/**
 * AppLayout component provides the main layout structure with gradient background
 * and responsive container for the todo card.
 */
export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-primary flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md">
        {children}
      </div>
    </div>
  );
};

export default AppLayout; 