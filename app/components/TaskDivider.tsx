'use client';

import React from 'react';

interface TaskDividerProps {
  /**
   * Optional className for additional styling
   */
  className?: string;
}

/**
 * TaskDivider component provides a visual separator between tasks.
 */
export const TaskDivider: React.FC<TaskDividerProps> = ({
  className = '',
}) => {
  return (
    <div 
      className={`w-full my-2 ${className}`} 
      style={{ 
        borderTop: '1px solid rgba(243, 244, 246, 0.7)'
      }}
    />
  );
};

export default TaskDivider; 