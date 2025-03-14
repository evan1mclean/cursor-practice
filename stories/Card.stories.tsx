import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardContent, CardFooter } from '../app/components/Card';
import { TaskItem } from '../app/components/TaskItem';
import { TaskDivider } from '../app/components/TaskDivider';
import { AddTaskButton } from '../app/components/AddTaskButton';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'gradient',
      values: [
        { name: 'gradient', value: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #4F46E5 100%)' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: <p className="p-10 text-lg">This is a card component</p>,
  },
  render: (args) => (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <Card {...args} />
    </div>
  ),
};

export const WithHeader: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-4xl font-semibold text-indigo-600">Thursday, 10th</h3>
              <p className="text-xl text-gray-400 mt-1">December</p>
            </div>
            <p className="text-xl text-gray-400">12 Tasks</p>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700">This is a card with a header</p>
        </CardContent>
      </>
    ),
  },
  render: (args) => (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <Card {...args} />
    </div>
  ),
};

export const WithFooter: Story = {
  args: {
    children: (
      <>
        <CardContent>
          <p className="text-lg text-gray-700">This is a card with a footer</p>
        </CardContent>
        <CardFooter>
          <div className="flex justify-end">
            <button className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center shadow-button">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </CardFooter>
      </>
    ),
  },
  render: (args) => (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <Card {...args} />
    </div>
  ),
};

export const Complete: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '2.25rem', fontWeight: 600, color: '#6366F1' }}>Thursday, 10th</h3>
              <p style={{ fontSize: '1.25rem', color: '#9CA3AF', marginTop: '0.25rem' }}>December</p>
            </div>
            <p style={{ fontSize: '1.25rem', color: '#9CA3AF' }}>12 Tasks</p>
          </div>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 0' }}>
                <div style={{ 
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '50%', 
                  backgroundColor: '#F87171', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginRight: '1.25rem' 
                }}>
                  <svg style={{ width: '14px', height: '14px', color: 'white' }} fill="none" stroke="white" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span style={{ fontSize: '1.125rem', color: '#9CA3AF', textDecoration: 'line-through' }}>Morning Run</span>
                <span style={{ marginLeft: 'auto', fontSize: '1.125rem', color: '#9CA3AF' }}>7:00 AM</span>
              </div>
              <div style={{ borderTop: '1px solid #F3F4F6', marginTop: '0.5rem', marginBottom: '0.5rem' }}></div>
            </div>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 0' }}>
                <div style={{ 
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '50%', 
                  border: '1px solid #D1D5DB', 
                  marginRight: '1.25rem' 
                }}></div>
                <span style={{ fontSize: '1.125rem', color: '#374151' }}>Buy Pizza on the way to work</span>
                <span style={{ marginLeft: 'auto', fontSize: '1.125rem', color: '#6B7280' }}>8:00 AM</span>
              </div>
              <div style={{ borderTop: '1px solid #F3F4F6', marginTop: '0.5rem', marginBottom: '0.5rem' }}></div>
            </div>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 0' }}>
                <div style={{ 
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '50%', 
                  border: '1px solid #D1D5DB', 
                  marginRight: '1.25rem' 
                }}></div>
                <span style={{ fontSize: '1.125rem', color: '#374151' }}>10AM Meeting</span>
                <span style={{ marginLeft: 'auto', fontSize: '1.125rem', color: '#6B7280' }}>10:00 AM</span>
              </div>
              <div style={{ borderTop: '1px solid #F3F4F6', marginTop: '0.5rem', marginBottom: '0.5rem' }}></div>
            </div>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 0' }}>
                <div style={{ 
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '50%', 
                  border: '1px solid #D1D5DB', 
                  marginRight: '1.25rem' 
                }}></div>
                <span style={{ fontSize: '1.125rem', color: '#374151' }}>Work Lunch with the dudes</span>
                <span style={{ marginLeft: 'auto', fontSize: '1.125rem', color: '#6B7280' }}>12:00 PM</span>
              </div>
            </div>
          </div>
        </CardContent>
        <div style={{ position: 'relative', height: '6rem' }}>
          <div style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem' }}>
            <button style={{ 
              width: '4rem', 
              height: '4rem', 
              borderRadius: '50%', 
              backgroundColor: '#F87171', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              border: 'none'
            }}>
              <svg style={{ width: '2rem', height: '2rem', color: 'white' }} fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>
      </>
    ),
  },
  render: (args) => (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <Card {...args} />
    </div>
  ),
};

export const WithComponents: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <h3 style={{ fontSize: '2.25rem', fontWeight: 600, color: '#6366F1' }}>Thursday, 10th</h3>
              <p style={{ fontSize: '1.25rem', color: '#9CA3AF', marginTop: '0.25rem' }}>December</p>
            </div>
            <p style={{ fontSize: '1.25rem', color: '#9CA3AF' }}>12 Tasks</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div>
              <TaskItem 
                text="Morning Run" 
                completed={true} 
                time="7:00 AM" 
                onToggle={() => {}} 
              />
              <TaskDivider />
            </div>
            
            <div>
              <TaskItem 
                text="Buy Pizza on the way to work" 
                completed={false} 
                time="8:00 AM" 
                onToggle={() => {}} 
              />
              <TaskDivider />
            </div>
            
            <div>
              <TaskItem 
                text="10AM Meeting" 
                completed={false} 
                time="10:00 AM" 
                onToggle={() => {}} 
              />
              <TaskDivider />
            </div>
            
            <div>
              <TaskItem 
                text="Work Lunch with the dudes" 
                completed={false} 
                time="12:00 PM" 
                onToggle={() => {}} 
              />
            </div>
          </div>
        </CardContent>
        <div className="relative h-24">
          <div className="absolute bottom-10 right-10">
            <AddTaskButton onClick={() => {}} />
          </div>
        </div>
      </>
    ),
  },
  render: (args) => (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <Card {...args} />
    </div>
  ),
}; 