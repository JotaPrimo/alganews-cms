import type { Meta, StoryObj } from "@storybook/react";

import FieldDescriptor, {
  FieldDescriptorProps,
} from "../components/FieldDescriptor/FieldDescriptor";

// Define o meta com tipagem
const meta: Meta<typeof FieldDescriptor> = {
  title: "Example/Field Descriptor",
  component: FieldDescriptor,
  parameters: {
    layout: "left",
  },
  tags: ["autodocs"],
};

export default meta;

// Aqui você usa a interface InputProps para os argumentos (args) das stories:
type Story = StoryObj<FieldDescriptorProps>;

export const Default: Story = {
  args: {
    title: 'data de nascimento',
    description: '26 de Dezembro de 1997 (22 anos)'
  },
};