import styled from '@emotion/styled';

export const TestDashboard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 100px;
  background-color: tomato;
  padding: 14px 20px;
`;

export const DashboardHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: 1px solid #fff;
`;

export const DashboardHeaderTitle = styled.h2``;

export const DashboardHeaderFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const DashboardHeaderIcon = styled.div`
  width: 16px;
  height: 16px;
  background-color: rgba(255, 255, 255, 0.8);
  margin-right: 8px;
`;

export const DashboardHeaderText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;
