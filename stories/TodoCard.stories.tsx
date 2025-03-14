import type { Meta, StoryObj } from '@storybook/react';
import { TodoCard } from '../app/components/TodoCard';
import { Task } from '../app/components/TaskList';

const meta: Meta<typeof TodoCard> = {
  title: 'Components/TodoCard',
  component: TodoCard,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'gradient',
      values: [
        { name: 'gradient', value: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #4F46E5 100%)' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TodoCard>;

// Sample tasks for stories
const sampleTasks: Task[] = [
  { id: '1', text: 'Morning Run', completed: true, time: '7:00 AM' },
  { id: '2', text: 'Buy Pizza on the way to work', completed: false, time: '8:00 AM' },
  { id: '3', text: '10AM Meeting', completed: false, time: '10:00 AM' },
  { id: '4', text: 'Work Lunch with the dudes', completed: false, time: '12:00 PM' },
];

export const Empty: Story = {
  args: {
    initialTasks: [],
  },
  render: (args) => (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <TodoCard {...args} />
    </div>
  ),
};

export const WithTasks: Story = {
  args: {
    initialTasks: sampleTasks,
  },
  render: (args) => (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <TodoCard {...args} />
    </div>
  ),
};

export const DesignExample: Story = {
  args: {
    initialTasks: sampleTasks,
  },
  render: (args) => (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <TodoCard {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This example showcases the TodoCard with the HeaderDivider component that positions the AddTaskButton on the divider line between the header and content sections.',
      },
    },
  },
}; 