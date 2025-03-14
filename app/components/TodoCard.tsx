'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from './Card';
import { DateHeader } from './DateHeader';
import { TaskList, Task } from './TaskList';
import { HeaderDivider } from './HeaderDivider';

interface TodoCardProps {
  /**
   * Initial tasks to display
   */
  initialTasks?: Task[];
  /**
   * Optional className for additional styling
   */
  className?: string;
}

/**
 * TodoCard component combines DateHeader, TaskCountHeader, TaskList, and AddTaskButton
 * to create a complete todo list card.
 */
export const TodoCard: React.FC<TodoCardProps> = ({
  initialTasks = [],
  className = '',
}) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  
  // Get current date information
  const today = new Date();
  
  // Handle task toggling
  const handleToggleTask = (taskId: string) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId 
          ? { ...task, completed: !task.completed } 
          : task
      )
    );
  };
  
  // Handle adding a new task (placeholder for now)
  const handleAddTask = () => {
    console.log('Add task button clicked');
    // In a real app, this would open a form or modal to add a new task
  };
  
  return (
    <Card className={className}>
      <CardHeader className="pb-4 border-2 border-red-500">
        <DateHeader 
          date={today}
          taskCount={tasks.length}
        />
      </CardHeader>
      
      {/* Header divider with add task button */}
      <div className="border-2 border-blue-500">
        <HeaderDivider onAddClick={handleAddTask} />
      </div>
      
      <CardContent className="px-10 pt-4 pb-6 border-2 border-green-500">
        <TaskList 
          tasks={tasks} 
          onToggleTask={handleToggleTask} 
          className="py-2 border-2 border-yellow-500"
        />
      </CardContent>
    </Card>
  );
};

export default TodoCard; 