// Table.tsx
import {  
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
} from "@tanstack/react-table";


// interfaces e tipos
import * as T from "./Table.style";
export interface TableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
}

export default function Table<TData>({ data, columns }: TableProps<TData>) {
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