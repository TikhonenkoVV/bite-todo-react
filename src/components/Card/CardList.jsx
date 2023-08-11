import React from 'react';
import { useSelector } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { CardListContainer, CardListStyled } from './CardList.styled';
import { Card } from './Card';
import { selectStatusFilter } from 'store/filter/selectors';

export const CardList = ({ boardId, cards }) => {
  const status = useSelector(selectStatusFilter);
  const filteredCards = status.priority
    ? cards.filter(card => card.priority === status.priority)
    : cards;

  return (
    <CardListContainer>
      <Scrollbars
        renderTrackVertical={({ style, ...props }) => (
          <div
            {...props}
            style={{
              ...style,
              backgroundColor: 'rgba(255, 255, 255, 0.10)',
              right: '0',
              bottom: '0',
              top: '2px',
              borderRadius: '12px',
              width: '8px',
            }}
          />
        )}
        renderThumbVertical={({ style, ...props }) => (
          <div
            {...props}
            style={{
              ...style,
              borderRadius: '12px',
              backgroundColor: '#121212',
            }}
          />
        )}
      >
        <CardListStyled>
          {filteredCards.map(
            ({ _id, title, description, priority, deadline, owner }) => {
              return (
                <Card
                  key={_id}
                  _id={_id}
                  title={title}
                  description={description}
                  priority={priority}
                  deadline={deadline}
                  boardId={boardId}
                  columnId={owner}
                />
              );
            }
          )}
        </CardListStyled>
      </Scrollbars>
    </CardListContainer>
  );
};
