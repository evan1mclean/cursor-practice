'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Card component provides a container with proper padding, rounded corners, and shadow.
 * It matches the white background card in the original design.
 */
export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  style = {},
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-card w-full max-w-lg mx-auto overflow-hidden ${className}`}
      style={{ 
        backgroundColor: 'white',
        boxShadow: '0 15px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 20px -5px rgba(0, 0, 0, 0.04)',
        borderRadius: '0.75rem',
        ...style
      }}
    >
      {children}
    </div>
  );
};

/**
 * CardHeader component provides a styled header section for the Card component.
 */
export const CardHeader: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  style?: React.CSSProperties;
}> = ({ 
  children, 
  className = '',
  style = {},
}) => {
  return (
    <div 
      className={`px-10 pt-10 pb-8 border-b border-gray-100 bg-white ${className}`}
      style={{ 
        backgroundColor: 'white',
        padding: '2.5rem 2.5rem 2rem 2.5rem',
        borderBottom: '1px solid #F3F4F6',
        ...style
      }}
    >
      {children}
    </div>
  );
};

/**
 * CardContent component provides a styled content section for the Card component.
 */
export const CardContent: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  style?: React.CSSProperties;
}> = ({ 
  children, 
  className = '',
  style = {},
}) => {
  return (
    <div 
      className={`px-10 py-6 bg-white ${className}`}
      style={{ 
        backgroundColor: 'white',
        padding: '1.5rem 2.5rem',
        ...style
      }}
    >
      {children}
    </div>
  );
};

/**
 * CardFooter component provides a styled footer section for the Card component.
 */
export const CardFooter: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  style?: React.CSSProperties;
}> = ({ 
  children, 
  className = '',
  style = {},
}) => {
  return (
    <div 
      className={`px-10 pt-6 pb-10 bg-white ${className}`}
      style={{ 
        backgroundColor: 'white',
        padding: '1.5rem 2.5rem 2.5rem 2.5rem',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default Card; 