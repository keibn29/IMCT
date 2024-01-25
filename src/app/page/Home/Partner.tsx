import { Col, Flex, Image, Row } from 'antd';
import SectionTitle from 'app/components/SectionTitle';
import PartnerImage from 'images/partner.png';
import PartnerImage2 from 'images/partner2.png';
import PartnerImage3 from 'images/partner3.png';

interface IPartner {
  id: number;
  imageUrl: string;
  title: string;
  content: string;
}
const listPartner: IPartner[] = [
  {
    id: 1,
    imageUrl: PartnerImage2,
    title: 'Tổ chức/cơ quan Nhà nước',
    content:
      'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac',
  },
  {
    id: 2,
    imageUrl: PartnerImage,
    title: 'Doanh nghiệp',
    content:
      'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac',
  },
  {
    id: 3,
    imageUrl: PartnerImage3,
    title: 'Dự án do WB/ADB tài trợ',
    content:
      'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac',
  },
];

const Partner = () => {
  return (
    <Flex className="py-[80px] partner-container background-image" justify="center">
      <div className="container px-[100px]">
        <SectionTitle className="z-[2] relative" title="Đối Tác Của Chúng Tôi" isWhite={true} />
        <Row gutter={30} className="mt-[10px]">
          {listPartner.map((partner: IPartner) => (
            <Col key={partner.id} span={8}>
              <Flex
                vertical
                className="group cursor-pointer h-[100%] rounded-[10px] bg-white relative overflow-hidden hover:text-white partner-wrapper"
              >
                <Image
                  className="object-cover rounded-t-[10px] zoom-in"
                  width="100%"
                  height={285}
                  src={partner.imageUrl}
                  preview={false}
                />
                <div className="text-center px-[50px] pt-[25px] pb-[30px] group-hover:z-[2] group-hover:bg-transparent">
                  <div>
                    <span className="text-2xl text-primary font-bold group-hover:text-white">{partner.title}</span>
                    <p className="text-justify mt-[15px] italic text-base max-h-[325px] overflow-hidden text-ellipsis line-clamp-5">
                      {partner.content}
                    </p>
                  </div>
                  <Flex className="mt-[50px] text-black" justify="center" align="center" gap={15}>
                    <div className="mt-[4px] h-[1px] w-[50px] bg-black line group-hover:bg-white" />
                    <span className="text-base select-none group-hover:text-white">Xem thêm</span>
                    <div className="mt-[4px] h-[1px] w-[50px] bg-black line group-hover:bg-white" />
                  </Flex>
                </div>
              </Flex>
            </Col>
          ))}
        </Row>
      </div>
    </Flex>
  );
};

export default Partner;
