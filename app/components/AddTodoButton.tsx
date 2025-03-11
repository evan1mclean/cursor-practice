'use client';

import { useState } from 'react';
import { AddTodoModal } from './AddTodoModal';

export const AddTodoButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-red-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg shadow-red-400/30 hover:scale-105 active:scale-95 transition-transform"
        aria-label="Add new todo"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>

      <AddTodoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}; 