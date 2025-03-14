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
      <div className="flex items-center">
        <h1 
          className="font-semibold"
          style={{ 
            fontSize: '2.25rem', 
            fontWeight: 600, 
            color: '#6366F1' 
          }}
        >
          {dayName}, {formattedDay}
        </h1>
      </div>
      <div className="flex justify-between items-center">
        <p 
          className="mt-1"
          style={{ 
            fontSize: '1.25rem', 
            color: '#9CA3AF', 
            marginTop: '0.25rem' 
          }}
        >
          {month}
        </p>
        <TaskCountHeader 
          count={taskCount} 
          style={{ 
            fontSize: '1.25rem', 
            color: '#9CA3AF' 
          }} 
        />
      </div>
    </div>
  );
}; 