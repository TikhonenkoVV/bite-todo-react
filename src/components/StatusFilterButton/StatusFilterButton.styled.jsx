import styled from '@emotion/styled';

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => (props.selected ? '#fff' : ' rgba(255, 255, 255, 0.5)')};
  &:not(:last-of-type) {
    margin: 0 0 8px 0;
  }
`;

export const FilterIcon = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${props => props.color};
`;

export const FilterText = styled.p`
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`;
