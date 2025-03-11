'use client';

import { useTodo } from '../context/TodoContext';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const { todos } = useTodo();

  return (
    <div className="mt-4">
      {/* Empty state */}
      {todos.length === 0 ? (
        <div className="text-center py-6">
          <p className="text-gray-500 mb-4 text-lg">No tasks yet!</p>
          <p className="text-gray-400 text-sm">
            Click the + button to add your first task
          </p>
        </div>
      ) : (
        /* Todo items */
        <div className="divide-y divide-gray-100">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
}; 