'use client';

import React from 'react';

interface TaskCheckboxProps {
  /**
   * Whether the checkbox is checked
   */
  checked: boolean;
  /**
   * Callback function when the checkbox is toggled
   */
  onChange: () => void;
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
 * TaskCheckbox component provides a custom styled checkbox for tasks
 * with checked and unchecked states and smooth animation.
 */
export const TaskCheckbox: React.FC<TaskCheckboxProps> = ({
  checked,
  onChange,
  className = '',
  style = {},
}) => {
  return (
    <div className={`relative flex-shrink-0 ${className}`} style={style}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only" // Hide the actual input but keep it accessible
        aria-label={checked ? "Mark task as incomplete" : "Mark task as complete"}
      />
      <button
        onClick={onChange}
        className={`
          w-6 h-6 rounded-full flex items-center justify-center
          transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-light
          ${checked 
            ? 'border-transparent' 
            : 'border border-gray-300 hover:border-gray-400'
          }
        `}
        style={{ 
          width: '24px', 
          height: '24px',
          minWidth: '24px', 
          minHeight: '24px',
          backgroundColor: checked ? '#F87171' : 'white',
          border: checked ? 'none' : '1px solid #D1D5DB',
          boxShadow: checked ? '0 1px 2px rgba(0, 0, 0, 0.05)' : 'none'
        }}
        aria-hidden="true"
      >
        {checked && (
          <svg 
            className="transition-transform duration-300 ease-in-out transform"
            fill="none" 
            stroke="white" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '14px', height: '14px' }}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2.5" 
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default TaskCheckbox; 