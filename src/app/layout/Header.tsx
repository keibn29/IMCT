import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Flex, Menu, Select, Space } from 'antd';
import { languageOptions, menuItems } from 'constant/nav';
import Logo from 'images/logo.svg?react';

const Header = () => (
  <Flex className="fixed h-[100px] text-white w-[100vw] z-[99]" justify="center" align="center">
    <Flex className="container" justify="space-between">
      <Space className="">
        <Logo />
      </Space>
      <Menu
        className="justify-center items-center text-white gap-[30px] text-lg font-light header-menu select-none"
        mode="horizontal"
        defaultSelectedKeys={['11']}
        items={menuItems}
      />
      <Flex align="center" gap={10}>
        <SearchOutlined className="text-xl" />
        <Select
          className="language-select"
          suffixIcon={<DownOutlined className="text-white" />}
          defaultValue={languageOptions[0].value}
          options={languageOptions}
        />
      </Flex>
    </Flex>
  </Flex>
);

export default Header;
