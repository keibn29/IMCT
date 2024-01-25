import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Flex, Menu, Select, Space } from 'antd';
import useHeaderStyle from 'app/hooks/useHeaderStyle';
import { languageOptions, menuItems } from 'constant/nav';
import { URL } from 'constant/url';
import Logo from 'images/logo.svg?react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { headerBackgroundColor, headerClassName } = useHeaderStyle();

  return (
    <Flex
      className={`${headerClassName} h-[100px] text-white w-full z-[99]`}
      style={{ backgroundColor: headerBackgroundColor }}
      justify="center"
      align="center"
    >
      <Flex className="container" justify="space-between">
        <Space className="cursor-pointer">
          <Logo onClick={() => navigate(URL.Home)} />
        </Space>
        <Menu
          className="justify-center items-center text-white gap-[30px] text-lg font-light header-menu select-none"
          mode="horizontal"
          defaultSelectedKeys={[]}
          items={menuItems}
          onClick={(evt: any) => navigate(evt.item.props.link)}
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
