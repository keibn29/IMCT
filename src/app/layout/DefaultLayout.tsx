import { Layout } from 'antd';
import Header from './Header';

interface IProps {
  children: JSX.Element;
}

const DefaultLayout = (props: IProps) => {
  const { children } = props;

  return (
    <Layout className="bg-white">
      <Header />
      {children}
    </Layout>
  );
};
export default DefaultLayout;
