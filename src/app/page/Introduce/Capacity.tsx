import { Col, Flex, Row } from 'antd';

const Capacity = () => {
  return (
    <Flex className="bg-light-gray py-[70px]" justify="center">
      <Row className="container" justify="space-between">
        <Col className="p-[30px] relative shadow-default bg-white">
          <div className="background-image capacity w-[575px] h-[575px] relative z-[2]" />
          <div className="w-[250px] h-[250px] bg-dark-green absolute top-0 left-0" />
          <div className="w-[250px] h-[250px] bg-dark-green absolute bottom-0 right-0" />
        </Col>
        <Col span={13} className="py-[50px]">
          <Flex vertical gap={20}>
            <Flex vertical gap={15}>
              <span className="text-[40px] font-bold">Năng Lực Tài Chính Và Tuân Thủ Nghĩa Vụ Thuế/Bảo Hiểm</span>
              <hr className="w-[204px] text-[#529949] border " />
            </Flex>
            <p className="text-justify text-black text-lg font-normal font-['Inter']">
              Khách hàng có thể tiến hành bất cứ cuộc thẩm tra/xác minh các thông tin tài chính của IMCT.
              <br /> <br />
              Với nguồn vốn lưu động sẵn có. IMCT luôn khẳng định và tin tưởng việc đảm bảo nguồn tài chính để thực hiện
              các dự án có quy mô quốc gia và quốc tế. <br /> <br />
              Các báo cáo tài chính năm và chấp hành nghĩa vụ thuế đã được kê khai với cơ quan Thuế tại địa chỉ:
              <br />
              <a className="text-[#77C373]" href="http://tracuunnt.gdt.gov.vn/tcnnt/mstdn.jsp">
                http://tracuunnt.gdt.gov.vn/tcnnt/mstdn.jsp.
              </a>
            </p>
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
};

export default Capacity;
