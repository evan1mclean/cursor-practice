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
  /**
   * Optional style object for additional styling
   */
  style?: React.CSSProperties;
}

/**
 * AddTaskButton component provides a floating action button with plus icon
 * for adding new tasks.
 */
export const AddTaskButton: React.FC<AddTaskButtonProps> = ({
  onClick,
  className = '',
  style = {},
}) => {
  const defaultStyle = {
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
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      style={{ ...defaultStyle, ...style }}
      aria-label="Add new task"
    >
      <svg
        style={{ 
          width: style.width ? `calc(${typeof style.width === 'string' ? style.width : style.width + 'px'} / 2)` : '2rem', 
          height: style.height ? `calc(${typeof style.height === 'string' ? style.height : style.height + 'px'} / 2)` : '2rem' 
        }}
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