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
    <div className={`h-px bg-gray-100 w-full my-2 ${className}`} />
  );
};

export default TaskDivider; 