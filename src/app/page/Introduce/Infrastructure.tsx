import { Col, Flex, Row } from 'antd';

const Infrastructure = () => {
  return (
    <Flex className="bg-light-gray py-[70px]" justify="center">
      <Row className="container" justify="space-between">
        <Col span={13} className="">
          <Flex vertical gap={20}>
            <Flex vertical gap={15}>
              <span className="text-[40px] font-bold">
                Cơ Sở Vật Chất Và
                <br /> Tài Sản Phục Vụ Công Việc
              </span>
              <hr className="w-[192px] text-[#529949] border " />
            </Flex>
            <p className="text-justify text-black text-sm font-normal font-['Inter']">
              Các chuyên gia/kỹ sư của IMCT khi tham gia thực hiện dịch vụ Tư vấn đều được trang bị thiết bị làm việc
              hiện đại.
              <br /> <br />
              Phần mềm chuyên dụng như: Phần mềm tính toán và kiểm tra tải trọng; tính toán thủy lực mạng lưới và mô
              phỏng; Phần mềm quản lý Hệ thống thông tin; <br /> <br />
              Phần mềm dự toán; Phần mềm tra cứu và lựa chọn các loại bơm; Phần mềm quản lý đấu thầu - hợp đồng. Phần
              mềm quản lý dịch vụ tư vấn nổi mạng internet để quản lý toàn bộ quá trình làm việc (thời gian/chất lượng
              công việc) của các chuyên gia tham gia thực hiện dịch vụ tư vấn đối với từng gói thầu trong từng lĩnh vực
              cụ thể. Các phần mềm chuyên dụng đều được công ty mua bản quyền hợp pháp khi sử dụng. <br /> <br />
              Máy chiếu và trang thiết bị phục vụ cho công tác đào tạo, giảng dạy. 05 phòng học đầy đủ trang thiết bị
              cho lớp học từ 15 đến {'>'} 50 người. <br /> <br />
              Các nhóm công tác thực địa đều được trang bị đầy đủ thiết bị và công cụ hỗ trợ như máy ảnh số, máy định
              vị...máy quay phim, máy ghi âm (dùng cho các cuộc phỏng vấn), dụng cụ đo đạc, túi chuyên dụng đựng mẫu..{' '}
              <br /> <br />
              Hệ thống máy chủ (Server) hiện đại nối mạng internet/hệ thống giám sát để phục vụ việc lưu trữ dữ liệu và
              quản lý làm việc của chuyên gia/kỹ sư trong suốt quá trình thực hiện dịch vụ.
            </p>
          </Flex>
        </Col>
        <Col className="p-[30px] relative shadow-default bg-white">
          <div className="background-image infrastructure w-[482px] h-[482px] relative z-[2]" />
          <div className="w-[250px] h-[250px] bg-dark-green absolute top-0 left-0" />
          <div className="w-[250px] h-[250px] bg-dark-green absolute bottom-0 right-0" />
        </Col>
      </Row>
    </Flex>
  );
};

export default Infrastructure;
