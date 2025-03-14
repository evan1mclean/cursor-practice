import type { Meta, StoryObj } from '@storybook/react';
import { TaskText } from '../app/components/TaskText';

const meta: Meta<typeof TaskText> = {
  title: 'Components/TaskText',
  component: TaskText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TaskText>;

export const Default: Story = {
  args: {
    text: 'Buy Pizza on the way to work',
    completed: false,
  },
};

export const Completed: Story = {
  args: {
    text: 'Morning Run',
    completed: true,
  },
};

export const LongText: Story = {
  args: {
    text: 'This is a very long task description that should be truncated when it exceeds the available space in the container',
    completed: false,
  },
  decorators: [
    (Story) => (
      <div className="max-w-xs">
        <Story />
      </div>
    ),
  ],
};

export const LongTextCompleted: Story = {
  args: {
    text: 'This is a very long task description that should be truncated when it exceeds the available space in the container',
    completed: true,
  },
  decorators: [
    (Story) => (
      <div className="max-w-xs">
        <Story />
      </div>
    ),
  ],
}; 