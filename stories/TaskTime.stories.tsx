import type { Meta, StoryObj } from '@storybook/react';
import { TaskTime } from '../app/components/TaskTime';

const meta: Meta<typeof TaskTime> = {
  title: 'Components/TaskTime',
  component: TaskTime,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TaskTime>;

export const Morning: Story = {
  args: {
    time: '7:00 AM',
    completed: false,
  },
  render: (args) => (
    <div style={{ 
      padding: '20px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <TaskTime {...args} />
    </div>
  ),
};

export const MorningCompleted: Story = {
  args: {
    time: '7:00 AM',
    completed: true,
  },
  render: (args) => (
    <div style={{ 
      padding: '20px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <TaskTime {...args} />
    </div>
  ),
};

export const Afternoon: Story = {
  args: {
    time: '12:00 PM',
    completed: false,
  },
  render: (args) => (
    <div style={{ 
      padding: '20px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <TaskTime {...args} />
    </div>
  ),
};

export const Evening: Story = {
  args: {
    time: '8:30 PM',
    completed: false,
  },
  render: (args) => (
    <div style={{ 
      padding: '20px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <TaskTime {...args} />
    </div>
  ),
}; 