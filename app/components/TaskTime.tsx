'use client';

import React from 'react';

interface TaskTimeProps {
  /**
   * The time string to display (e.g., "10:00 AM")
   */
  time: string;
  /**
   * Whether the task is completed
   */
  completed?: boolean;
  /**
   * Optional className for additional styling
   */
  className?: string;
}

/**
 * TaskTime component displays the time for a task with proper formatting.
 */
export const TaskTime: React.FC<TaskTimeProps> = ({
  time,
  completed = false,
  className = '',
}) => {
  // Format the time if needed (e.g., convert from 24h to 12h format)
  // This is a simple implementation that assumes the time is already formatted correctly
  
  return (
    <span 
      className={`
        transition-all duration-300 ease-in-out ml-auto
        ${completed ? 'text-gray-400' : 'text-gray-500'}
        ${className}
      `}
      style={{
        fontSize: '1.125rem',
        color: completed ? '#9CA3AF' : '#6B7280',
        marginLeft: 'auto'
      }}
    >
      {time}
    </span>
  );
};

export default TaskTime; 