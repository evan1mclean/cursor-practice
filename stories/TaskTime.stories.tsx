import type { Meta, StoryObj } from '@storybook/react';
import { TaskTime } from '../app/components/TaskTime';

const meta: Meta<typeof TaskTime> = {
  title: 'Components/TaskTime',
  component: TaskTime,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TaskTime>;

export const Morning: Story = {
  args: {
    time: '7:00 AM',
    completed: false,
  },
};

export const MorningCompleted: Story = {
  args: {
    time: '7:00 AM',
    completed: true,
  },
};

export const Afternoon: Story = {
  args: {
    time: '12:00 PM',
    completed: false,
  },
};

export const Evening: Story = {
  args: {
    time: '8:30 PM',
    completed: false,
  },
}; 