import React from 'react';
import { Column } from '../MainDashboard/Column';
import { ColumnListStyled } from './ColunmList.styled';
const columns = [
  {
    id: '1',
    title: 'To do',
  },
  {
    id: '2',
    title: 'In progress',
  },
  {
    id: '3',
    title: 'Done',
  },
];

export const ColumnList = () => {
  return (
    <ColumnListStyled>
      {columns.map(({ id, title }) => {
        return <Column id={id} title={title} />;
      })}
    </ColumnListStyled>
  );
};
