import type { Meta, StoryObj } from "@storybook/react";

import Table, {
  
} from "../components/Table/Table";

// Define o meta com tipagem
const meta: Meta<typeof Table> = {
  title: "Example/Table",
  component: Table,
  parameters: {
    layout: "left",
  },
  tags: ["autodocs"],
};

export default meta;

// Aqui você usa a interface InputProps para os argumentos (args) das stories:
type Story = StoryObj<{}>;

export const Default: Story = {
  args: {
   
  },
};