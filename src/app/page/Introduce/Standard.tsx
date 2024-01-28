import { Col, Flex, Row } from 'antd';
import SectionTitle from 'app/components/SectionTitle';

interface IStandard {
  id: number;
  title: string;
  children: React.ReactNode;
}
const listPartner: IStandard[] = [
  {
    id: 1,
    title: 'Chất lượng sản phẩm, dịch vụ tư vấn',
    children: (
      <p>
        Đảm bảo cung cấp sản phẩm và dịch vụ tư vấn với chất lượng cao đạt tiêu chuẩn của quốc gia và quốc tế về sự
        chuyên nghiệp vượt trên sự mong đợi của khách hàng.
      </p>
    ),
  },
  {
    id: 2,
    title: 'Chất lượng chuyên gia',
    children: (
      <ul className="list-disc pl-[20px]">
        <li>Có kinh nghiệm thực tiễn và hiểu biết sâu sắc về chuyên môn.</li>

        <li>
          Cung cấp dịch vụ với tư cách một nhà tư vấn chuyên nghiệp có tư cách và năng lực đáp ứng đầy đủ các yêu cầu
          của khách hàng;
        </li>

        <li>Thực hiện công việc đảm bảo chất lượng tốt nhất đúng thời gian với sự tận tụy và trách nhiệm.</li>
      </ul>
    ),
  },
  {
    id: 3,
    title: 'Chất lượng công cụ hỗ trợ',
    children: <p>Ứng dụng CNTT và các thiết bị chuyên ngành hiện đại trong quá trình cung cấp dịch vụ.</p>,
  },
  {
    id: 4,
    title: 'Chất lượng kiểm soát',
    children: (
      <p>
        Quá trình thực hiện/ sản phẩm, dịch vụ tư vấn được kiểm soát chặt chẽ bởi quy trình kiểm soát chất lượng được
        thiết kế trước khi thực hiện dịch vụ bởi các chuyên gia đầu ngành trong từng lĩnh vực.
      </p>
    ),
  },
];
const Standard = () => {
  return (
    <Flex vertical className="bg-white mt-[80px] mb-[105px]" justify="center" align="center">
      <SectionTitle title="Tiêu chuẩn trong từng công việc" />
      <Row className="container" justify="space-between">
        <Col span={13} className="h-[699px]">
          {listPartner.map((partner: IStandard) => (
            <Flex key={partner.id} vertical className="">
              <span className="text-[28px] font-bold mb-4 font-['Inter']">{partner.title}</span>
              <hr className="w-[204px] text-[#529949] border " />
              <div className="text-sm mt-6 mb-10 font-['Inter']">{partner.children}</div>
            </Flex>
          ))}
        </Col>
        <Col className="p-[30px] relative shadow-default bg-white h-[699px]">
          <div className="background-image standard w-[482px] h-[639px] relative z-[2]" />
          <div className="w-[244px] h-[244px] bg-dark-green absolute top-0 left-0" />
          <div className="w-[244px] h-[244px] bg-dark-green absolute bottom-0 right-0" />
        </Col>
      </Row>
    </Flex>
  );
};

export default Standard;
