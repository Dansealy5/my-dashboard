import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import mockTransactions from './Data';

const columns = [
  { field: 'id',
    headerName: 'ID',
    width: 90 },
  {
    field: 'user',
    headerName: 'Name',
    width: 150,
    editable: false,
  },
  {
    field: 'date',
    headerName: 'Date',
    type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'cost',
    headerName: 'Cost',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

export default function Transactions() {
  return (
    <Box sx={{ height: 450, width: '100%' }}>
      <DataGrid
        rows={mockTransactions}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 100,
            },
          },
        }}
        pageSizeOptions={[100]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}