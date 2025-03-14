import type { Meta, StoryObj } from '@storybook/react';
import { DateHeader } from '../app/components/DateHeader';

const meta: Meta<typeof DateHeader> = {
  title: 'Components/DateHeader',
  component: DateHeader,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DateHeader>;

export const Today: Story = {
  args: {
    date: new Date(),
  },
  render: (args) => (
    <div style={{ 
      width: '400px',
      padding: '20px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <DateHeader {...args} />
    </div>
  ),
};

export const Tomorrow: Story = {
  args: {
    date: new Date(new Date().setDate(new Date().getDate() + 1)),
  },
  render: (args) => (
    <div style={{ 
      width: '400px',
      padding: '20px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <DateHeader {...args} />
    </div>
  ),
};

export const Yesterday: Story = {
  args: {
    date: new Date(new Date().setDate(new Date().getDate() - 1)),
  },
  render: (args) => (
    <div style={{ 
      width: '400px',
      padding: '20px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <DateHeader {...args} />
    </div>
  ),
};

export const Default: Story = {
  args: {
    date: new Date('2025-03-10T12:00:00'), // Monday, March 10th, 2025
    taskCount: 12,
  },
};

export const NoTasks: Story = {
  args: {
    date: new Date('2025-03-10T12:00:00'), // Monday, March 10th, 2025
    taskCount: 0,
  },
};

export const SingleTask: Story = {
  args: {
    date: new Date('2025-03-10T12:00:00'), // Monday, March 10th, 2025
    taskCount: 1,
  },
};

export const ManyTasks: Story = {
  args: {
    date: new Date('2025-03-10T12:00:00'), // Monday, March 10th, 2025
    taskCount: 42,
  },
}; 