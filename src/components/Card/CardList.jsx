import React from 'react';
import { CardListContainer, CardListStyled } from './CardList.styled';
import { Card } from './Card';

const cards = [
  {
    id: '1',
    title: 'The Watch Spot Design',
    description:
      "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
    priority: 'low',
    deadline: '07/09/2023',
  },
  {
    id: '2',
    title: 'Research and Analysis',
    description:
      "Conduct in-depth research and analysis on the project's topic, gather relevant data, and identify key insights to inform decision-making and project planning.",
    priority: 'without',
    deadline: '12/10/2023',
  },
  {
    id: '3',
    title: 'Concept Development',
    description:
      "Brainstorm and develop creative concepts and ideas that align with the project's objectives, considering factors such as target audience, messaging, and visual representation.",
    priority: 'high',
    deadline: '21/09/2023',
  },
  {
    id: '4',
    title: 'Design and Prototyping SoYummy',
    description:
      'Create visually appealing and functional design prototypes based on the approved concepts, ensuring seamless user experience and incorporating feedback for iterative improvements.',
    priority: 'medium',
    deadline: '17/11/2023',
  },
  {
    id: '5',
    title: 'Content Creation',
    description:
      'Generate engaging and persuasive content for various project deliverables, such as presentations, reports, website copy, social media posts, and other communication channels.',
    priority: 'high',
    deadline: '01/10/2023',
  },
  {
    id: '6',
    title: 'Quiz Creation',
    description:
      "Create engaging and interactive quizzes using Kahoot's intuitive quiz builder. Design questions, provide multiple-choice answers, and include multimedia elements such as images and videos.",
    priority: 'low',
    deadline: '04/09/2023',
  },
];

export const CardList = () => {
  return (
    <CardListContainer>
      <CardListStyled>
        {cards.map(({ id, title, description, priority, deadline }) => {
          return (
            <Card
              key={id}
              title={title}
              description={description}
              priority={priority}
              deadline={deadline}
            />
          );
        })}
      </CardListStyled>
    </CardListContainer>
  );
};
