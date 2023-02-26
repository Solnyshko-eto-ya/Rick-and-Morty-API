import React from 'react';
import image from '../images/image2.png';
import styled from 'styled-components';
import { StartButton } from '../components';

const StartPage = () => {
  return (
    <>
      <StartPageHeader>
        <StyledImage src={image}></StyledImage>
        <StyledHeading>Rick And Morty</StyledHeading>

        <StartButton link='/characters' />
      </StartPageHeader>
      <DescriptionContainer>
        <StyledStartDescription>
          A website using Rick and Morty API by Solnyshko
        </StyledStartDescription>
      </DescriptionContainer>
    </>
  );
};

const StartPageHeader = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

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
  display: inline-block;

  &::selection {
    background-color: #232323;
    color: #e99000;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const StyledStartDescription = styled.h2`
  font-size: 50px;
  color: #ffffff;

  display: inline-block;
  position: relative;

  &::selection {
    background-color: #232323;
    color: #e99000;
  }
`;

export default StartPage;
