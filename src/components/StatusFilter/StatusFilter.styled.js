import styled from '@emotion/styled';

export const StatusFilterContainer = styled.div`
  position: relative;
  width: 300px;
  height: 234px;
  border-radius: 8px;
  background: #151515;
  padding: 24px;
`;

export const StatusFilterMainText = styled.p`
  color: #fff;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
  width: 100%;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 14px;
`;

export const StatusFilterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const StatusFilterLabel = styled.p`
  color: #fff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const StatusFilterShowAll = styled.button`
  cursor: pointer;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
  text-decoration-line: underline;
  color: ${props => (props.selected ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #fff;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  top: 14px;
  right: 14px;
  cursor: pointer;
  fill: rgba(255, 255, 255, 1);
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: rgba(255, 255, 255, 0.5);
  }
`;
