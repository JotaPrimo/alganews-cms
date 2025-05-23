
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button, { ButtonProps } from '../components/Button/Button'; 

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'left',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { 
    onClick: fn() 
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary',
  },
};

export const Danger: Story = {
  args: {    
    variant: 'danger',
    label: 'Danger',
  },
};

export const Text: Story = {
  args: {    
    variant: 'text',
    label: 'Danger',
  },
};


export const Disabled: Story = {
  args: {    
    variant: 'primary',
    label: 'Disabled',
    disabled: true
  },
};


