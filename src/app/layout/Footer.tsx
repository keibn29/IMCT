import { Flex, Space, Typography, Input, Menu, Image } from 'antd';
import MapComponent from './map';
import address from 'images/Group 202.png';
import Logo from 'images/logo.svg?react';
import { SendOutlined, FacebookFilled, YoutubeOutlined, YoutubeFilled } from '@ant-design/icons';
import Location from 'images/location.png';
import Phone from 'images/phone.png';
import email from 'images/Group 200.png';

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
          <span className="text-white text-xl font-medium">{menuItems[i]?.label}</span>
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
      <Flex className="text-white bg-primary w-full" justify="center" align="center" style={{ aspectRatio: 1 }}>
        <Flex vertical gap={20}>
          <Flex className="mt-[50px] pb-3 " gap={20} align="center">
            <span className="text-5xl ">Liên Hệ</span>
            <div className="mt-[4px] h-[3px] w-[115px] bg-white line" />
          </Flex>
          <Flex className="gap-4" align="center">
            <Flex className="bg-white h-[2.5rem]" justify="center" align="center" style={{ aspectRatio: 1 }}>
              <Image className="" width="" height="100%" src={Location} preview={false} />
            </Flex>
            <Flex vertical>
              <span className="text-base cursor-pointer font-bold uppercase">Văn phòng tại tp. hồ chí minh</span>
              <span className="text-base cursor-pointer">6/12 Trần Văn Dư, P. 13, Q. Tân Bình, TP. Hồ Chí Minh</span>
            </Flex>
          </Flex>
          <Flex className="gap-4" align="center">
            <Flex className="bg-white h-[2.5rem]" justify="center" align="center" style={{ aspectRatio: 1 }}>
              <Image className="" width="" height="100%" src={Location} preview={false} />
            </Flex>
            <Flex vertical>
              <span className="text-base cursor-pointer font-bold uppercase">Văn phòng tại hà nội</span>
              <span className="text-base cursor-pointer">
                Số 20/1, Ngách 21, Ngõ 168 Nguyễn P. Hạ Đình, Thanh Xuân, Hà Nội
              </span>
            </Flex>
          </Flex>
          <Flex className="gap-4" align="center">
            <Flex className="bg-white h-[2.5rem]" justify="center" align="center" style={{ aspectRatio: 1 }}>
              <Image className="" width="" height="100%" src={Phone} preview={false} />
            </Flex>
            <Flex vertical>
              <span className="text-base cursor-pointer font-bold uppercase">Hotline</span>
              <span className="text-base cursor-pointer">(0243) 2010073 - (0286) 2967455 - 0913222613</span>
            </Flex>
          </Flex>
          <Flex className="gap-4" align="center">
            <Flex className="bg-white h-[2.5rem]" justify="center" align="center" style={{ aspectRatio: 1 }}>
              <Image className="" height="1.5rem" src={email} preview={false} />
            </Flex>
            <Flex vertical>
              <span className="text-base cursor-pointer font-bold uppercase">Email</span>
              <span className="text-base cursor-pointer">imct.co.info@gmail.com - conghuu2000@gmail.com</span>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    <Flex style={{ backgroundColor: '#215E74' }} className="grid grid-cols-1 xl:grid-cols-3 pt-6 gap-y-16">
      <Flex className="" justify="center">
        <Space className="">
          <Logo className="w-64 h-60" />
        </Space>
      </Flex>
      <Flex justify="center" align="center">
        <div className="grid grid-cols-2 w-fit gap-x-16 gap-y-2 h-max pt-8">
          <MenuFooter />
        </div>
      </Flex>
      <Flex justify="center" align="center">
        <div className="w-fit grid grid-flow-row auto-rows-min gap-4 pt-12">
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
