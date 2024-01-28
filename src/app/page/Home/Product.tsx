import { Col, Flex, Image, Row } from 'antd';
import SectionTitle from 'app/components/SectionTitle';
import ProductImage from '../../../images/product.png';
import ProductImage2 from '../../../images/product2.png';
import ProductImage3 from '../../../images/product3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
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
    title: 'Giải pháp cơ sở dữ liệu số',
    content:
      'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat aAenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.',
  },
  {
    id: 2,
    imageUrl: ProductImage2,
    title: 'Giải pháp chuyển đổi số',
    content:
      'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a',
  },
  {
    id: 3,
    imageUrl: ProductImage3,
    title: 'Hệ thống thông tin quản lý',
    content:
      'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a',
  },
];

const Product = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="3000">
      <Flex className="bg-light-gray py-[80px]" justify="center">
        <div className="container">
          <SectionTitle title="Sản Phẩm & Giải Pháp" />
          <Row gutter={30}>
            {listCarousel.map((carousel: ICarousel) => (
              <Col key={carousel.id} span={8}>
                <Flex vertical className="h-[100%]">
                  <Image width="100%" height={300} src={carousel.imageUrl} preview={false} />
                  <div className="text-2xl text-primary font-bold mt-[10px]">
                    <span>{carousel.title}</span>
                  </div>
                  <p className="text-justify mt-[15px]">{carousel.content}</p>
                </Flex>
              </Col>
            ))}
          </Row>
        </div>
      </Flex>
    </div>
  );
};

export default Product;
