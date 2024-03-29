import { lazy, ReactElement, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'app/page/Results/NotFound';
import DefaultLayout from 'app/layout/DefaultLayout';
import { URL } from 'constant/url';
import { ConfigProvider } from 'antd';
import Contact from 'app/page/Contact/Content';
import Recruitment from 'app/page/Recruitment/Content';
import News from 'app/page/News/Content';
import HomeIntroduction from 'app/page/Introduce';
import ServicePage from 'app/page/ServicePage';
import NewsDetail from 'app/page/NewsDetail/Content';
import RecruitmentDetail from 'app/page/RecruitmentDetail/Content';

const DEFAULT_LAYOUT = 'default';
const NONE_LAYOUT = 'none';

const Home = lazy(() => import('app/page/Home'));

interface ItemType {
  key: string;
  components: ReactElement;
  layout: string;
  private: boolean;
}

const userItems: ItemType[] = [
  {
    key: URL.Home,
    components: <Home />,
    layout: DEFAULT_LAYOUT,
    private: true,
  },
];

const sharedItems: ItemType[] = [
  {
    key: '*',
    components: <NotFound />,
    layout: NONE_LAYOUT,
    private: false,
  },
  {
    key: '/contact',
    components: <Contact />,
    layout: DEFAULT_LAYOUT,
    private: false,
  },
  {
    key: '/recruitment',
    components: <Recruitment />,
    layout: DEFAULT_LAYOUT,
    private: false,
  },
  {
    key: '/news',
    components: <News />,
    layout: DEFAULT_LAYOUT,
    private: false,
  },
  {
    key: '/introduce',
    components: <HomeIntroduction />,
    layout: DEFAULT_LAYOUT,
    private: false,
  },
  {
    key: '/service',
    components: <ServicePage />,
    layout: DEFAULT_LAYOUT,
    private: false,
  },
  {
    key: '/newsdetail',
    components: <NewsDetail />,
    layout: DEFAULT_LAYOUT,
    private: false,
  },
  {
    key: '/recruitmentdetail',
    components: <RecruitmentDetail />,
    layout: DEFAULT_LAYOUT,
    private: false,
  },
];

export default function Routers() {
  const items = userItems.concat(sharedItems);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#77C373',
        },
      }}
    >
      <Routes>
        {items.map((item) => {
          let element = item.components;

          element = <Suspense fallback={null}>{element}</Suspense>;

          if (item.layout === DEFAULT_LAYOUT) {
            element = <DefaultLayout>{element}</DefaultLayout>;
          }

          return <Route key={item.key} path={item.key} element={element} />;
        })}
      </Routes>
    </ConfigProvider>
  );
}
