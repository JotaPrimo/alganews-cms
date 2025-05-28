import type { Meta, StoryObj } from "@storybook/react";

import Paragraph, {
  ParagraphProps,
} from "../components/Typography/Paragraph";

// Define o meta com tipagem
const meta: Meta<typeof Paragraph> = {
  title: "Typography/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
};

export default meta;

// Aqui você usa a interface InputProps para os argumentos (args) das stories:
type Story = StoryObj<ParagraphProps>;

export const Default: Story = {
  args: {
     size: 'default',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel'
  },
};

export const Small: Story = {
  args: {
    size: 'default',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel'
  },
};
