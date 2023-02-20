import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import styled from 'styled-components';
import { Status } from '../types';

interface StatusFilterProps {
  status: Status;
  onClick: () => void;
}

const items: MenuProps['items'] = [
  {
    key: '2-1',
    label: 'Alive',
  },
  {
    key: '2-2',
    label: 'Dead',
  },
  {
    key: '2-3',
    label: 'Unknown',
  },
];

const StatusFilter: React.FC<StatusFilterProps> = ({ status, onClick }) => (
  <StyledDropDown menu={{ items, onClick: onClick }} placement='bottom'>
    <Button>Status: {status}</Button>
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

export default StatusFilter;
