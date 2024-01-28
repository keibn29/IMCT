import { Flex } from 'antd';
import HorizontalGreen from 'images/horizontal-intro.svg?react';
import HorizontalWhite from 'images/horizontal-white.svg?react';

interface ISectionTitleProps {
  title: string;
  isWhite?: boolean;
  className?: string;
}

const SectionTitle = (props: ISectionTitleProps) => (
  <Flex justify="center" align="center" gap={25} className={`mb-[60px] ${props.className}`}>
    {props.isWhite ? <HorizontalWhite className="mt-[5px]" /> : <HorizontalGreen className="mt-[5px]" />}
    <span className={`text-[40px] font-bold ${props.isWhite && 'text-white'}`}>{props.title}</span>
    {props.isWhite ? <HorizontalWhite className="mt-[5px]" /> : <HorizontalGreen className="mt-[5px]" />}
  </Flex>
);

export default SectionTitle;
