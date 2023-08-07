import {
  CardDescriptionStyled,
  CardFooter,
  CardParamsTitle,
  CardParamsWrapper,
  CardStyled,
  CardTitleStyled,
  DeadlineDate,
  PriorityStatus,
  ToolsButton,
  ToolsButtonBell,
  ToolsWrapper,
} from './Card.styled';
import sprite from '../../img/icons/sprite.svg';
import { Svg } from 'components/SvgIcon/SvgIcon';

export const Card = ({ title, description, priority, deadline }) => {
  return (
    <CardStyled color={priority}>
      <CardTitleStyled>{title}</CardTitleStyled>
      <CardDescriptionStyled>{description}</CardDescriptionStyled>
      <CardFooter>
        <CardParamsWrapper>
          <div>
            <CardParamsTitle>Priority</CardParamsTitle>
            <PriorityStatus color={priority}>{priority}</PriorityStatus>
          </div>
          <div>
            <CardParamsTitle>Deadline</CardParamsTitle>
            <DeadlineDate>{deadline}</DeadlineDate>
          </div>
        </CardParamsWrapper>
        <ToolsButtonBell type="button">
          <Svg w={16} h={16} use={`${sprite}#icon-bell`} />
        </ToolsButtonBell>
        <ToolsWrapper>
          <ToolsButton type="button">
            <Svg w={16} h={16} use={`${sprite}#icon-pencil`} />
          </ToolsButton>
          <ToolsButton type="button">
            <Svg w={16} h={16} use={`${sprite}#icon-trash`} />
          </ToolsButton>
        </ToolsWrapper>
      </CardFooter>
    </CardStyled>
  );
};
