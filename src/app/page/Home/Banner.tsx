import { DefaultCarousel } from 'app/components/Carousel';

const Banner = () => {
  return (
    <DefaultCarousel>
      <div className="background-image banner w-[100vw] h-[800px]" />
      <div className="background-image banner1 w-[100vw] h-[800px]" />
    </DefaultCarousel>
  );
};

export default Banner;
