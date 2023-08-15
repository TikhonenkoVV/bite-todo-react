import React from 'react';
import { useSelector } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars-2';
import {
  CardListContainer,
  CardListStyled,
  TrackVertical,
  ThumbVertical,
} from './CardList.styled';
import { Card } from './Card';
import { selectStatusFilter } from 'store/filter/selectors';
import { Draggable, Droppable } from 'react-beautiful-dnd';

export const CardList = ({ boardId, cards, columnId }) => {
  const status = useSelector(selectStatusFilter);
  const filteredCards = status.priority
    ? cards.filter(card => card.priority === status.priority)
    : cards;

  return (
    <Droppable droppableId={columnId} type="CARD">
      {provided => (
        <CardListContainer {...provided.droppableProps}>
          <Scrollbars
            hideTracksWhenNotNeeded={true}
            renderTrackVertical={({ style, ...props }) => (
              <TrackVertical
                {...props}
                style={{
                  ...style,
                }}
              />
            )}
            renderThumbVertical={({ style, ...props }) => (
              <ThumbVertical
                {...props}
                style={{
                  ...style,
                }}
              />
            )}
          >
            <CardListStyled ref={provided.innerRef}>
              {filteredCards.map(
                (
                  { _id, title, description, priority, deadline, owner },
                  index
                ) => {
                  return (
                    <Draggable key={_id} draggableId={_id} index={index}>
                      {dragProvided => (
                        <Card
                          key={_id}
                          _id={_id}
                          ref={dragProvided.innerRef}
                          title={title}
                          description={description}
                          priority={priority}
                          deadline={deadline}
                          index={index}
                          boardId={boardId}
                          columnId={owner}
                          {...dragProvided.draggableProps}
                          {...dragProvided.dragHandleProps}
                        />
                      )}
                    </Draggable>
                  );
                }
              )}
            </CardListStyled>
          </Scrollbars>
          {provided.placeholder}
        </CardListContainer>
      )}
    </Droppable>
  );
};
