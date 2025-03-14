import type { Meta, StoryObj } from '@storybook/react';
import { TaskDivider } from '../app/components/TaskDivider';

const meta: Meta<typeof TaskDivider> = {
  title: 'Components/TaskDivider',
  component: TaskDivider,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TaskDivider>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div style={{ 
      width: '400px',
      padding: '20px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <TaskDivider {...args} />
    </div>
  ),
};

export const WithContent: Story = {
  args: {},
  render: (args) => (
    <div style={{ 
      width: '400px',
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <div style={{ padding: '16px', backgroundColor: 'white' }}>Task 1</div>
      <TaskDivider {...args} />
      <div style={{ padding: '16px', backgroundColor: 'white' }}>Task 2</div>
    </div>
  ),
}; 