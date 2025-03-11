'use client';

import { useState, useEffect, useRef } from 'react';
import { useTodo } from '../context/TodoContext';

interface AddTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddTodoModal = ({ isOpen, onClose }: AddTodoModalProps) => {
  const [text, setText] = useState('');
  const [time, setTime] = useState('');
  const { addTodo } = useTodo();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim(), time.trim() || undefined);
      setText('');
      setTime('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Task</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="todo-text" className="block text-sm font-medium text-gray-600 mb-1">
              Task
            </label>
            <input
              ref={inputRef}
              id="todo-text"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
              placeholder="What needs to be done?"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="todo-time" className="block text-sm font-medium text-gray-600 mb-1">
              Time (optional)
            </label>
            <input
              id="todo-time"
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
              placeholder="e.g., 3:00 PM"
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[var(--accent-color)] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}; 