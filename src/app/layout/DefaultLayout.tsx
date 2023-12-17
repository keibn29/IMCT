import { Layout } from 'antd';
import Footer from './Footer';
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
      <Footer />
    </Layout>
  );
};
export default DefaultLayout;
