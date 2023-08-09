import { MenuProps } from 'antd';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharactersPage from './pages/CharactersPage';
import EpisodesPage from './pages/EpisodesPage';
import LocationsPage from './pages/LocationsPage';

import { Gender, Status, Category, Context, ResponseMetadata } from './types';

export const AppContext = React.createContext<Context>({
  gender: Gender.Male,
  status: Status.Alive,
  category: Category.Characters,
  page: 1,
  setPage: () => {},
  handleGender: undefined,
  handleStatus: undefined,
  handleCategory: undefined,
  countPages: 1,
  setCountPages: () => {},
});

const App = () => {
  const [gender, setGender] = useState<Gender>(Gender.Any);
  const [status, setStatus] = useState<Status>(Status.Any);
  const [category, setCategory] = useState<Category>(Category.Characters);
  const [page, setPage] = useState(1);
  const [countPages, setCountPages] = useState(1);

  const handleGender: MenuProps['onClick'] = e => {
    setGender(e.key as Gender);
  };

  const handleStatus: MenuProps['onClick'] = e => {
    setStatus(e.key as Status);
  };

  const handleCategory: MenuProps['onClick'] = e => {
    setCategory(e.key as Category);
  };

  return (
    <AppContext.Provider
      value={{
        gender,
        status,
        category,
        page,
        countPages,
        setCountPages,
        handleGender,
        handleCategory,
        handleStatus,
        setPage,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CharactersPage />} />
          <Route path='/characters' element={<CharactersPage />} />
          <Route path='/episodes' element={<EpisodesPage />} />
          <Route path='/locations' element={<LocationsPage />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
