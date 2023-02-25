import React, { FC } from 'react';
import styled from 'styled-components';

interface PageCountProps {
  count: number;
}

export const PageCount: FC<PageCountProps> = ({ count }) => {
  return <StyledPageCount>Page: {count}</StyledPageCount>;
};

const StyledPageCount = styled.p`
  display: inline-block;

  margin: 0 20px 0 20px;

  font-size: 30px;
  color: #ffffff;
`;
