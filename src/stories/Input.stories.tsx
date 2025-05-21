import type { Meta, StoryObj } from '@storybook/react';

import Input, { InputProps } from '../components/Input/Input';

// Define o meta com tipagem
const meta: Meta<typeof Input> = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'left',
  },
  tags: ['autodocs'],

  // Você NÃO define args com tipo aqui.
  // args é um objeto, não aceita anotação de tipo diretamente.
};

export default meta;

// Aqui você usa a interface InputProps para os argumentos (args) das stories:
type Story = StoryObj<InputProps>;

export const WithPlaceholder: Story = {
  args: {
    label: 'e.g.: Jon Doe',
    placeholder: 'Digite algo...',
  },
};

export const WithLabelAndContent: Story = {
  args: {  
        label: 'Name',
        value: 'Jon Doe'
  },
};


export const WithContent: Story = {
  args: {        
        value: 'Jon Doe'
  },
};

