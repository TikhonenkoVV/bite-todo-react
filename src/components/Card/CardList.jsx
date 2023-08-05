import React from 'react';
import {
  CardListContainer,
  CardListItemStyled,
  CardListStyled,
} from './CardList.styled';

const cards = [
  {
    id: '1',
    title: 'Test 1',
  },
  {
    id: '2',
    title: 'Test 2',
  },
  {
    id: '3',
    title: 'Test 3',
  },
  {
    id: '4',
    title: 'Test 4',
  },
  {
    id: '5',
    title: 'Test 5',
  },
  {
    id: '6',
    title: 'Test 6',
  },
];

export const CardList = () => {
  return (
    <CardListContainer>
      <CardListStyled>
        {cards.map(({ id, title }) => {
          return <CardListItemStyled key={id}>{title}</CardListItemStyled>;
        })}
      </CardListStyled>
    </CardListContainer>
  );
};
