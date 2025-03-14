import type { Meta, StoryObj } from '@storybook/react';
import { HeaderDivider } from '../app/components/HeaderDivider';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof HeaderDivider> = {
  title: 'Components/HeaderDivider',
  component: HeaderDivider,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onAddClick: { action: 'add clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof HeaderDivider>;

export const Default: Story = {
  args: {
    onAddClick: action('add button clicked'),
  },
  render: (args) => (
    <div className="w-[500px] bg-white p-6 rounded-lg shadow-md">
      <div className="text-2xl font-bold text-indigo-600 mb-4">Card Header</div>
      <HeaderDivider {...args} />
      <div className="mt-4">
        <div className="flex items-center p-2 mb-2">
          <div className="w-5 h-5 border border-gray-300 rounded mr-3"></div>
          <div>Task item content</div>
        </div>
        <div className="flex items-center p-2 mb-2">
          <div className="w-5 h-5 border border-gray-300 rounded mr-3"></div>
          <div>Another task item</div>
        </div>
      </div>
    </div>
  ),
};

export const WithCustomSpacing: Story = {
  args: {
    onAddClick: action('add button clicked'),
    className: 'my-6',
  },
  render: (args) => (
    <div className="w-[500px] bg-white p-6 rounded-lg shadow-md">
      <div className="p-4 bg-indigo-50 mb-4 rounded">
        <div className="text-xl font-bold text-indigo-600">Thursday, 10th</div>
        <div className="text-gray-500">December</div>
      </div>
      <HeaderDivider {...args} />
      <div className="p-4 bg-gray-50 mt-4 rounded">
        <div className="flex items-center p-2 mb-2">
          <div className="w-5 h-5 border border-gray-300 rounded mr-3"></div>
          <div>Task item content</div>
        </div>
        <div className="flex items-center p-2 mb-2">
          <div className="w-5 h-5 border border-gray-300 rounded mr-3"></div>
          <div>Another task item</div>
        </div>
      </div>
    </div>
  ),
}; 