'use client';

import React from 'react';
import { TaskCountHeader } from './TaskCountHeader';

interface DateHeaderProps {
  /**
   * Date to display. Defaults to current date if not provided.
   */
  date?: Date;
  /**
   * Number of tasks to display. Defaults to 0 if not provided.
   */
  taskCount?: number;
}

/**
 * DateHeader component displays the current date and task count
 * in the format "Thursday, 10th" and "December" with task count.
 */
export const DateHeader: React.FC<DateHeaderProps> = ({ 
  date = new Date(),
  taskCount = 0
}) => {
  // Format the date like "Thursday, 10th" and "December"
  const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
  const day = date.getDate();
  const month = date.toLocaleDateString('en-US', { month: 'long' });
  
  // Add ordinal suffix to day (1st, 2nd, 3rd, etc.)
  const getOrdinalSuffix = (d: number) => {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  const formattedDay = `${day}${getOrdinalSuffix(day)}`;

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <h1 className="text-2xl font-semibold text-gray-800">
          {dayName}, <span className="text-gray-700">{formattedDay}</span>
        </h1>
        <TaskCountHeader count={taskCount} />
      </div>
      <h2 className="text-lg text-gray-500 font-normal">{month}</h2>
    </div>
  );
}; 