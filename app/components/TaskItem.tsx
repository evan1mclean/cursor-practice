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
      className={`
        flex items-center transition-colors duration-200 ease-in-out
        ${className}
      `}
      style={{
        padding: '0.5rem 0'
      }}
    >
      <TaskCheckbox 
        checked={completed} 
        onChange={onToggle} 
        className="mr-5"
        style={{ marginRight: '1.25rem' }}
      />
      <div className="flex-1 min-w-0 flex items-center">
        <TaskText 
          text={text} 
          completed={completed} 
          className="block truncate"
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