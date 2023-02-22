import { MenuProps } from 'antd';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Filter, ChangePageButton, Search, Spinner } from './components';

import CharacterDescription from './components/CharacterDescription';
import { PageCount } from './components/PageCount';
import { GENDERS, STATUSES, CATEGORIES } from './constants';

import useDebounce from './hooks/use-debounce';
import { Character, CharactersResponse, Gender, Status, Category } from './types';

const App = () => {
  const [characterData, setCharacterData] = useState<CharactersResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [page, setPage] = useState(1);
  const debouncedName = useDebounce(name, 300);
  const [gender, setGender] = useState<Gender>(Gender.Male);
  const [status, setStatus] = useState<Status>(Status.Alive);
  const [category, setCategory] = useState<Category>(Category.Characters);

  const goPrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const goNextPage = () => {
    if (page < 42) {
      setPage(page + 1);
    }
  };

  const handleGender: MenuProps['onClick'] = e => {
    setGender(e.key as Gender);
  };

  const handleStatus: MenuProps['onClick'] = e => {
    setStatus(e.key as Status);
  };

  const handleCategory: MenuProps['onClick'] = e => {
    setCategory(e.key as Category);
  };

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const response = await axios.get<CharactersResponse>(
        `https://rickandmortyapi.com/api/character/?name=${encodeURI(
          debouncedName
        )}&page=${page}&gender=${gender}&status=${status}`
      );
      setCharacterData(response.data);
      setLoading(false);
    };

    fetchData();
  }, [debouncedName, page, gender, status]);

  return (
    <Spinner spinning={loading}>
      <Header>
        <FilterContainer>
          <Filter value={gender} onClick={handleGender} items={GENDERS} label='Gender' />
          <Filter value={status} onClick={handleStatus} items={STATUSES} label='Status' />
        </FilterContainer>
        <Search value={name} onChange={setName} />
        <Filter value={category} onClick={handleCategory} items={CATEGORIES} label='Category' />
      </Header>
      <CharactersContainer>
        {characterData?.results?.map(character => (
          <CharacterCard character={character} />
        ))}
      </CharactersContainer>
      <NavigationContainer>
        <ChangePageButton text='Prev' onClick={goPrevPage} />
        <PageCount count={page} />
        <ChangePageButton text='Next' onClick={goNextPage} />
      </NavigationContainer>
    </Spinner>
  );
};

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: FC<CharacterCardProps> = ({
  character: { image, name, status, gender, location, species },
}) => {
  return (
    <Card>
      <Avatar src={image} alt='avatar' />

      <CharacterDescription
        name={name}
        status={status}
        gender={gender}
        location={location.name}
        species={species}
      />
    </Card>
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

const Avatar = styled.img`
  height: 160px;
  width: 160px;

  margin-right: 10px;

  border-radius: 10px 0 0 10px;
`;

const CharactersContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 15px;

  max-width: 1280px;
  width: 100%;

  margin: 0 auto;
`;

const Card = styled.div`
  display: flex;
  height: 160px;
  width: 100%;

  border-radius: 10px;
  background-color: #3d3d3d;
  color: aliceblue;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

  &:hover {
    transition: 0.5s;
    transform: scale(1.03);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 90px;
  margin-bottom: 20px;

  background-color: #3d3d3d;
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

const FilterContainer = styled.div`
  display: flex;

  margin-right: 100px;
`;

export default App;
