import React from 'react';
import { useSelector } from 'react-redux';
import { CardListContainer, CardListStyled } from './CardList.styled';
import { Card } from './Card';
import { selectStatusFilter } from 'store/filter/selectors';
import { statusFilters } from 'store/filter/constants';

const getPriority = status => {
  let priority = null;
  for (const propName in statusFilters) {
    if (
      statusFilters.hasOwnProperty(propName) &&
      statusFilters[propName] === status
    ) {
      priority = propName;
      break;
    }
  }
  if (!priority || priority === 'all') {
    return null;
  }

  return priority === 'none' ? 'without' : priority;
};

export const CardList = ({ boardId, cards }) => {
  const status = useSelector(selectStatusFilter);
  const priority = getPriority(status);
  const filteredCards = priority
    ? cards.filter(card => card.priority === priority)
    : cards;

  return (
    <CardListContainer>
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
    </CardListContainer>
  );
};
