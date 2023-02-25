import { FC } from 'react';
import styled from 'styled-components';
import { Character } from '../../types';
import CharacterDescription from './CharacterDescription';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: FC<CharacterCardProps> = ({
  character: { image, name, status, gender, location, species, url },
}) => {
  return (
    <Card>
      <Avatar src={image} alt='avatar' />

      <CharacterDescription
        url={url}
        name={name}
        status={status}
        gender={gender}
        location={location.name}
        species={species}
      />
    </Card>
  );
};

const Avatar = styled.img`
  height: 160px;
  width: 160px;

  margin-right: 10px;

  border-radius: 10px 0 0 10px;
  user-select: none;
`;

const Card = styled.div`
  display: flex;
  height: 160px;
  width: 100%;

  border-radius: 10px;
  background-color: #3d3d3d;
  color: aliceblue;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

export default CharacterCard;
