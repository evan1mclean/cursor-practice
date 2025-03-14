import type { Meta, StoryObj } from '@storybook/react';
import { TaskCountHeader } from '../app/components/TaskCountHeader';

const meta: Meta<typeof TaskCountHeader> = {
  title: 'Components/TaskCountHeader',
  component: TaskCountHeader,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TaskCountHeader>;

export const NoTasks: Story = {
  args: {
    count: 0,
  },
  render: (args) => (
    <div style={{ 
      width: '400px',
      padding: '20px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <TaskCountHeader {...args} />
    </div>
  ),
};

export const OneTask: Story = {
  args: {
    count: 1,
  },
  render: (args) => (
    <div style={{ 
      width: '400px',
      padding: '20px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <TaskCountHeader {...args} />
    </div>
  ),
};

export const MultipleTasks: Story = {
  args: {
    count: 5,
  },
  render: (args) => (
    <div style={{ 
      width: '400px',
      padding: '20px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <TaskCountHeader {...args} />
    </div>
  ),
};

export const ManyTasks: Story = {
  args: {
    count: 99,
  },
}; 