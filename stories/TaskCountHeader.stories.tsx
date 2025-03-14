import type { Meta, StoryObj } from '@storybook/react';
import { TaskCountHeader } from '../app/components/TaskCountHeader';

const meta: Meta<typeof TaskCountHeader> = {
  title: 'Components/TaskCountHeader',
  component: TaskCountHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TaskCountHeader>;

export const NoTasks: Story = {
  args: {
    count: 0,
  },
};

export const SingleTask: Story = {
  args: {
    count: 1,
  },
};

export const MultipleTasks: Story = {
  args: {
    count: 12,
  },
};

export const ManyTasks: Story = {
  args: {
    count: 99,
  },
}; 