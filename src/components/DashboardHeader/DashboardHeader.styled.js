import styled from '@emotion/styled';

import { devices, baseTransition } from 'styles';

export const DashboardHeaderTitle = styled.h2`
  position: absolute;
  top: 14px;
  left: 20px;
  color: ${props => props.theme.colors.titleColor};
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;

  @media screen and (${devices.tablet}) {
    font-size: 18px;
    letter-spacing: -0.36px;
    top: 26px;
    left: 32px;
  }

  @media screen and (${devices.desktop}) {
    top: 10px;
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
  color: ${props => props.theme.colors.filterColor};
  transition: color ${baseTransition};

  @media screen and (${devices.tablet}) {
    top: 20px;
    right: 32px;
  }

  @media screen and (${devices.desktop}) {
    top: 14px;
    right: 24px;
  }

  &:hover,
  &:focus {
    color: ${props => {
      if (props.disabled) return;
      return props.theme.colors.iconHover;
    }};
  }
`;

export const DashboardHeaderText = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  margin-left: 8px;
`;
