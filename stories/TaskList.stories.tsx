import type { Meta, StoryObj } from '@storybook/react';
import { TaskList, Task } from '../app/components/TaskList';

const meta: Meta<typeof TaskList> = {
  title: 'Components/TaskList',
  component: TaskList,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'gradient', value: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #4F46E5 100%)' },
      ],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TaskList>;

// Sample tasks for stories
const sampleTasks: Task[] = [
  { id: '1', text: 'Morning Run', completed: true, time: '7:00 AM' },
  { id: '2', text: 'Buy Pizza on the way to work', completed: false, time: '8:00 AM' },
  { id: '3', text: '10AM Meeting', completed: false, time: '10:00 AM' },
  { id: '4', text: 'Work Lunch with the dudes', completed: false, time: '12:00 PM' },
];

const manyTasks: Task[] = [
  ...sampleTasks,
  { id: '5', text: 'Review project proposal', completed: false, time: '2:00 PM' },
  { id: '6', text: 'Send weekly report', completed: false, time: '3:30 PM' },
  { id: '7', text: 'Call with client', completed: false, time: '4:15 PM' },
  { id: '8', text: 'Gym workout', completed: false, time: '6:00 PM' },
  { id: '9', text: 'Dinner with family', completed: false, time: '7:30 PM' },
  { id: '10', text: 'Read a book', completed: false, time: '9:00 PM' },
];

export const Empty: Story = {
  args: {
    tasks: [],
    onToggleTask: (id) => console.log(`Toggle task ${id}`),
  },
  render: (args) => (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
      <TaskList {...args} />
    </div>
  ),
};

export const FewTasks: Story = {
  args: {
    tasks: sampleTasks,
    onToggleTask: (id) => console.log(`Toggle task ${id}`),
  },
  render: (args) => (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
      <TaskList {...args} />
    </div>
  ),
};

export const ManyTasks: Story = {
  args: {
    tasks: manyTasks,
    onToggleTask: (id) => console.log(`Toggle task ${id}`),
  },
  render: (args) => (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
      <TaskList {...args} />
    </div>
  ),
}; 