import React, { FC } from 'react';
import styled from 'styled-components';

interface ChangePageButtonProps {
  text: string;
  onClick: () => void;
}

const ChangePageButton: FC<ChangePageButtonProps> = ({ text, onClick }) => {
  return <StyledChangePageButton onClick={onClick}>{text}</StyledChangePageButton>;
};

const StyledChangePageButton = styled.button`
  height: 50px;
  width: 50px;

  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  border-radius: 10px;
  color: aliceblue;
  background-color: #3d3d3d;
  font-weight: 600;

  &:hover {
    background: #545454;
    color: #e99000;
  }
  &:active {
    transform: scale(0.96);
  }
`;

export default ChangePageButton;
