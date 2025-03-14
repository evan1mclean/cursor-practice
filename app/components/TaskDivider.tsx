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
      className={`w-full ${className}`} 
      style={{ 
        borderTop: '1px solid #F3F4F6',
        marginTop: '0.5rem',
        marginBottom: '0.5rem'
      }}
    />
  );
};

export default TaskDivider; 