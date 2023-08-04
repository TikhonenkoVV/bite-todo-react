import styled from '@emotion/styled';

export const MainDashboardSection = styled.section``;

export const MainDashboardContainer = styled.div`
  width: 375px;
  padding: 0 20px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding: 0 24px 0 284px;
  }
`;

export const MainDashboardSectionTitle = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
