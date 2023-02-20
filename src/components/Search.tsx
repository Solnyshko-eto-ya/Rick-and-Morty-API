import { Input } from 'antd';
import React, { FC } from 'react';
import styled from 'styled-components';

interface SearchProps {
  onChange: (value: string) => void;
  value: string;
}

const Search: FC<SearchProps> = ({ value, onChange }) => (
  <StyledInput
    placeholder='Input character name'
    value={value}
    onChange={e => onChange(e.target.value)}
  />
);

const StyledInput = styled(Input)`
  width: 100%;
  max-width: 400px;
  height: 45px;
  padding: 10px;

  color: #010101;
  outline: none;
  font-size: 20px;

  &:hover {
    border-color: #e99000;
  }

  &:focus {
    border: 3px solid #e99000;
  }
`;

export default Search;
