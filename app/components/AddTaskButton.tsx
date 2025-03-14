'use client';

import React from 'react';

interface AddTaskButtonProps {
  /**
   * Callback function when the button is clicked
   */
  onClick: () => void;
  /**
   * Optional className for additional styling
   */
  className?: string;
}

/**
 * AddTaskButton component provides a floating action button with plus icon
 * for adding new tasks.
 */
export const AddTaskButton: React.FC<AddTaskButtonProps> = ({
  onClick,
  className = '',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      style={{
        width: '4rem',
        height: '4rem',
        borderRadius: '50%',
        backgroundColor: '#F87171', // secondary-light
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        border: 'none',
        cursor: 'pointer',
      }}
      aria-label="Add new task"
    >
      <svg
        style={{ width: '2rem', height: '2rem' }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
  );
};

export default AddTaskButton; 