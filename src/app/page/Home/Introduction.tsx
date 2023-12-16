import { Col, Flex, Row, Tabs, TabsProps, Typography } from 'antd';
import HorizontalIntro from 'images/horizontal-intro.svg?react';
import ArrowRight from 'images/arrow-right.svg?react';
const { Title } = Typography;

const tabItems: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tổng quan',
    children: (
      <div className="text-justify">
        <p>
          Tận tâm để mang lại cho khách hàng sản phẩm và dịch vụ vượt trên sự mong đợi là tôn chỉ của công ty TNHH ĐÀO
          TẠO TƯ VẤN VỀ QUẢN LÝ VÀ ĐẦU TƯ. Qua hơn 20 năm thành lập và hoạt động, công ty đang tiếp tục mở rộng hoạt
          động kinh doanh để cung cấp sản phẩm, dịch vụ tư vấn tạo ra các giá trị bền vững cho sự phát triển của khách
          hàng.
        </p>
        <p>
          Mọi hoạt động của công ty đều dựa trên các giá trị cốt lõi, cam kết về chất lượng đối với khách hàng, đối tác,
          với xã hội, với chính công ty và từng nhân viên. Những giá trị này là nền tảng cho mọi hoạt động để công ty
          trở thành một doanh nghiệp kinh doanh sáng tạo vì con người.
        </p>
      </div>
    ),
  },
  {
    key: '2',
    label: 'Sứ mệnh',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Giá trị cốt lõi',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '4',
    label: 'Giá trị cốt lõi',
    children: 'Content of Tab Pane 3',
  },
];

const Introduction = () => {
  return (
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
              <span className="text-[40px] font-bold">Giới Thiệu</span>
              <HorizontalIntro className="mt-[3px]" />
            </Flex>
            <p className="text-justify text-base">
              Giải pháp sáng tạo - Dịch vụ chuyên nghiệp là tất cả những gì mà chúng tôi muốn đem tới cho bạn để đạt
              được sự hài lòng cao nhất của khách hàng.
            </p>
            <Tabs className="styled-tabs" defaultActiveKey="1" items={tabItems} />
          </Flex>
          <Flex className="mt-[50px] text-primary" align="center" gap={3}>
            <span className="text-base font-bold cursor-pointer select-none">Xem thêm</span>
            <ArrowRight className="mt-[4px]" />
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
};

export default Introduction;
