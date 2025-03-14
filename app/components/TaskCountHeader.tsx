'use client';

import React from 'react';

interface TaskCountHeaderProps {
  /**
   * The number of tasks to display
   */
  count: number;
  /**
   * Optional className for additional styling
   */
  className?: string;
}

/**
 * TaskCountHeader component displays the number of tasks
 * with proper pluralization.
 */
export const TaskCountHeader: React.FC<TaskCountHeaderProps> = ({ 
  count, 
  className = '' 
}) => {
  return (
    <div className={`text-gray-500 text-lg font-normal ${className}`}>
      {count} Task{count !== 1 ? 's' : ''}
    </div>
  );
};

export default TaskCountHeader; 