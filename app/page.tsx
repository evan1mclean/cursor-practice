'use client';

import { TodoProvider } from './context/TodoContext';
import { DateHeader } from './components/DateHeader';
import { TodoList } from './components/TodoList';
import { useEffect, useState } from 'react';
import { AddTodoButton } from './components/AddTodoButton';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevent hydration issues by not rendering until mounted
  }

  return (
    <TodoProvider>
      <main className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 relative">
          <DateHeader />
          <TodoList />
          <div className="absolute -bottom-5 right-6">
            <AddTodoButton />
          </div>
        </div>
      </main>
    </TodoProvider>
  );
}
