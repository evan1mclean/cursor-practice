'use client';

import { useTodo } from '../context/TodoContext';
import type { Todo } from '../context/TodoContext';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleTodo } = useTodo();

  return (
    <div className={`flex items-center py-3 ${todo.completed ? 'opacity-70' : ''}`}>
      <button
        onClick={() => toggleTodo(todo.id)}
        className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
          todo.completed 
            ? 'bg-red-500 border-red-500' 
            : 'border-gray-300 hover:border-gray-400'
        }`}
        aria-label={`Mark "${todo.text}" as ${todo.completed ? 'incomplete' : 'complete'}`}
      >
        {todo.completed && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-3 h-3"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      <span className={`flex-grow ml-3 ${
        todo.completed ? 'text-gray-500 line-through' : 'text-gray-800'
      }`}>
        {todo.text}
      </span>

      {todo.time && (
        <span className="text-sm text-gray-500 ml-2">
          {todo.time}
        </span>
      )}
    </div>
  );
}; 