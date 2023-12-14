import moment from 'moment';
import { Layout, Flex } from 'antd';
import HeaderNav from './HeaderNav';
const { Header, Footer, Sider, Content } = Layout;

interface IProps {
  children: JSX.Element;
}

const DefaultLayout = (props: IProps) => {
  const { children } = props;

  return (
    <Layout>
      <Header className='h-[65px] bg-white'>
        <HeaderNav />
      </Header>
      <Content>{children}</Content>
    </Layout>

    // <div className="flex flex-col h-screen justify-between">
    //   <div className="h-[80px]">{/* <Navbar user={userInfoLogin} treeMenu={treeMenu} /> */}</div>
    //   <div className="mb-auto h-10">{children}</div>
    //   <footer className="h-10 bg-[#E6E6E6] text-center py-[13px] mt-10 justify-end">
    //     Copyright {currentYear} <span className="uppercase font-semibold px-[2px]">CLARE TNA CORPORATION.</span>
    //     All rights reserved.
    //   </footer>
    // </div>
  );
};
export default DefaultLayout;
