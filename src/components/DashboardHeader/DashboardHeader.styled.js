import styled from '@emotion/styled';

import { devices, baseTransition } from 'styles';

export const DashboardHeaderTitle = styled.h2`
  position: absolute;
  top: 14px;
  left: 20px;
  color: ${props => props.theme.colors.titleColor};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.28px;
  background-color: ${props =>
    props.dashboard.background === 'default'
      ? 'transparent'
      : props.theme.colors.filterBgd};
  border-radius: 10px;

  @media screen and (${devices.tablet}) {
    font-size: 18px;
    letter-spacing: -0.36px;
    top: 24px;
    left: 32px;
  }

  @media screen and (${devices.desktop}) {
    top: 10px;
    left: 24px;
  }
`;

export const DashboardHeaderFilter = styled.button`
  position: absolute;
  top: 10px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${props => props.theme.colors.filterColor};
  fill: currentColor;
  transition: color ${baseTransition}, box-shadow ${baseTransition};

  background-color: ${props => {
    if (!props.dashboard) return 'none';

    return props.dashboard && props.dashboard.background === 'default'
      ? 'transparent'
      : props.theme.colors.filterBgd;
  }};
  padding: 4px 8px;
  border-radius: 10px;

  @media screen and (${devices.tablet}) {
    top: 16px;
    right: 24px;
  }

  @media screen and (${devices.desktop}) {
    top: 10px;
    right: 16px;
  }

  &:hover,
  &:focus {
    color: ${props => {
      if (props.disabled) return;
      return props.theme.colors.iconHover;
    }};
    box-shadow: ${props => {
      if (props.dashboard === null) return 'none';

      return props.dashboard && props.dashboard.background === 'default'
        ? 'none'
        : props.theme.colors.filterShadow;
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
