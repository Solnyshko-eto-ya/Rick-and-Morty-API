import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../App';
import { Filter, Search } from '../components';
import Pagination from '../components/pagination/Pagination';
import { GENDERS, STATUSES, CATEGORIES } from '../constants';
import CharacterCard from '../components/characterCard/CharacterCard';
import useDebounce from '../hooks/use-debounce';
import { CharactersResponse, ResponseMetadata } from '../types';

const CharactersPage = () => {
  const {
    gender,
    status,
    category,
    page,
    handleGender,
    handleCategory,
    handleStatus,
    countPages,
    setCountPages,
  } = useContext(AppContext);
  const [characterData, setCharacterData] = useState<CharactersResponse | null>(null);
  const [characterName, setCharacterName] = useState<string>('');

  const debouncedName = useDebounce(characterName, 300);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<CharactersResponse>(
        `https://rickandmortyapi.com/api/character/?name=${encodeURI(
          debouncedName
        )}&page=${page}&gender=${gender === 'Any' ? '' : gender}&status=${
          status === 'Any' ? '' : status
        }`
      );
      setCharacterData(response.data);
      setCountPages(response.data.info.pages);
    };

    fetchData();
  }, [debouncedName, page, gender, status, countPages]);

  return (
    <>
      <Header>
        <Filter
          disabled={false}
          value={gender}
          onClick={handleGender}
          items={GENDERS}
          text='Gender'
        />
        <Filter
          disabled={false}
          value={status}
          onClick={handleStatus}
          items={STATUSES}
          text='Status'
        />
        <Search
          value={characterName}
          onChange={setCharacterName}
          placeholder='Input Character Name'
        />
        <Filter
          disabled={false}
          value={category}
          onClick={handleCategory}
          items={CATEGORIES}
          text='Category'
        />
      </Header>
      <CharactersContainer>
        {characterData?.results?.map(character => (
          <CharacterCard character={character} />
        ))}
      </CharactersContainer>
      <NavigationContainer>
        <Pagination countPages={countPages} />
      </NavigationContainer>
    </>
  );
};

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50px;
  margin: 20px auto 20px auto;
`;

const CharactersContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;

  max-width: 1280px;
  width: 100%;

  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  width: 100%;
  height: 90px;
  margin-bottom: 20px;

  background-color: #3d3d3d;

  /* box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2); */
`;

export default CharactersPage;
