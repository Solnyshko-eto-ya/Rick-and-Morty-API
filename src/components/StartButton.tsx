import React, { FC } from 'react';
import styled from 'styled-components';
import image3 from '../images/image3.jpg';

interface StartButtonProps {
  link: string;
}

const StartButton: FC<StartButtonProps> = ({ link }) => {
  return <StyledStartButton href={link}>Get Schwifty</StyledStartButton>;
};

const StyledStartButton = styled.a`
  display: inline-block;

  width: 200px;
  height: 50px;
  margin-left: 200px;

  padding: 20px 40px 20px 40px;

  font-size: 30px;
  color: #000000;
  text-decoration: none;
  text-align: center;

  user-select: none;
  background-color: #b2d06b;
  border-radius: 10px;
  &:hover {
    background-color: #3d9b5c;
  }
`;

export default StartButton;
