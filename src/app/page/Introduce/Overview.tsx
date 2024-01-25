import { Col, Flex, Row } from 'antd';
import Title from 'app/components/Title';
import HorizontalIntro from 'images/horizontal-intro.svg?react';

const Overview = () => {
  return (
    <>
      <Flex className="py-[100px] heading-container background-image introduce-bg" justify="center">
        <div className="container">
          <Title className="z-[2] relative" title="Liên hệ" isWhite={true} title2="Trang chủ/Liên hệ" />
        </div>
      </Flex>
      <Flex className="bg-light-gray py-[70px]" justify="center">
        <Row className="container" justify="space-between">
          <Col className="p-[30px] relative shadow-default bg-white">
            <div className="background-image introduction w-[575px] h-[575px] relative z-[2]" />
            <div className="w-[250px] h-[250px] bg-dark-green absolute top-0 left-0" />
            <div className="w-[250px] h-[250px] bg-dark-green absolute bottom-0 right-0" />
          </Col>
          <Col span={13} className="py-[50px]">
            <Flex vertical gap={20}>
              <Flex align="center" gap={15}>
                <span className="text-[40px] font-bold">Tổng Quan</span>
                <HorizontalIntro className="mt-[3px]" />
              </Flex>
              <p className="text-justify text-black text-lg font-normal font-['Inter']">
                Giải pháp sáng tạo - Dịch vụ chuyên nghiệp là tất cả những gì mà chúng tôi muốn đem tới cho bạn để đạt
                được sự hài lòng cao nhất của khách hàng. <br />
                <br />
                Tận tâm để mang lại cho khách hàng sản phẩm và dịch vụ vượt trên sự mong đợi là tôn chỉ của công ty TNHH
                ĐÀO TẠO TƯ VẤN VỀ QUẢN LÝ VÀ ĐẦU TƯ. Qua hơn 20 năm thành lập và hoạt động, công ty đang tiếp tục mở
                rộng hoạt động kinh doanh để cung cấp sản phẩm, dịch vụ tư vấn tạo ra các giá trị bền vững cho sự phát
                triển của khách hàng.
                <br />
                <br /> Mọi hoạt động của công ty đều dựa trên các giá trị cốt lõi, cam kết về chất lượng đối với khách
                hàng, đối tác, với xã hội, với chính công ty và từng nhân viên. Những giá trị này là nền tảng cho mọi
                hoạt động để công ty trở thành một doanh nghiệp kinh doanh sáng tạo vì con người.
              </p>
            </Flex>
            <Flex vertical gap={20} className="mt-[20px]">
              <Flex align="center" gap={15}>
                <span className="text-[40px] font-bold">Sứ Mệnh</span>
                <HorizontalIntro className="mt-[3px]" />
              </Flex>
              <p className="text-justify text-black text-lg font-normal font-['Inter']">
                Trở thành công ty hàng đầu Việt Nam và khu vực trong lĩnh vực Tư vấn và giải pháp công nghệ
              </p>
            </Flex>
          </Col>
        </Row>
      </Flex>
    </>
  );
};

export default Overview;
