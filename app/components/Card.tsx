'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Card component provides a container with proper padding, rounded corners, and shadow.
 * It can be used with CardHeader and CardContent components for structured content.
 */
export const Card: React.FC<CardProps> = ({ 
  children, 
  className = ''
}) => {
  return (
    <div 
      className={`bg-white rounded-[1.25rem] shadow-card p-6 ${className}`}
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
    <div className={`border-b border-gray-100 ${className}`}>
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
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default Card; 