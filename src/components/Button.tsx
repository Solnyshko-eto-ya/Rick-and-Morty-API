import React, { ReactNode } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

const StyledButton = styled(Button)`
  height: 45px;
  margin-left: 20px;
`;

export default CustomButton;
