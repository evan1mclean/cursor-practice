import type { Meta, StoryObj } from '@storybook/react';
import { AppLayout } from '../app/components/AppLayout';

const meta: Meta<typeof AppLayout> = {
  title: 'Layout/AppLayout',
  component: AppLayout,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppLayout>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Page Content</h1>
        <p className="mb-4">This is the main content area of the application.</p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Content Card</h2>
          <p>This card demonstrates content within the app layout.</p>
        </div>
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