import { Flex } from 'antd';
import HorizontalGreen from 'images/horizontal-intro.svg?react';
import HorizontalWhite from 'images/horizontal-white.svg?react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
interface ISectionTitleProps {
  title: string;
  isWhite?: boolean;
  className?: string;
}

const SectionTitle = (props: ISectionTitleProps) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Flex justify="center" align="center" gap={25} className={`mb-[60px] ${props.className}`}>
      <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" data-aos-anchor-placement="top-bottom">
        {props.isWhite ? <HorizontalWhite className="mt-[5px]" /> : <HorizontalGreen className="mt-[5px]" />}
      </div>
      <div data-aos="fade-up" data-aos-duration="500" data-aos-once="true" data-aos-anchor-placement="top-bottom">
        <span className={`text-[40px] font-bold ${props.isWhite && 'text-white'}`}>{props.title}</span>
      </div>
      <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-anchor-placement="top-bottom">
        {props.isWhite ? <HorizontalWhite className="mt-[5px]" /> : <HorizontalGreen className="mt-[5px]" />}
      </div>
    </Flex>
  );
};

export default SectionTitle;
