import React from 'react';
import styled, { css } from 'styled-components';

export enum StatusIconStyle {
  RED,
  GREEN,
  ORANGE,
}

interface StatusIcon {
  styleType: StatusIconStyle;
}

const statusIcon: React.FC<StatusIcon> = ({ styleType = StatusIconStyle.RED }) => {
  return <StyledStatusIcon $styleType={styleType} />;
};

const StyledStatusIcon = styled.div<{
  $styleType: StatusIconStyle;
}>`
  border-radius: 50%;
  width: 8px;
  height: 8px;

  ${({ $styleType }) => {
    switch ($styleType) {
      case StatusIconStyle.RED:
        return css`
          background-color: #de0606;
        `;
      case StatusIconStyle.GREEN:
        return css`
          background-color: #12db30;
        `;
      case StatusIconStyle.ORANGE:
        return css`
          background-color: #e99000;
        `;
    }
  }}
`;

export default statusIcon;
