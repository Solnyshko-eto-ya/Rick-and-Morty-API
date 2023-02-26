import React, { FC, ReactNode } from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import styled from 'styled-components';

interface FilterProps {
  value: string;
  onClick: MenuProps['onClick'];
  items: MenuProps['items'];
  text: string;
  disabled: boolean;
}

const Filter: FC<FilterProps> = ({ onClick, value, items, text, disabled }) => (
  <StyledDropDown menu={{ items, onClick }} placement='bottom' disabled={disabled}>
    <Button>
      {text}: {value}
    </Button>
  </StyledDropDown>
);

const StyledDropDown = styled(Dropdown)`
  height: 45px;
  width: 250px;

  outline: none;
  font-size: 20px;

  &:hover {
    border-color: #e99000;
    border: 3px solid #e99000;
  }

  &:disabled {
    border-color: #e99000;
    background-color: #969696;
  }
`;

export default Filter;
