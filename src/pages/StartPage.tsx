import React from 'react';
import { Header } from './CharactersPage';
import image from '../images/image2.png';
import styled from 'styled-components';
import { StartButton } from '../components';

const StartPage = () => {
  return (
    <>
      <StartPageHeader>
        <StyledImage src={image}></StyledImage>
        <StyledHeading>Rick And Morty WIKI</StyledHeading>
      </StartPageHeader>
      <ButtonContainer>
        <StartButton link='/characters' />
      </ButtonContainer>
    </>
  );
};

const StartPageHeader = styled.div`
  display: flex;

  align-items: center;
  gap: 15px;

  width: 100%;
  height: 350px;
  margin-bottom: 20px;

  background-color: #3d3d3d;
`;

const StyledImage = styled.img`
  width: 250px;
  height: 250px;

  margin-left: 60px;
`;

const StyledHeading = styled.h1`
  font-size: 80px;
  color: white;

  &::selection {
    background-color: #232323;
    color: #e99000;
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  top: 100px;

  display: flex;
  justify-content: center;
  /* align-items: center; */

  width: 100%;
`;

export default StartPage;
