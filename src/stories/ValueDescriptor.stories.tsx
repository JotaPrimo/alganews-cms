import type { Meta, StoryObj } from '@storybook/react';

import ValueDescriptor,  { ValueDesciptorProps } from '../components/ValueDescriptor/ValueDescriptor' 

// Define o meta com tipagem
const meta: Meta<typeof ValueDescriptor> = {
  title: 'Example/Value Descriptor',
  component: ValueDescriptor,
  parameters: {
    layout: 'left',
  },
  tags: ['autodocs']
};

export default meta;

// Aqui você usa a interface InputProps para os argumentos (args) das stories:
type Story = StoryObj<ValueDesciptorProps>;

export const Default: Story = {
  args: {
     description: 'Ganhos na semana',
    value: 560332.02
  },
};

export const Primary: Story = {
  args: {
    description: 'Ganhos na semana',
    value: 560332.02
  },
};



export const DefaultCurrency: Story = {
  args: {
   description: 'Ganhos na semana',
    value: 560332.02
  },
};


export const PrimaryCurrency: Story = {
  args: {
  description: 'Ganhos na semana',
    value: 560332.02
  },
};




