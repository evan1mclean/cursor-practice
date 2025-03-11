import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardContent } from '../app/components/Card';

const meta: Meta<typeof Card> = {
  title: 'Layout/Card',
  component: Card,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="p-6 bg-gray-100" style={{ minHeight: '400px' }}>
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
      <p className="text-gray-800">This is a simple card with padding of 1.5rem (p-6). The padding provides consistent spacing between the content and the edges of the card.</p>
    ),
  },
};

export const WithHeader: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <h2 className="text-xl font-semibold text-gray-800">Card Header</h2>
        </CardHeader>
        <CardContent>
          <p className="text-gray-800">This is a card with a header section. The card has padding of 1.5rem (p-6), ensuring consistent spacing throughout.</p>
        </CardContent>
      </>
    ),
  },
};

export const WithCustomClassName: Story = {
  args: {
    className: 'border-2 border-primary',
    children: (
      <p className="text-gray-800">This card has a custom border class applied. The card padding ensures text doesn&apos;t touch the edges.</p>
    ),
  },
};

export const WithComplexContent: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Tasks</h2>
            <span className="text-sm text-gray-500">5 items</span>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="w-5 h-5 rounded-full border-2 border-gray-300 mr-3"></span>
              <span className="text-gray-800">First task</span>
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 rounded-full border-2 border-gray-300 mr-3"></span>
              <span className="text-gray-800">Second task</span>
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 rounded-full border-2 border-gray-300 mr-3"></span>
              <span className="text-gray-800">Third task</span>
            </li>
          </ul>
        </CardContent>
      </>
    ),
  },
}; 