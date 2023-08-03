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

export const DashboardHeaderTitle = styled.h2`
  margin: 0;
  padding: 0;
`;

export const DashboardHeaderFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const DashboardHeaderIcon = styled.div`
  width: 16px;
  height: 16px;
  background-color: #fff;
  margin-right: 8px;
`;

export const DashboardHeaderText = styled.p`
  margin: 0;
  padding: 0;

  color: rgba(255, 255, 255, 0.8);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;
