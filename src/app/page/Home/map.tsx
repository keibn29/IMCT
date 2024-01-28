import { Flex, Image } from 'antd';
import Location from 'images/location.png';
import Phone from 'images/phone.png';
import email from 'images/Group 200.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const MapComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="3000">
      <Flex align="center" className="grid grid-cols-1 md:grid-cols-2 w-screen max-w-full">
        <Flex className="text-white bg-primary w-full" justify="center" align="center" style={{ aspectRatio: 1 }}>
          <iframe
            title="GG-Map"
            src="https://maps.google.com/maps?width=600&amp;height=600&amp;hl=en&amp;q=304%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2F6D%20%C4%90.%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2C%20Ph%C6%B0%E1%BB%9Dng%2013%2C%20T%C3%A2n%20B%C3%ACnh%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Flex>

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
    </div>
  );
};

export default MapComponent;
