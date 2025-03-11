import type { Meta, StoryObj } from '@storybook/react';
import { AppLayout } from '../app/components/AppLayout';

const meta: Meta<typeof AppLayout> = {
  title: 'Layout/AppLayout',
  component: AppLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppLayout>;

export const Default: Story = {
  args: {
    children: (
      <div className="bg-white rounded-xl shadow-card p-card">
        <h1 className="text-2xl font-semibold text-gray-800">Todo List</h1>
        <p className="mt-2 text-gray-600">This is a sample content inside the AppLayout.</p>
      </div>
    ),
  },
};

export const WithMultipleChildren: Story = {
  args: {
    children: (
      <>
        <div className="bg-white rounded-xl shadow-card p-card mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">First Card</h1>
          <p className="mt-2 text-gray-600">This is the first card.</p>
        </div>
        <div className="bg-white rounded-xl shadow-card p-card">
          <h1 className="text-2xl font-semibold text-gray-800">Second Card</h1>
          <p className="mt-2 text-gray-600">This is the second card.</p>
        </div>
      </>
    ),
  },
}; 