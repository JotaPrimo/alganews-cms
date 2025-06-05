// Table.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Table, { TableProps } from "../components/Table/Table";
import { ColumnDef } from "@tanstack/react-table";
import Icon from "@mdi/react";
import { mdiOpenInNew, mdiDelete, mdiPencil } from "@mdi/js";
import React from "react";

// Definir tipo específico para os dados
type Data = {
  id: number;
  name: string;
  value: number;
  preview?: React.ReactNode;
};

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
};

export default meta;

// Story para tabela com ações
export const Default: StoryObj<TableProps<Data>> = {
  render: (args) => <Table<Data> {...args} />,
  args: {
    data: [
      {
        id: 1,
        name: "Item 1",
        value: 100,
        preview: <Icon path={mdiOpenInNew} size={0.7} color="#09f" />,
      },
      {
        id: 2,
        name: "Item 2",
        value: 200,
        preview: <Icon path={mdiOpenInNew} size={0.7} color="#09f" />,
      },
      {
        id: 3,
        name: "Item 3",
        value: 300,
        preview: <Icon path={mdiOpenInNew} size={0.7} color="#09f" />,
      },
    ],
    columns: [
      {
        accessorKey: "preview",
        header: "",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "name",
        header: "Nome",
      },
      {
        accessorKey: "value",
        header: "Valor",
        cell: (info) => `R$ ${info.getValue()}`,
      },
      {
        accessorKey: "actions",
        header: "Ações",
        cell: () => (
          <div style={{ display: "flex", gap: "8px" }}>
            <Icon path={mdiPencil} size={0.7} color="#666" />
            <Icon path={mdiDelete} size={0.7} color="#ff5555" />
          </div>
        ),
      },
    ] as ColumnDef<Data>[],
  },
};


export const NoData: StoryObj<TableProps<Data>> = {
  render: (args) => <Table<Data> {...args} />,
  args: {
    data: [
      
    ],
    columns: [
      {
        accessorKey: "preview",
        header: "",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "name",
        header: "Nome",
      },
      {
        accessorKey: "value",
        header: "Valor",
        cell: (info) => `R$ ${info.getValue()}`,
      },
      {
        accessorKey: "actions",
        header: "Ações",
        cell: () => (
          <div style={{ display: "flex", gap: "8px" }}>
            <Icon path={mdiPencil} size={0.7} color="#666" />
            <Icon path={mdiDelete} size={0.7} color="#ff5555" />
          </div>
        ),
      },
    ] as ColumnDef<Data>[],
  },
};

