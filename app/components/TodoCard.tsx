'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from './Card';
import { DateHeader } from './DateHeader';
import { TaskList, Task } from './TaskList';
import { AddTaskButton } from './AddTaskButton';

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
      <CardHeader>
        <DateHeader 
          date={today}
          taskCount={tasks.length}
        />
      </CardHeader>
      <CardContent>
        <TaskList 
          tasks={tasks} 
          onToggleTask={handleToggleTask} 
        />
      </CardContent>
      <div className="relative h-24">
        <div className="absolute bottom-10 right-10">
          <AddTaskButton onClick={handleAddTask} />
        </div>
      </div>
    </Card>
  );
};

export default TodoCard; 