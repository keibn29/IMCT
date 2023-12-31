import { Carousel, CarouselProps } from 'antd';
import { ReactNode } from 'react';

interface ICarouselProps extends CarouselProps {
  children: JSX.Element | ReactNode;
}

export const DefaultCarousel = (props: ICarouselProps) => {
  const { children, autoplay = true, dots = true, slidesToShow = 1, ...other } = props;

  return (
    <Carousel className="styled-carousel" autoplay={autoplay} dots={dots} slidesToShow={slidesToShow} {...other}>
      {children}
    </Carousel>
  );
};
