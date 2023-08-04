import React from 'react';
import { ColumnContainer } from './Column.styled';

export const Column = ({ id, title }) => {
  return (
    <ColumnContainer>
      <p>{title}</p>
    </ColumnContainer>
  );
};
