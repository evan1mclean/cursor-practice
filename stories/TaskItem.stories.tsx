import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TaskItem } from '../app/components/TaskItem';

const meta: Meta<typeof TaskItem> = {
  title: 'Components/TaskItem',
  component: TaskItem,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TaskItem>;

// Static stories
export const Default: Story = {
  args: {
    text: 'Buy groceries',
    completed: false,
    time: '10:00 AM',
    onToggle: () => {},
  },
  render: (args) => (
    <div style={{ 
      width: '400px',
      padding: '20px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <TaskItem {...args} />
    </div>
  ),
};

export const Completed: Story = {
  args: {
    text: 'Finish project',
    completed: true,
    time: '2:30 PM',
    onToggle: () => {},
  },
  render: (args) => (
    <div style={{ 
      width: '400px',
      padding: '20px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <TaskItem {...args} />
    </div>
  ),
};

export const LongText: Story = {
  args: {
    text: 'This is a very long task description that should be truncated when it exceeds the available space in the container',
    completed: false,
    time: '4:45 PM',
    onToggle: () => {},
  },
  render: (args) => (
    <div style={{ 
      width: '400px',
      padding: '20px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <TaskItem {...args} />
    </div>
  ),
};

export const NoTime: Story = {
  args: {
    text: 'Task without time',
    completed: false,
    onToggle: () => {},
  },
  render: (args) => (
    <div style={{ 
      width: '400px',
      padding: '20px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <TaskItem {...args} />
    </div>
  ),
};

// Interactive story with state
export const Interactive: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [completed, setCompleted] = useState(false);
    
    return (
      <div style={{ 
        width: '400px', 
        backgroundColor: 'white', 
        padding: '16px', 
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <TaskItem 
          text="Click to toggle completion state" 
          completed={completed} 
          time="9:30 AM"
          onToggle={() => setCompleted(!completed)} 
        />
        <p style={{ 
          fontSize: '14px', 
          color: '#6B7280', 
          marginTop: '16px'
        }}>
          Click the checkbox to toggle its state
        </p>
      </div>
    );
  },
}; 