'use client';

import React from 'react';
import { TaskItem } from './TaskItem';
import { TaskDivider } from './TaskDivider';

export interface Task {
  /**
   * Unique identifier for the task
   */
  id: string;
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
}

interface TaskListProps {
  /**
   * Array of tasks to display
   */
  tasks: Task[];
  /**
   * Callback function when a task is toggled
   */
  onToggleTask: (taskId: string) => void;
  /**
   * Optional className for additional styling
   */
  className?: string;
}

/**
 * TaskList component renders multiple TaskItems with proper spacing.
 * It handles the empty state and provides consistent layout for tasks.
 */
export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleTask,
  className = '',
}) => {
  if (tasks.length === 0) {
    return (
      <div className={`py-6 text-center ${className}`}>
        <p className="text-gray-500 text-lg">No tasks yet. Add your first task!</p>
      </div>
    );
  }

  return (
    <div className={className}>
      {tasks.map((task, index) => (
        <div key={task.id} className="task-container">
          <div className="py-4">
            <TaskItem
              text={task.text}
              completed={task.completed}
              time={task.time}
              onToggle={() => onToggleTask(task.id)}
            />
          </div>
          
          {index < tasks.length - 1 && (
            <div className="py-4">
              <TaskDivider />
            </div>
          )}
        </div>
      ))}

      <style jsx>{`
        .task-container {
          margin-bottom: 12px;
        }
        .task-container:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
};

export default TaskList; 