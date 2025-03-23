import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import mockTransactions from './Data';
import { green } from '@mui/material/colors';

export default function RevenueChart() {
    return (
    <>
    <p>Revenue Generated</p>
    <h2 style={{color: "green"}}>{mockTransactions.reduce((acc, value) => acc + parseInt(value.cost), 0)}</h2>
    </>
  );
}