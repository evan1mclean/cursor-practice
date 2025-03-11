'use client';

import { useTodo } from '../context/TodoContext';
import type { Todo } from '../context/TodoContext';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleTodo } = useTodo();

  return (
    <div className="todo-item group">
      {/* Checkbox */}
      <button
        onClick={() => toggleTodo(todo.id)}
        className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center 
                 hover:border-[var(--accent-color)] transition-colors mr-4 flex-shrink-0"
      >
        {todo.completed && (
          <div className="w-4 h-4 rounded-full bg-[var(--accent-color)]" />
        )}
      </button>

      {/* Todo Content */}
      <div className="flex-1 min-w-0">
        <p className={`text-gray-800 text-lg ${
          todo.completed ? 'line-through text-gray-400' : ''
        }`}>
          {todo.text}
        </p>
        {todo.time && (
          <p className={`text-sm ${
            todo.completed ? 'text-gray-400' : 'text-gray-500'
          }`}>
            {todo.time}
          </p>
        )}
      </div>
    </div>
  );
}; 