import styled from '@emotion/styled';

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => (props.selected ? '#fff' : ' rgba(255, 255, 255, 0.5)')};
  &:not(:last-of-type) {
    margin: 0 0 8px 0;
  }
  &:hover {
    color: #fff;
  }
`;

export const FilterIcon = styled.div`
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${props => props.color};

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 2px solid #000;
    opacity: ${props => (props.selected ? '1' : ' 0')};
  }
`;

export const FilterText = styled.p`
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`;
