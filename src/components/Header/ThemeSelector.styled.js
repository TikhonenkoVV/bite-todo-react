import styled from '@emotion/styled';

export const DivStyled = styled.div`
  width: 68px;
  height: 21px;
  position: relative;
  background-color: #161616;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
`;

export const BtnSelectStyled = styled.button`
  width: 68px;
  height: 21px;
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    right: -4px;
    top: 29%;
    transform: translateY(-50%);
    border: solid rgba(255, 255, 255, 0.8);
    border-width: 0 2px 2px 0;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    cursor: pointer;
  }
`;

export const DivListStyled = styled.div`
  width: 82px;
  height: 89px;
  border-radius: 8px;
  padding: 18px;
  margin: 0;
  margin-top: 10px
  position: fixed;
  z-index: 50;
  background-color: #161616;
  transform: ${props => (props.isOpen ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: top;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: ${props => (props.isOpen ? '1' : '0')};
`;

export const UlListStyled = styled.ul`
  padding: 0;
  margin: 0;
`;

export const LiStyled = styled.li`
  padding: 0;
  margin: 0;
  list-style-type: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.5);

  &:hover {
    color: #bedbb0;
  }
`;
