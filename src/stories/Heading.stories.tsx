import type { Meta, StoryObj } from "@storybook/react";

import Heading, {
  HeadingProps,
} from "../components/Typography/Heading";

// Define o meta com tipagem
const meta: Meta<typeof Heading> = {
  title: "Typography/Heading",
  component: Heading,
  tags: ["autodocs"],
};

export default meta;

// Aqui você usa a interface InputProps para os argumentos (args) das stories:
type Story = StoryObj<HeadingProps>;

export const Heading1: Story = {
  args: {
     level: 1,
  children: 'Heading 1'
  },
};

export const Heading2: Story = {
  args: {
     level: 1,
  children: 'Heading 2'
  },
};

export const Heading3: Story = {
  args: {
    level: 1,
    children: 'Heading 3'
  },
};