import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import styled from 'styled-components';
import { Genders, Status } from '../types';

interface GenderFilterProps {
  gender: Genders;
  status: Status;
  onClick: () => void;
}

const items: MenuProps['items'] = [
  {
    key: '1-1',
    label: 'Male',
  },
  {
    key: '1-2',
    label: 'Female',
  },
  {
    key: '1-3',
    label: 'Unknown',
  },
  {
    key: '1-4',
    label: 'Genderless ',
  },
];

const GenderFilter: React.FC<GenderFilterProps> = ({ gender, onClick, status }) => (
  <StyledDropDown menu={{ items, onClick: onClick }} placement='bottom'>
    <Button>Gender: {gender}</Button>
  </StyledDropDown>
);

const StyledDropDown = styled(Dropdown)`
  height: 45px;
  width: 200px;

  margin: 0 10px;

  outline: none;
  font-size: 20px;

  &:hover {
    border-color: #e99000;
    border: 3px solid #e99000;
  }
`;

export default GenderFilter;
