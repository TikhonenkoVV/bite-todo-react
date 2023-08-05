import styled from '@emotion/styled';

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => {
    if (props.theme === 'dark') {
      return props.selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
    }
    return props.selected ? 'rgba(22, 22, 22, 1)' : 'rgba(22, 22, 22, 0.5)';
  }};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${props =>
      props.theme === 'dark' ? '#fff' : 'rgba(22, 22, 22, 1)'};
  }
`;

export const FilterIcon = styled.div`
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${props => {
    return props.theme !== 'dark' && props.text === 'Without priority'
      ? 'rgba(22, 22, 22, 0.3)'
      : props.color;
  }};

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: ${props =>
      props.theme === 'dark' ? '2px solid #000' : '2px solid #fff'};
    opacity: ${props => (props.selected ? '1' : ' 0')};
  }
`;

export const FilterText = styled.p`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`;
