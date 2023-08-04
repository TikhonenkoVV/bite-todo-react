import React from 'react';
import { Column } from '../MainDashboard/Column';
const columns = [1, 2, 3];

export const ColumnList = () => {
  return (
    <ul>
      {columns.map(column => {
        return <Column />;
      })}
    </ul>
  );
};
