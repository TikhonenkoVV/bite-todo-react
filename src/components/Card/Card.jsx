import {
  CardDescriptionStyled,
  CardFooter,
  CardParamsTitle,
  CardParamsWrapper,
  CardStyled,
  CardTitleStyled,
  DeadlineDate,
  PriorityStatus,
  ToolsWrapper,
} from './Card.styled';
import sprite from '../../img/icons/sprite.svg';
import { Svg } from 'components/SvgIcon/SvgIcon';

export const Card = ({
  key,
  title,
  description,
  priority = 'Low',
  deadline = '12/05/2023',
}) => {
  return (
    <CardStyled key={key}>
      <CardTitleStyled>{title}</CardTitleStyled>
      <CardDescriptionStyled>{description}</CardDescriptionStyled>
      <CardFooter>
        <CardParamsWrapper>
          <div>
            <CardParamsTitle>{priority}</CardParamsTitle>
            <PriorityStatus>Low</PriorityStatus>
          </div>
          <div>
            <CardParamsTitle>Deadline</CardParamsTitle>
            <DeadlineDate>{deadline}</DeadlineDate>
          </div>
        </CardParamsWrapper>
        <ToolsWrapper>
          <button type="button">
            <Svg w={16} h={16} use={`${sprite}#icon-bell`} />
          </button>
          <button type="button">
            <Svg w={16} h={16} use={`${sprite}#icon-pencil`} />
          </button>
          <button type="button">
            <Svg w={16} h={16} use={`${sprite}#icon-trash`} />
          </button>
        </ToolsWrapper>
      </CardFooter>
    </CardStyled>
  );
};
