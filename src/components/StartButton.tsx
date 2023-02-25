import React, { FC } from 'react';
import styled from 'styled-components';

interface StartButtonProps {
  link: string;
}

const StartButton: FC<StartButtonProps> = ({ link }) => {
  return <StyledStartButton href={link}>Get Started</StyledStartButton>;
};

const StyledStartButton = styled.a`
  display: inline-block;

  padding: 20px;

  font-size: 30px;
  background-color: aliceblue;
  border-radius: 10px;
`;

export default StartButton;
