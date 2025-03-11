'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hasHeader?: boolean;
}

/**
 * Card component provides a container with proper padding, rounded corners, and shadow.
 * It can be configured with or without a header section.
 */
export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hasHeader = false
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-card ${
        hasHeader ? 'overflow-hidden' : 'p-card'
      } ${className}`}
    >
      {children}
    </div>
  );
};

/**
 * CardHeader component provides a styled header section for the Card component.
 */
export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`p-card border-b border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

/**
 * CardContent component provides a styled content section for the Card component.
 */
export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`p-card ${className}`}>
      {children}
    </div>
  );
};

export default Card; 