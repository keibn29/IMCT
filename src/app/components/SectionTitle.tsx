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
      <div data-aos="fade-left" data-aos-duration="3000" data-aos-once="true">
        {props.isWhite ? <HorizontalWhite className="mt-[5px]" /> : <HorizontalGreen className="mt-[5px]" />}
      </div>
      <span className={`text-[40px] font-bold ${props.isWhite && 'text-white'}`}>{props.title}</span>
      <div data-aos="fade-right" data-aos-duration="3000" data-aos-once="true">
        {props.isWhite ? <HorizontalWhite className="mt-[5px]" /> : <HorizontalGreen className="mt-[5px]" />}
      </div>
    </Flex>
  );
};

export default SectionTitle;
