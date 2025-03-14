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
  /**
   * Optional style object for additional styling
   */
  style?: React.CSSProperties;
}

/**
 * TaskCountHeader component displays the number of tasks
 * with proper pluralization.
 */
export const TaskCountHeader: React.FC<TaskCountHeaderProps> = ({ 
  count, 
  className = '',
  style = {}
}) => {
  return (
    <div 
      className={`text-gray-500 text-lg font-normal ${className}`}
      style={style}
    >
      {count} Task{count !== 1 ? 's' : ''}
    </div>
  );
};

export default TaskCountHeader; 