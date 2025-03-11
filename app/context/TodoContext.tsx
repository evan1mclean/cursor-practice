'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  time?: string;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string, time?: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load todos from localStorage on initial render
  useEffect(() => {
    try {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    } catch (error) {
      console.error('Failed to load todos from localStorage:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) { // Only save after initial load
      try {
        localStorage.setItem('todos', JSON.stringify(todos));
      } catch (error) {
        console.error('Failed to save todos to localStorage:', error);
      }
    }
  }, [todos, isLoading]);

  const addTodo = (text: string, time?: string) => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        text,
        completed: false,
        time,
      },
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
}; 