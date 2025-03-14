import type { Meta, StoryObj } from '@storybook/react';
import { AddTaskButton } from '../app/components/AddTaskButton';

const meta: Meta<typeof AddTaskButton> = {
  title: 'Components/AddTaskButton',
  component: AddTaskButton,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AddTaskButton>;

export const Default: Story = {
  args: {
    onClick: () => alert('Add task button clicked'),
  },
  render: (args) => (
    <div style={{ 
      width: '400px',
      padding: '20px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <AddTaskButton {...args} />
    </div>
  ),
};

export const WithPosition: Story = {
  args: {
    onClick: () => console.log('Add task button clicked'),
  },
  render: (args) => (
    <div style={{ position: 'relative', width: '400px', height: '300px', backgroundColor: 'white', borderRadius: '8px', padding: '16px' }}>
      <div style={{ position: 'absolute', bottom: '16px', right: '16px' }}>
        <AddTaskButton {...args} />
      </div>
    </div>
  ),
};

export const InContext: Story = {
  args: {
    onClick: () => console.log('Add task button clicked'),
  },
  render: (args) => (
    <div style={{ position: 'relative', width: '400px', backgroundColor: 'white', borderRadius: '8px', padding: '24px' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '16px' }}>Tasks</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '64px' }}>
        <div style={{ padding: '12px', backgroundColor: '#f3f4f6', borderRadius: '4px' }}>Task 1</div>
        <div style={{ padding: '12px', backgroundColor: '#f3f4f6', borderRadius: '4px' }}>Task 2</div>
        <div style={{ padding: '12px', backgroundColor: '#f3f4f6', borderRadius: '4px' }}>Task 3</div>
      </div>
      <div style={{ position: 'absolute', bottom: '24px', right: '24px' }}>
        <AddTaskButton {...args} />
      </div>
    </div>
  ),
}; 