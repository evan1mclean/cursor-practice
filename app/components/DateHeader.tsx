'use client';

import { useTodo } from '../context/TodoContext';

export const DateHeader = () => {
  const { todos } = useTodo();
  const today = new Date();

  // Format the date like "Thursday, 10th" and "December"
  const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
  const day = today.getDate();
  const month = today.toLocaleDateString('en-US', { month: 'long' });
  
  // Add ordinal suffix to day (1st, 2nd, 3rd, etc.)
  const getOrdinalSuffix = (d: number) => {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  const formattedDay = `${day}${getOrdinalSuffix(day)}`;
  const totalTasks = todos.length;

  return (
    <header className="mb-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-semibold text-gray-800">
            {dayName}, {formattedDay}
          </h1>
          <h2 className="text-xl text-gray-500 mt-1">
            {month}
          </h2>
        </div>
        <div className="text-gray-500">
          {totalTasks} Task{totalTasks !== 1 ? 's' : ''}
        </div>
      </div>
    </header>
  );
}; 