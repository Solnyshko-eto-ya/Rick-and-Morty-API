import React, { FC } from 'react';
import styled from 'styled-components';

interface CharacterDescriptionProps {
  name: string;
  status: string;
  gender: string;
  location: string;
  species: string;
}

const CharacterDescription: FC<CharacterDescriptionProps> = ({
  name,
  status,
  gender,
  location,
  species,
}) => {
  return (
    <DescriptionContainer>
      <CharacterName>{name}</CharacterName>
      <CharacterStatus>
        {status} - {gender}
      </CharacterStatus>
      <p style={{ color: '#d3d3d3', fontSize: '13px', margin: '5px 0 0 0' }}>
        Last known location:
      </p>
      <CharacterLocation>{location}</CharacterLocation>
      <p style={{ color: '#d3d3d3', fontSize: '13px', margin: '5px 0 0 0' }}>species:</p>
      <CharacterSpecies>{species}</CharacterSpecies>
    </DescriptionContainer>
  );
};

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CharacterName = styled.p`
  margin: 0;
  margin-top: 5px;

  font-size: 20px;
  font-weight: 600;

  &:hover {
    color: #e99000;
  }
`;

const CharacterStatus = styled.p`
  margin: 0;

  font-size: 15px;
`;

const CharacterLocation = styled.p`
  margin: 0;

  &:hover {
    color: #e99000;
  }
`;

const CharacterSpecies = styled.p`
  margin: 0;

  &:hover {
    color: #e99000;
  }
`;

export default CharacterDescription;
