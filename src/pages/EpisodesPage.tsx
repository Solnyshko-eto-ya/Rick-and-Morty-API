import React, { FC, useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';
import { CATEGORIES } from '../constants';
import { Header } from './CharactersPage';
import Filter from '../components/Filter';
import { Search } from '../components';
import axios from 'axios';
import { Episodes, EpisodesResponse } from '../types';
import useDebounce from '../hooks/use-debounce';
import styled from 'styled-components';
import Pagination from '../components/pagination/Pagination';

const EpisodesPage = () => {
  const { category, page, handleCategory, countPages, setCountPages } = useContext(AppContext);

  const [episodeData, setEpisodeData] = useState<EpisodesResponse | null>(null);
  const [episodeName, setepisodename] = useState<string>('');

  const debouncedName = useDebounce(episodeName, 300);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<EpisodesResponse>(
        `https://rickandmortyapi.com/api/episode?name=${debouncedName}&page=${page}`
      );
      setEpisodeData(response.data);
      setCountPages(response.data.info.pages);
    };

    fetchData();
  }, [debouncedName, page]);

  return (
    <>
      <Header>
        <Search value={episodeName} onChange={setepisodename} placeholder='Input Episode Name' />
        <Filter value={category} onClick={handleCategory} items={CATEGORIES} text='Category' />
      </Header>
      <EpisodesContainer>
        {episodeData?.results?.map(episode => (
          <EpisodeCard episode={episode} />
        ))}
      </EpisodesContainer>
      <Pagination countPages={countPages} />
    </>
  );
};

interface EpisodeCardProps {
  episode: Episodes;
}

const EpisodeCard: FC<EpisodeCardProps> = ({
  episode: { name, episode, air_date, characters, url, created },
}) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Episode: {episode}</p>
      <p>Air-Date{air_date}</p>
      {/* <p>Characters: {characters}</p> */}
      <p>Created: {url}</p>
    </div>
  );
};

const EpisodesContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 15px;

  max-width: 1280px;
  width: 100%;

  margin: 0 auto;
`;

export default EpisodesPage;
