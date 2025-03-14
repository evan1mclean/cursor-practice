import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TaskCheckbox } from '../app/components/TaskCheckbox';

const meta: Meta<typeof TaskCheckbox> = {
  title: 'Components/TaskCheckbox',
  component: TaskCheckbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TaskCheckbox>;

// Static stories
export const Unchecked: Story = {
  args: {
    checked: false,
    onChange: () => {},
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    onChange: () => {},
  },
};

// Interactive story with state
export const Interactive: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(false);
    
    return (
      <div className="flex flex-col items-center gap-4">
        <TaskCheckbox 
          checked={checked} 
          onChange={() => setChecked(!checked)} 
        />
        <p className="text-sm text-gray-500">
          Click the checkbox to toggle its state
        </p>
      </div>
    );
  },
}; 