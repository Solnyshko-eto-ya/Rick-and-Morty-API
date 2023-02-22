import React, { FC } from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import styled from 'styled-components';

interface FilterProps {
  value: string;
  onClick: MenuProps['onClick'];
  items: MenuProps['items'];
  label: string;
}

const Filter: FC<FilterProps> = ({ onClick, value, items, label }) => (
  <StyledDropDown menu={{ items, onClick }} placement='bottom'>
    <Button>
      {label}: {value}
    </Button>
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

export default Filter;
