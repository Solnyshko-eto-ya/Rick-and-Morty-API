import React, { useContext } from 'react';
import { AppContext } from '../App';
import { Filter, Search } from '../components';
import { CATEGORIES } from '../constants';
import { Header } from './CharactersPage';

const LocationsPage = () => {
  const { category, page, handleCategory, countPages, setCountPages } = useContext(AppContext);
  return (
    <>
      <Header>
        <h2 style={{ color: '#ffffff', fontSize: '30px' }}>I'll finish it soon (Probably)</h2>
        <Filter
          disabled={false}
          value={category}
          onClick={handleCategory}
          items={CATEGORIES}
          text='Category'
        />
      </Header>
      <h1 style={{ color: '#ffffff', fontSize: '40px' }}>LocationsPage</h1>
    </>
  );
};

export default LocationsPage;
