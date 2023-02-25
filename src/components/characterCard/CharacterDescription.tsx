import React, { FC } from 'react';
import styled from 'styled-components';
import StatusIcon, { StatusIconStyle } from './StatusIcon';

interface CharacterDescriptionProps {
  name: string;
  status: string;
  gender: string;
  location: string;
  species: string;
  url: string;
}

const CharacterDescription: FC<CharacterDescriptionProps> = ({
  url,
  name,
  status,
  gender,
  location,
  species,
}) => {
  return (
    <DescriptionContainer>
      <CharacterName href={url}>{name}</CharacterName>
      <StatusContainer>
        <StatusIcon
          styleType={
            status === 'Alive'
              ? StatusIconStyle.GREEN
              : status === 'Dead'
              ? StatusIconStyle.RED
              : StatusIconStyle.ORANGE
          }
        />
        <CharacterStatus>
          {status} - {gender}
        </CharacterStatus>
      </StatusContainer>
      <ParaDescription>Last known location:</ParaDescription>
      <CharacterLocationAndSpecies>{location}</CharacterLocationAndSpecies>
      <ParaDescription>species:</ParaDescription>
      <CharacterLocationAndSpecies>{species}</CharacterLocationAndSpecies>
    </DescriptionContainer>
  );
};

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CharacterName = styled.a`
  margin: 5px 0 5px 0;

  font-size: 20px;
  font-weight: 600;
  outline: none;
  text-decoration: none;

  color: #ffffff;

  :visited {
    color: #ffffff;
  }

  &:hover {
    color: #e99000;
  }

  &::selection {
    background-color: #232323;
    color: #e99000;
  }
`;

const StatusContainer = styled.div`
  margin: 5px 0 5px 0;
  width: 100%;
  height: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const CharacterStatus = styled.p`
  margin: 5px 0 5px 0;

  line-height: 16px;
  font-size: 16px;
  &::selection {
    background-color: #232323;
    color: #e99000;
  }
`;

const ParaDescription = styled.p`
  font-size: 13px;
  line-height: 15px;

  color: #d3d3d3;

  margin: 5px 0 5px 0;

  &::selection {
    background-color: #232323;
    color: #e99000;
  }
`;

const CharacterLocationAndSpecies = styled.p`
  margin: 0;

  &:hover {
    color: #e99000;
  }

  &::selection {
    background-color: #232323;
    color: #e99000;
  }
`;

export default CharacterDescription;
