import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardContent } from '../app/components/Card';

const meta: Meta<typeof Card> = {
  title: 'Layout/Card',
  component: Card,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="p-6 bg-gray-100">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <p className="text-gray-800">This is a simple card with default padding.</p>
    ),
  },
};

export const WithHeader: Story = {
  args: {
    hasHeader: true,
    children: (
      <>
        <CardHeader>
          <h2 className="text-xl font-semibold text-gray-800">Card Header</h2>
        </CardHeader>
        <CardContent>
          <p className="text-gray-800">This is a card with a header section.</p>
        </CardContent>
      </>
    ),
  },
};

export const WithCustomClassName: Story = {
  args: {
    className: 'border-2 border-primary',
    children: (
      <p className="text-gray-800">This card has a custom border class applied.</p>
    ),
  },
};

export const WithComplexContent: Story = {
  args: {
    hasHeader: true,
    children: (
      <>
        <CardHeader>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Tasks</h2>
            <span className="text-sm text-gray-500">5 items</span>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="w-4 h-4 rounded-full border border-gray-300 mr-3"></span>
              <span className="text-gray-800">First task</span>
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 rounded-full border border-gray-300 mr-3"></span>
              <span className="text-gray-800">Second task</span>
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 rounded-full border border-gray-300 mr-3"></span>
              <span className="text-gray-800">Third task</span>
            </li>
          </ul>
        </CardContent>
      </>
    ),
  },
}; 