import { FC, ReactNode } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, SpinProps } from 'antd';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Spinner: FC<SpinProps> = props => {
  return <Spin {...props} indicator={antIcon} delay={300} />;
};

export default Spinner;
