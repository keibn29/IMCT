import { Flex, Menu, Space } from 'antd';
import Logo from 'images/logo.svg?react';

const menuItems = [
  {
    key: 1,
    label: 'gioi thieu',
    children: [
      { key: 11, label: 'gioi thieu chung' },
      { key: 12, label: 'tin chuan trong cong viec' },
      { key: 13, label: 'co cau to chuc' },
    ],
  },
  {
    key: 2,
    label: 'dich vu',
  },
  {
    key: 3,
    label: 'san pham',
  },
  {
    key: 4,
    label: 'doi tac',
  },
  {
    key: 5,
    label: 'tin tuc',
  },
  {
    key: 6,
    label: 'tuyen dung',
  },
  {
    key: 7,
    label: 'lien he',
  },
];

const HeaderNav = () => (
  <Flex className="fixed h-[100px] bg-transparent text-white w-[100vw] items-center" justify="center" align="center">
    <Flex className="container" justify="space-between">
      <Space className="">
        <Logo />
      </Space>
      <Menu
        className="justify-center items-center text-white gap-[30px] text-lg header-menu"
        style={{ backgroundColor: 'transparent' }}
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={menuItems}
      />
      <Flex>aa</Flex>
    </Flex>
  </Flex>
);

export default HeaderNav;
