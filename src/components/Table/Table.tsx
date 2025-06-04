import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useMemo, useState } from "react";

import * as T from "./Table.style";
import Icon from "@mdi/react";
import { mdiOpenInNew } from "@mdi/js";

type DataType = {
  preview: React.ReactNode;
  col1: string;
  col2: string;
  actions: string;
};

export default function Table() {
  const [data, setData] = useState<DataType[]>([
    {
      col1: "Hello",
      col2: "World",
      actions: "ações",
      preview: <Icon path={mdiOpenInNew} size="14"  color="#09f" />
    },
    {
      col1: "react-table",
      col2: "rocks",
      actions: "ações",
      preview: <Icon path={mdiOpenInNew} size="14"  color="#09f" />
    },
    {
      col1: "whatever",
      col2: "you want",
      actions: "ações",
      preview: <Icon path={mdiOpenInNew} size="14"  color="#09f" />
    },
  ]);

  const columnHelper = createColumnHelper<DataType>();

  const columns = useMemo(
    () => [
      columnHelper.accessor("preview", {
        header: "",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("col1", {
        header: "Column 1",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("col2", {
        header: "Column 2",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("actions", {
        header: "Ações",
        cell: (info) => info.getValue(),
      }),
    ],
    [columnHelper]
  );

  const tableInstance = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <T.Wrapper cellPadding={0} cellSpacing={0}>
      <T.Heading>
        {tableInstance.getHeaderGroups().map((headerGroup) => (
          <T.HeadingRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <T.HeadingCell key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </T.HeadingCell>
            ))}
          </T.HeadingRow>
        ))}
      </T.Heading>
      <T.Body>
        {tableInstance.getRowModel().rows.map((row) => (
          <T.BodyRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <T.BodyCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </T.BodyCell>
            ))}
          </T.BodyRow>
        ))}
      </T.Body>
    </T.Wrapper>
  );
}