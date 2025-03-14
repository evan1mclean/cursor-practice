import type { Meta, StoryObj } from '@storybook/react';
import { AddTaskForm } from '../app/components/AddTaskForm';

const meta: Meta<typeof AddTaskForm> = {
  title: 'Components/AddTaskForm',
  component: AddTaskForm,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AddTaskForm>;

export const Default: Story = {
  args: {
    onAddTask: (text, time) => console.log('Task added:', text, time),
    onCancel: () => console.log('Form canceled'),
  },
  render: (args) => (
    <div style={{ 
      width: '400px',
      padding: '20px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <AddTaskForm {...args} />
    </div>
  ),
};

export const WithinCard: Story = {
  args: {
    onAddTask: (text, time) => {
      alert(`Task added: ${text}${time ? ` at ${time}` : ''}`);
    },
    onCancel: () => {
      alert('Form cancelled');
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md bg-white rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
        <Story />
      </div>
    ),
  ],
}; 