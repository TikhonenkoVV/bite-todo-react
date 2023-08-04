import styled from '@emotion/styled';

export const TestDashboard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 200px;
  background-color: #1f1f1f;
  padding: 14px 20px;
`;

export const DashboardHeaderTitle = styled.h2`
  position: absolute;
  top: 14px;
  left: 20px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;

  @media (min-width: 768px) {
    font-size: 18px;
    letter-spacing: -0.36px;
    top: 26px;
    left: 32px;
  }

  @media (min-width: 1440px) {
    top: 10px;
    left: 24px;
  }
`;

export const DashboardHeaderFilter = styled.button`
  position: absolute;
  top: 14px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    top: 20px;
    right: 32px;
  }

  @media (min-width: 1440px) {
    top: 14px;
    right: 24px;
  }

  &:hover,
  &:focus {
    color: #fff;
  }
`;

export const DashboardHeaderIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: currentColor;
  margin-right: 8px;
`;

export const DashboardHeaderText = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;
