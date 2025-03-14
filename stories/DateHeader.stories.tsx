import type { Meta, StoryObj } from '@storybook/react';
import { DateHeader } from '../app/components/DateHeader';

const meta: Meta<typeof DateHeader> = {
  title: 'Components/DateHeader',
  component: DateHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DateHeader>;

export const Default: Story = {
  args: {
    date: new Date('2025-03-10T12:00:00'), // Monday, March 10th, 2025
    taskCount: 12,
  },
};

export const NoTasks: Story = {
  args: {
    date: new Date('2025-03-10T12:00:00'), // Monday, March 10th, 2025
    taskCount: 0,
  },
};

export const SingleTask: Story = {
  args: {
    date: new Date('2025-03-10T12:00:00'), // Monday, March 10th, 2025
    taskCount: 1,
  },
};

export const ManyTasks: Story = {
  args: {
    date: new Date('2025-03-10T12:00:00'), // Monday, March 10th, 2025
    taskCount: 42,
  },
}; 