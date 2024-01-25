import { Flex } from 'antd';

interface ISectionTitleProps {
  title: string;
  isWhite?: boolean;
  className?: string;
  title2: string;
}

const Title = (props: ISectionTitleProps) => (
  <Flex gap={25} className={`${props.className} justify-between`}>
    <p className={`text-[60px] font-bold ${props.isWhite && 'text-white'}`}>{props.title}</p>
    <div className="relative h-[90px] w-1/2">
      <p className={`text-[26px] absolute bottom-[10px] right-0 ${props.isWhite && 'text-white'}`}>{props.title2}</p>
    </div>
  </Flex>
);

export default Title;
