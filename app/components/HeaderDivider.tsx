import React from 'react';
import { AddTaskButton } from './AddTaskButton';
import { TaskDivider } from './TaskDivider';

interface HeaderDividerProps {
  /**
   * Function to call when the add button is clicked
   */
  onAddClick: () => void;
  /**
   * Optional className for additional styling
   */
  className?: string;
}

/**
 * HeaderDivider component combines a TaskDivider with an AddTaskButton
 * positioned on top of it. Used to separate the header from the task list in the TodoCard.
 */
export const HeaderDivider: React.FC<HeaderDividerProps> = ({
  onAddClick,
  className = '',
}) => {
  return (
    <div className={`relative pb-6 pt-0 mt-0 border-2 border-purple-500 ${className}`}>
      <div className="flex items-center justify-between">
        {/* Use the existing TaskDivider component */}
        <div className="flex-grow">
          <TaskDivider className="border border-orange-500 w-full" />
        </div>
          <AddTaskButton onClick={onAddClick} />
      </div>
    </div>
  );
};

export default HeaderDivider; 