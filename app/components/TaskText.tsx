'use client';

import React from 'react';

interface TaskTextProps {
  /**
   * The text content of the task
   */
  text: string;
  /**
   * Whether the task is completed
   */
  completed: boolean;
  /**
   * Optional className for additional styling
   */
  className?: string;
}

/**
 * TaskText component displays the text of a task with support for completed state styling.
 */
export const TaskText: React.FC<TaskTextProps> = ({
  text,
  completed,
  className = '',
}) => {
  return (
    <span 
      className={`
        transition-all duration-300 ease-in-out
        ${completed 
          ? 'text-gray-400 line-through' 
          : 'text-gray-800'
        }
        ${className}
      `}
      style={{
        fontSize: '1.125rem',
        color: completed ? '#9CA3AF' : '#374151',
        textDecoration: completed ? 'line-through' : 'none',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }}
    >
      {text}
    </span>
  );
};

export default TaskText; 