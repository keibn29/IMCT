import { Flex } from 'antd';
import Title from 'app/components/Title';
import Service from '../Home/Service';

const ServicePage = () => (
  <>
    <Flex className="py-[80px] heading-container background-image service-bg" justify="center">
      <div className="container">
        <Title className="z-[2] relative" title="Dịch Vụ" isWhite={true} title2="Trang chủ/Dịch Vụ" />
      </div>
    </Flex>
    <Service />
  </>
);

export default ServicePage;
