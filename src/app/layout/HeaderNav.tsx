import { Flex, Space } from 'antd';
import Logo from 'images/logo.svg?react';

const HeaderNav = () => (
  <Flex>
    <Space className="bg-black">
      <Logo />
    </Space>
  </Flex>
);

export default HeaderNav;
