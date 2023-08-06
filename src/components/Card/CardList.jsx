import React from 'react';
import { CardListContainer, CardListStyled } from './CardList.styled';
import { Card } from './Card';

const cards = [
  {
    id: '1',
    title: 'The Watch Spot Design',
    description:
      "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
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
        {cards.map(({ id, title, description }) => {
          return <Card key={id} title={title} description={description} />;
        })}
      </CardListStyled>
    </CardListContainer>
  );
};
