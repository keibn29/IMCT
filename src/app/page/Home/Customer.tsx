import { Col, Flex, Image, Row } from 'antd';
import { DefaultCarousel } from 'app/components/Carousel';
import SectionTitle from 'app/components/SectionTitle';
import CustomerImage from 'images/customer.png';
import SecondCustomer from 'images/customer2.png';

interface IImageCustomer {
  id: number;
  imageUrl: string;
}

const listImageCustomer: IImageCustomer[] = [
  { id: 1, imageUrl: CustomerImage },
  { id: 2, imageUrl: SecondCustomer },
  { id: 3, imageUrl: CustomerImage },
  { id: 4, imageUrl: SecondCustomer },
  { id: 5, imageUrl: CustomerImage },
  { id: 6, imageUrl: SecondCustomer },
];

const Customer = () => {
  return (
    <Flex className="bg-white pt-[50px] pb-[70px]" justify="center">
      <div className="container px-[100px]">
        <SectionTitle title="Đối Tác Của Chúng Tôi" />
        <DefaultCarousel dots={false} slidesToShow={4}>
          {listImageCustomer.map((img: IImageCustomer) => (
            <div key={img.id} className="px-[10px]">
              <Flex className="bg-light-gray px-[35px] py-[25px]">
                <Image width="100%" height={150} src={img.imageUrl} preview={false} />
              </Flex>
            </div>
          ))}
        </DefaultCarousel>
      </div>
    </Flex>
  );
};

export default Customer;
