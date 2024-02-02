import { DefaultCarousel } from 'app/components/Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="3000" data-aos-once="true">
      <DefaultCarousel>
        <div className="background-image banner w-[100vw] h-[100vh]" />
        <div className="background-image banner1 w-[100vw] h-[100vh]" />
      </DefaultCarousel>
    </div>
  );
};

export default Banner;
