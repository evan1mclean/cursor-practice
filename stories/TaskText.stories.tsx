import type { Meta, StoryObj } from '@storybook/react';
import { TaskText } from '../app/components/TaskText';

const meta: Meta<typeof TaskText> = {
  title: 'Components/TaskText',
  component: TaskText,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TaskText>;

export const Default: Story = {
  args: {
    text: 'Buy Pizza on the way to work',
    completed: false,
  },
  render: (args) => (
    <div style={{ 
      padding: '20px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <TaskText {...args} />
    </div>
  ),
};

export const Completed: Story = {
  args: {
    text: 'Morning Run',
    completed: true,
  },
  render: (args) => (
    <div style={{ 
      padding: '20px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <TaskText {...args} />
    </div>
  ),
};

export const LongText: Story = {
  args: {
    text: 'This is a very long task description that should be truncated when it exceeds the available space in the container',
    completed: false,
  },
  render: (args) => (
    <div style={{ 
      width: '300px',
      padding: '20px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <TaskText {...args} className="block truncate" />
    </div>
  ),
};

export const LongTextCompleted: Story = {
  args: {
    text: 'This is a very long task description that should be truncated when it exceeds the available space in the container',
    completed: true,
  },
  render: (args) => (
    <div style={{ 
      width: '300px',
      padding: '20px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <TaskText {...args} className="block truncate" />
    </div>
  ),
}; 