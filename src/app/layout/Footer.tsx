import { Flex, Space, Typography, Input, Menu } from 'antd';
import MapComponent from './map';
import address from 'images/Group 202.png';
import Logo from 'images/logo.svg?react';
import { SendOutlined, FacebookFilled, YoutubeOutlined, YoutubeFilled } from '@ant-design/icons';

const { Text, Link } = Typography;
const menuItems = [
  {
    key: 1,
    label: 'Giới Thiệu',
  },
  {
    key: 2,
    label: 'Dịch Vụ',
  },
  {
    key: 3,
    label: 'Sản Phẩm',
  },
  {
    key: 4,
    label: 'Đối Tác',
  },
  {
    key: 5,
    label: 'Tin Tức',
  },
  {
    key: 6,
    label: 'Tuyển Dụng',
  },
  {
    key: 7,
    label: 'Liên Hệ',
  },
];
const MenuFooter = () => {
  const divElements: JSX.Element[] = [];
  for (let i = 0; i < menuItems.length; i++) {
    divElements.push(
      <div key={menuItems[i]?.key}>
        <a href="#">
          <span className="text-white text-2xl font-medium">{menuItems[i]?.label}</span>
        </a>
      </div>
    );
  }

  return divElements;
};

const Footer = () => (
  <Flex vertical className="w-screen max-w-full">
    <Flex align="center" className="grid grid-cols-1 md:grid-cols-2">
      <MapComponent></MapComponent>
      <div
        className="w-full grid justify-items-center items-center"
        style={{ backgroundColor: '#77C373', aspectRatio: '1' }}
      >
        <img className="w-[80%]" style={{ objectFit: 'cover' }} src={address} alt="address" />
      </div>
    </Flex>
    <Flex style={{ backgroundColor: '#215E74' }} className="grid grid-cols-1 xl:grid-cols-3 pt-6 gap-y-16">
      <Flex className="" justify="center">
        <Space className="">
          <Logo className="w-64 h-60" />
        </Space>
      </Flex>
      <Flex justify="center" align="center">
        <div className="grid grid-cols-2 w-fit gap-x-16 gap-y-2 h-max">
          <MenuFooter />
        </div>
      </Flex>
      <Flex justify="center" align="center">
        <div className="w-fit grid grid-flow-row auto-rows-min gap-4">
          <span className="text-white text-2xl font-medium w-fit">Đăng Ký Ngay</span>
          <span className="text-white ">Đăng ký để nhận những tin tức mới nhất từ chúng tôi.</span>
          <Input
            addonAfter={<SendOutlined style={{ color: 'white', backgroundColor: 'primary', border: 'none' }} />}
            defaultValue="Email"
          />
          <Space>
            <FacebookFilled style={{ color: 'white', fontSize: '2.25rem', lineHeight: '2.5rem' }} />
            <div className="bg-white grid justify-items-center" style={{ width: '32.14px', height: '32.14px' }}>
              <YoutubeFilled style={{ color: '#215E74', fontSize: '1.5rem', lineHeight: '2.5rem' }} />
            </div>
          </Space>
        </div>
      </Flex>
    </Flex>
    <Flex style={{ backgroundColor: '#215E74' }} align="center" justify="center">
      <Space className="text-white text-base min-h-[100px] text-size">
        Copyright © 2023 imct company. All Rights Reserved.
      </Space>
    </Flex>
  </Flex>
);

export default Footer;
