import React, { FC, useContext } from 'react';
import { AppContext } from '../../App';
import ChangePageButton from './ChangePageButton';
import { PageCount } from './PageCount';

interface PaginationProps {
  countPages: number;
}

const Pagination: FC<PaginationProps> = ({ countPages }) => {
  const { page, setPage } = useContext(AppContext);

  function toPrevPage() {
    if (page > 1) {
      return setPage(page - 1);
    }
  }

  function toNextPage() {
    if (page < countPages) {
      return setPage(page + 1);
    }
  }

  return (
    <>
      <ChangePageButton text='Prev' onClick={toPrevPage} />
      <PageCount count={page} />
      <ChangePageButton text='Next' onClick={toNextPage} />
    </>
  );
};

export default Pagination;
