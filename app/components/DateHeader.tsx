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
    <div>
      <div className="flex justify-between items-center mb-1">
        <h1 className="text-2xl font-semibold text-gray-800">
          {dayName}, <span className="text-gray-700">{formattedDay}</span>
        </h1>
        <span className="text-gray-500">
          {totalTasks} Task{totalTasks !== 1 ? 's' : ''}
        </span>
      </div>
      <h2 className="text-lg text-gray-500 font-normal">{month}</h2>
    </div>
  );
}; 