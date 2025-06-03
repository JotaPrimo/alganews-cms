import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";

type DataType = {
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
    },
    {
      col1: "react-table",
      col2: "rocks",
      actions: "ações",
    },
    {
      col1: "whatever",
      col2: "you want",
      actions: "ações",
    },
  ]);

  const columnHelper = createColumnHelper<DataType>();

  const columns = useMemo(
    () => [
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
    <table>
      <thead>
        {tableInstance.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {tableInstance.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
