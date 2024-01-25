import { Flex, Typography, Form, Input, Button } from 'antd';
import Location from 'images/location.svg?react';
import Phone from 'images/phone.svg?react';
import Email from 'images/email.svg?react';
import TextArea from 'antd/es/input/TextArea';
import Title from 'app/components/Title';

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

const Contact = () => (
  <>
    <Flex className="py-[80px] heading-container background-image contact-bg" justify="center">
      <div className="container">
        <Title className="z-[2] relative" title="Liên hệ" isWhite={true} title2="Trang chủ/Liên hệ" />
      </div>
    </Flex>
    <Flex vertical className="my-40">
      <Flex className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <Flex className="grid grid-cols-1 gap-8">
          <Flex className="w-full">
            <Flex vertical className="gap-8">
              <Flex className="gap-4" align="center">
                <Flex className="bg-white h-[2.5rem] aspect-square" justify="center" align="center">
                  <Location className="mt-[4px]" />
                </Flex>
                <Flex vertical>
                  <span className="text-base font-bold uppercase">Văn phòng tại tp. hồ chí minh</span>
                  <span className="text-base ">6/12 Trần Văn Dư, P. 13, Q. Tân Bình, TP. Hồ Chí Minh</span>
                </Flex>
              </Flex>
              <Flex className="gap-4" align="center">
                <Flex className="bg-white h-[2.5rem]" justify="center" align="center" style={{ aspectRatio: 1 }}>
                  <Phone className="mt-[4px]" />
                </Flex>
                <Flex vertical>
                  <span className="text-base font-bold uppercase">Hotline</span>
                  <span className="text-base ">(0243) 2010073 - (0286) 2967455 - 0913222613</span>
                </Flex>
              </Flex>
              <Flex className="gap-4" align="center">
                <Flex className="bg-primary h-[2.5rem]" justify="center" align="center" style={{ aspectRatio: 1 }}>
                  <Email className="mt-[4px]" />
                </Flex>
                <Flex vertical>
                  <span className="text-base  font-bold uppercase">Email</span>
                  <span className="text-base ">imct.co.info@gmail.com - conghuu2000@gmail.com</span>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <iframe
            title="Location-HCM"
            src="https://maps.google.com/maps?width=600&amp;height=600&amp;hl=en&amp;q=304%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2F6D%20%C4%90.%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2C%20Ph%C6%B0%E1%BB%9Dng%2013%2C%20T%C3%A2n%20B%C3%ACnh%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            className="aspect-square"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Flex>
        <Flex className="grid grid-cols-1 gap-8">
          <Flex className="w-full">
            <Flex vertical className="gap-8">
              <Flex className="gap-4" align="center">
                <Flex className="bg-white h-[2.5rem] aspect-square" justify="center" align="center">
                  <Location className="mt-[4px]" />
                </Flex>
                <Flex vertical>
                  <span className="text-base  font-bold uppercase">Văn phòng tại hà nội</span>
                  <span className="text-base ">Số 20/1, Ngách 21, Ngõ 168 Nguyễn P. Hạ Đình, Thanh Xuân, Hà Nội</span>
                </Flex>
              </Flex>
              <Flex className="gap-4" align="center">
                <Flex className="bg-white h-[2.5rem]" justify="center" align="center" style={{ aspectRatio: 1 }}>
                  <Phone className="mt-[4px]" />
                </Flex>
                <Flex vertical>
                  <span className="text-base  font-bold uppercase">Hotline</span>
                  <span className="text-base ">(0243) 2010073 - (0286) 2967455 - 0913222613</span>
                </Flex>
              </Flex>
              <Flex className="gap-4" align="center">
                <Flex className="bg-primary h-[2.5rem]" justify="center" align="center" style={{ aspectRatio: 1 }}>
                  <Email className="mt-[4px]" />
                </Flex>
                <Flex vertical>
                  <span className="text-base  font-bold uppercase">Email</span>
                  <span className="text-base ">imct.co.info@gmail.com - conghuu2000@gmail.com</span>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <iframe
            title="Location-HN"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d329.25827858395945!2d105.80515043753223!3d20.987334719631907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acc01e941509%3A0x4e77813882ad58b3!2zU-G7kSAyMCwgMjEgTmcuIDE2OCDEkC4gTmd1eeG7hW4gWGnhu4NuLCBI4bqhIMSQw6xuaCwgVGhhbmggWHXDom4sIEjDoCBO4buZaSAxMDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1706084774890!5m2!1svi!2s"
            width="100%"
            className="aspect-square"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Flex>
      </Flex>
      <Flex className="container grid grid-cols-1 mx-auto gap-8">
        <Form className="grid grid-cols-2 gap-8">
          <div className="w-full gap-8">
            <Form.Item>
              <Input placeholder="Họ tên:" className="border-x-0 border-t-0 border-b-2 rounded-none text-xl" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="Email:" className="border-x-0 border-t-0 border-b-2 rounded-none text-xl" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="Điện thoại:" className="border-x-0 border-t-0 border-b-2 rounded-none text-xl" />
            </Form.Item>
          </div>
          <div className="w-full gap-8 justify-end relative">
            <Form.Item>
              <TextArea placeholder="Tin nhắn:" rows={5} className="rounded-none text-xl" />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              className="bg-primary rounded-none ml-auto absolute right-0 w-1/4 h-10 text-xl"
            >
              Gửi tin nhắn
            </Button>
          </div>
        </Form>
      </Flex>
    </Flex>
  </>
);

export default Contact;
