import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Flex, Menu, Select, Space } from 'antd';
import { languageOptions, menuItems } from 'constant/nav';
import Logo from 'images/logo.svg?react';
import { useEffect, useState } from 'react';

type HeaderBackgroundColor = 'transparent' | '#17363B';
const SCROLL_POSITION_CHANGE_BACKGROUND = 700;

const Header = () => {
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState<HeaderBackgroundColor>('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const nextHeaderBackground = window.scrollY >= SCROLL_POSITION_CHANGE_BACKGROUND ? '#17363B' : 'transparent';
      setHeaderBackgroundColor(nextHeaderBackground);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Flex
      className={`fixed h-[100px] text-white w-[100vw] z-[99]`}
      style={{ backgroundColor: headerBackgroundColor }}
      justify="center"
      align="center"
    >
      <Flex className="container" justify="space-between">
        <Space className="">
          <Logo />
        </Space>
        <Menu
          className="justify-center items-center text-white gap-[30px] text-lg font-light header-menu select-none"
          mode="horizontal"
          defaultSelectedKeys={[]}
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
};

export default Header;
