'use client';

import React, { useState } from 'react';

interface AddTaskFormProps {
  /**
   * Callback function when a task is added
   */
  onAddTask: (text: string, time?: string) => void;
  /**
   * Callback function when the form is cancelled
   */
  onCancel: () => void;
  /**
   * Optional className for additional styling
   */
  className?: string;
}

/**
 * AddTaskForm component provides a form for adding new tasks.
 */
export const AddTaskForm: React.FC<AddTaskFormProps> = ({
  onAddTask,
  onCancel,
  className = '',
}) => {
  const [text, setText] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTask(text.trim(), time || undefined);
      setText('');
      setTime('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`bg-white rounded-lg p-4 shadow-card ${className}`}
    >
      <div className="mb-4">
        <label htmlFor="task-text" className="block text-sm font-medium text-gray-700 mb-1">
          Task
        </label>
        <input
          type="text"
          id="task-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          placeholder="What do you need to do?"
          autoFocus
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="task-time" className="block text-sm font-medium text-gray-700 mb-1">
          Time (optional)
        </label>
        <input
          type="time"
          id="task-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        />
        <p className="mt-1 text-xs text-gray-500">
          Format: HH:MM (24-hour)
        </p>
      </div>
      
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!text.trim()}
          className={`
            px-4 py-2 text-sm font-medium text-white rounded-md
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary
            ${text.trim() 
              ? 'bg-secondary hover:bg-secondary-dark' 
              : 'bg-gray-300 cursor-not-allowed'
            }
          `}
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm; 