import type { Meta, StoryObj } from '@storybook/react';
import { TaskDivider } from '../app/components/TaskDivider';

const meta: Meta<typeof TaskDivider> = {
  title: 'Components/TaskDivider',
  component: TaskDivider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TaskDivider>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
};

export const WithContent: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="w-full max-w-md">
        <div className="p-4 bg-white">Task 1</div>
        <Story />
        <div className="p-4 bg-white">Task 2</div>
      </div>
    ),
  ],
}; 