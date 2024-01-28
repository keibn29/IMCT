import { Flex, Typography, Image, Row, Col } from 'antd';
import Title from 'app/components/Title';
import ProductImage from '../../../images/Recruitment1.png';
import ProductImage2 from '../../../images/Recruitment2.png';
import ProductImage3 from '../../../images/Recruitment3.png';
import ArrowRight from 'images/arrow-right-blue.svg?react';
import PaginationCustom from 'app/components/PaginationCustom';
import { useNavigate } from 'react-router-dom';
const { Text, Link } = Typography;
interface ICarousel {
  id: number;
  imageUrl: string;
  title: string;
  content: string;
}
const listCarousel: ICarousel[] = [
  {
    id: 1,
    imageUrl: ProductImage,
    title: 'TIN TỨC 1',
    content:
      'Tận tâm để mang lại cho khách hàng sản phẩm và dịch vụ vượt trên sự mong đợi là tôn chỉ của công ty TNHH ĐÀO TẠO TƯ VẤN VỀ QUẢN LÝ VÀ ĐẦU TƯ. Qua hơn 20 năm thành lập và hoạt động, công ty đang tiếp tục mở rộng hoạt động ....',
  },
  {
    id: 2,
    imageUrl: ProductImage2,
    title: 'TIN TỨC 2',
    content:
      'Tận tâm để mang lại cho khách hàng sản phẩm và dịch vụ vượt trên sự mong đợi là tôn chỉ của công ty TNHH ĐÀO TẠO TƯ VẤN VỀ QUẢN LÝ VÀ ĐẦU TƯ. Qua hơn 20 năm thành lập và hoạt động, công ty đang tiếp tục mở rộng hoạt động ....',
  },
  {
    id: 3,
    imageUrl: ProductImage3,
    title: 'TIN TỨC 3',
    content:
      'Tận tâm để mang lại cho khách hàng sản phẩm và dịch vụ vượt trên sự mong đợi là tôn chỉ của công ty TNHH ĐÀO TẠO TƯ VẤN VỀ QUẢN LÝ VÀ ĐẦU TƯ. Qua hơn 20 năm thành lập và hoạt động, công ty đang tiếp tục mở rộng hoạt động ....',
  },
  {
    id: 4,
    imageUrl: ProductImage2,
    title: 'TIN TỨC 4',
    content:
      'Tận tâm để mang lại cho khách hàng sản phẩm và dịch vụ vượt trên sự mong đợi là tôn chỉ của công ty TNHH ĐÀO TẠO TƯ VẤN VỀ QUẢN LÝ VÀ ĐẦU TƯ. Qua hơn 20 năm thành lập và hoạt động, công ty đang tiếp tục mở rộng hoạt động ....',
  },
  {
    id: 5,
    imageUrl: ProductImage,
    title: 'TIN TỨC 5',
    content:
      'Tận tâm để mang lại cho khách hàng sản phẩm và dịch vụ vượt trên sự mong đợi là tôn chỉ của công ty TNHH ĐÀO TẠO TƯ VẤN VỀ QUẢN LÝ VÀ ĐẦU TƯ. Qua hơn 20 năm thành lập và hoạt động, công ty đang tiếp tục mở rộng hoạt động ....',
  },
  {
    id: 6,
    imageUrl: ProductImage2,
    title: 'TIN TỨC 6',
    content:
      'Tận tâm để mang lại cho khách hàng sản phẩm và dịch vụ vượt trên sự mong đợi là tôn chỉ của công ty TNHH ĐÀO TẠO TƯ VẤN VỀ QUẢN LÝ VÀ ĐẦU TƯ. Qua hơn 20 năm thành lập và hoạt động, công ty đang tiếp tục mở rộng hoạt động ....',
  },
];
const News = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex className="py-[80px] heading-container background-image news-bg" justify="center">
        <div className="container">
          <Title className="z-[2] relative" title="Tin Tức" isWhite={true} title2="Trang chủ/Tin tức" />
        </div>
      </Flex>
      <Flex className="bg-light-gray py-[80px]" justify="center">
        <div className="container">
          <Row gutter={[48, 48]}>
            {listCarousel.map((carousel: ICarousel) => (
              <Col key={carousel.id} span={12}>
                <Flex vertical className="h-[100%]">
                  <Image width="100%" height={300} src={carousel.imageUrl} preview={false} />
                  <div className="text-2xl text-[#215E74] font-bold mt-[10px]">
                    <span>{carousel.title}</span>
                  </div>
                  <div className="text-[#969696] text-xs font-normal font-['Inter'] mt-[10px]">January 17, 2024</div>
                  <p className="text-justify mt-[15px] line-clamp-3 mt-[10px]">{carousel.content}</p>
                  <Flex
                    className="mt-[50px] text-[#215E74] border-2 border-[#215E74] w-[124px] h-7 button-continue"
                    justify="center"
                    align="center"
                    gap={3}
                    onClick={() => navigate('/newsdetail')}
                  >
                    <span className="font-bold cursor-pointer select-none">Xem thêm</span>
                    <ArrowRight className="mt-[4px] arrow-icon" />
                  </Flex>
                </Flex>
              </Col>
            ))}
          </Row>
          <Row>
            <PaginationCustom />
          </Row>
        </div>
      </Flex>
    </>
  );
};

export default News;
