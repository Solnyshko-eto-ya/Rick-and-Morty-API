import React from 'react';
import { Pagination } from 'antd';

const PageNavigation: React.FC = () => <Pagination defaultCurrent={1} total={42} />;

export default PageNavigation;
