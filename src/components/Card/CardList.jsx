import React from 'react';
import { useSelector } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { CardListContainer, CardListStyled } from './CardList.styled';
import { Card } from './Card';
import { selectStatusFilter } from 'store/filter/selectors';
import { Draggable, Droppable } from 'react-beautiful-dnd';

export const CardList = ({ boardId, cards, columnId }) => {
  const status = useSelector(selectStatusFilter);
  const filteredCards = status.priority
    ? cards.filter(card => card.priority === status.priority)
    : cards;

  return (
    <Droppable droppableId={columnId} type='CARD'>
      {(provided) => (
          <CardListContainer {...provided.droppableProps}>
            <Scrollbars
              hideTracksWhenNotNeeded={true}
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
              <CardListStyled ref={provided.innerRef}>
                {filteredCards.map(
                  ({ _id, title, description, priority, deadline, owner }, index) => {
                    return (
                      <Draggable
                        key={_id}
                        draggableId={_id}
                        index={index}
                      >
                        {(dragProvided) => (
                          <Card
                            key={_id}
                            _id={_id}
                            ref={dragProvided.innerRef}
                            title={title}
                            description={description}
                            priority={priority}
                            deadline={deadline}
                            boardId={boardId}
                            columnId={owner}
                            {...dragProvided.draggableProps}
                            {...dragProvided.dragHandleProps}
                          />
                        )}
                      </Draggable>
                    );
                  },
                )}
              </CardListStyled>
            </Scrollbars>
            {provided.placeholder}
          </CardListContainer>
      )}
    </Droppable>

  );
};
