'use client';

import { useTodo } from '../context/TodoContext';
import { TodoItem } from './TodoItem';
import { AddTodoButton } from './AddTodoButton';

export const TodoList = () => {
  const { todos } = useTodo();

  return (
    <div className="todo-card">
      {/* Empty state */}
      {todos.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">No tasks yet!</p>
          <p className="text-gray-400 text-sm">
            Click the + button to add your first task
          </p>
        </div>
      ) : (
        /* Todo items */
        <div className="space-y-1">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}

      {/* Add button */}
      <div className="fixed bottom-8 right-8">
        <AddTodoButton />
      </div>
    </div>
  );
}; 