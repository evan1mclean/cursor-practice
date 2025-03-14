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
}

/**
 * TaskCheckbox component provides a custom styled checkbox for tasks
 * with checked and unchecked states and smooth animation.
 */
export const TaskCheckbox: React.FC<TaskCheckboxProps> = ({
  checked,
  onChange,
  className = '',
}) => {
  return (
    <div className={`relative flex-shrink-0 ${className}`}>
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
          w-6 h-6 md:w-7 md:h-7 rounded-md border-2 flex items-center justify-center
          transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light
          ${checked 
            ? 'bg-secondary-light border-secondary-light text-white' 
            : 'border-gray-300 hover:border-gray-400'
          }
        `}
        aria-hidden="true"
      >
        {checked && (
          <svg 
            className="w-4 h-4 md:w-5 md:h-5 text-white transition-transform duration-300 ease-in-out transform scale-90"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="3" 
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default TaskCheckbox; 