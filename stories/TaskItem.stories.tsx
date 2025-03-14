import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TaskItem } from '../app/components/TaskItem';

const meta: Meta<typeof TaskItem> = {
  title: 'Components/TaskItem',
  component: TaskItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TaskItem>;

// Static stories
export const Default: Story = {
  args: {
    text: 'Buy Pizza on the way to work',
    completed: false,
    time: '8:00 AM',
    onToggle: () => {},
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md bg-white p-4 rounded-lg">
        <Story />
      </div>
    ),
  ],
};

export const Completed: Story = {
  args: {
    text: 'Morning Run',
    completed: true,
    time: '7:00 AM',
    onToggle: () => {},
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md bg-white p-4 rounded-lg">
        <Story />
      </div>
    ),
  ],
};

export const WithoutTime: Story = {
  args: {
    text: 'Read a book',
    completed: false,
    onToggle: () => {},
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md bg-white p-4 rounded-lg">
        <Story />
      </div>
    ),
  ],
};

export const LongText: Story = {
  args: {
    text: 'This is a very long task description that should be truncated when it exceeds the available space in the container',
    completed: false,
    time: '10:00 AM',
    onToggle: () => {},
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md bg-white p-4 rounded-lg">
        <Story />
      </div>
    ),
  ],
};

// Interactive story with state
export const Interactive: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [completed, setCompleted] = useState(false);
    
    return (
      <div className="w-full max-w-md bg-white p-4 rounded-lg">
        <TaskItem 
          text="Click to toggle completion state" 
          completed={completed} 
          time="9:30 AM"
          onToggle={() => setCompleted(!completed)} 
        />
        <p className="text-sm text-gray-500 mt-4">
          Click the checkbox or task to toggle its state
        </p>
      </div>
    );
  },
}; 