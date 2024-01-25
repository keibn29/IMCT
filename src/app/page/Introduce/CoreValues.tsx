import { Col, Flex, Row } from 'antd';
import HorizontalWhite from 'images/horizontal-white.svg?react';

const CoreValues = () => {
  return (
    <Flex className="heading-container background-image coreValues py-[70px] h-[593px]" justify="center">
      <Row className="container" justify="space-between">
        <Col span={12} className="py-[50px]">
          <Flex vertical gap={20}>
            <Flex align="center" gap={15}>
              <span className="text-[40px] font-bold text-white">Giá trị cốt lõi</span>
              <HorizontalWhite className="mt-[3px]" />
            </Flex>
            <div className="w-[516px] h-44 text-justify">
              <span className="text-white text-lg font-normal font-['Inter']">• </span>
              <span className="text-white text-lg font-bold font-['Inter']">Chính trực - Tận tâm - Chuyên nghiệp</span>
              <span className="text-white text-lg font-normal font-['Inter']">
                {' '}
                với khách hàng
                <br />
                và công việc.
                <br />
                <br />•{' '}
              </span>
              <span className="text-white text-lg font-bold font-['Inter']">Sáng tạo</span>
              <span className="text-white text-lg font-normal font-['Inter']">
                {' '}
                để mang lại giá trị thiết thực cho khách hàng với Chất lượng vượt trên sự mong đợi.
                <br />
                <br />•{' '}
              </span>
              <span className="text-white text-lg font-bold font-['Inter']">Kết nối - Hợp tác – Phát triển</span>
              <span className="text-white text-lg font-normal font-['Inter']">
                {' '}
                để tập hợp trí tuệ, xây dựng đội ngũ, mở rộng khách hàng.
              </span>
            </div>
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
};

export default CoreValues;
