import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TaskCheckbox } from '../app/components/TaskCheckbox';

const meta: Meta<typeof TaskCheckbox> = {
  title: 'Components/TaskCheckbox',
  component: TaskCheckbox,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
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
  render: (args) => (
    <div style={{ 
      padding: '20px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <TaskCheckbox {...args} />
    </div>
  ),
};

export const Checked: Story = {
  args: {
    checked: true,
    onChange: () => {},
  },
  render: (args) => (
    <div style={{ 
      padding: '20px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <TaskCheckbox {...args} />
    </div>
  ),
};

// Interactive story with state
export const Interactive: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(false);
    
    return (
      <div style={{ 
        padding: '20px', 
        backgroundColor: 'white', 
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px'
      }}>
        <TaskCheckbox 
          checked={checked} 
          onChange={() => setChecked(!checked)} 
        />
        <p style={{ fontSize: '14px', color: '#6B7280' }}>
          {checked ? 'Checkbox is checked. Click to uncheck.' : 'Checkbox is unchecked. Click to check.'}
        </p>
      </div>
    );
  },
};

// Show in context with text
export const WithText: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(false);
    
    return (
      <div style={{ 
        padding: '20px', 
        backgroundColor: 'white', 
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        width: '300px'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: '12px'
        }}>
          <TaskCheckbox 
            checked={checked} 
            onChange={() => setChecked(!checked)} 
          />
          <span style={{ 
            fontSize: '16px', 
            color: checked ? '#9CA3AF' : '#1F2937',
            textDecoration: checked ? 'line-through' : 'none'
          }}>
            Buy groceries on the way home
          </span>
        </div>
      </div>
    );
  },
}; 