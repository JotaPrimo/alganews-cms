import type { Meta, StoryObj } from "@storybook/react";

import Info, {
  InfoProps
} from "../components/Info/Info";

// Define o meta com tipagem
const meta: Meta<typeof Info> = {
  title: "Example/Info",
  component: Info,
  parameters: {
    layout: "left",
  },
  tags: ["autodocs"],
};

export default meta;

// Aqui você usa a interface InputProps para os argumentos (args) das stories:
type Story = StoryObj<InfoProps>;

export const Default: Story = {
  args: {
    description: "Este post não foi encontrado. Você está sendo redirecionado(a) para a lista de posts",
    title: "Post não encontrado",
  },
};