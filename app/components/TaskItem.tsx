'use client';

import React from 'react';
import { TaskCheckbox } from './TaskCheckbox';
import { TaskText } from './TaskText';
import { TaskTime } from './TaskTime';

interface TaskItemProps {
  /**
   * The text content of the task
   */
  text: string;
  /**
   * Whether the task is completed
   */
  completed: boolean;
  /**
   * The time associated with the task (optional)
   */
  time?: string;
  /**
   * Callback function when the task is toggled
   */
  onToggle: () => void;
  /**
   * Optional className for additional styling
   */
  className?: string;
}

/**
 * TaskItem component displays a single task with checkbox, text, and optional time.
 */
export const TaskItem: React.FC<TaskItemProps> = ({
  text,
  completed,
  time,
  onToggle,
  className = '',
}) => {
  return (
    <div 
      className={`flex items-center py-3 ${className}`}
      style={{ minHeight: '48px' }}
    >
      <TaskCheckbox 
        checked={completed} 
        onChange={onToggle} 
        style={{ marginRight: '1.5rem' }}
      />
      <div className="flex items-center justify-between flex-1 min-w-0">
        <TaskText 
          text={text} 
          completed={completed} 
          className="block truncate mr-4"
        />
        {time && (
          <TaskTime 
            time={time} 
            completed={completed}
          />
        )}
      </div>
    </div>
  );
};

export default TaskItem; 