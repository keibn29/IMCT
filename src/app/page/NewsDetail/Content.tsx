import { Flex, Image, Row, Col } from 'antd';
import Title from 'app/components/Title';
import NewsDetailImg from '../../../images/news_detail.png';
import NewsDetailImg1 from '../../../images/news_detail1.png';
import NewsDetailImg2 from '../../../images/news_detail2.png';
import NewsDetailImg3 from '../../../images/news_detail3.png';
import NewsDetailImg4 from '../../../images/news_detail4.png';
import NewsDetailImg5 from '../../../images/news_detail5.png';

const NewsDetail = () => (
  <>
    <Flex className="py-[80px] heading-container background-image news-bg" justify="center">
      <div className="container">
        <Title className="z-[2] relative" title="Tin Tức 2" isWhite={true} title2="Trang chủ/Tin tức" />
      </div>
    </Flex>
    <Flex className="bg-light-gray py-[80px] " justify="center">
      <div className="container">
        <Flex vertical>
          <Image width="100%" height={480} src={NewsDetailImg} preview={false} />
          <div className="w-full pt-[56px] pb-[30px]">
            <span className="text-black text-sm font-normal font-['Inter']">
              orem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi
              facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet interdum felis
              nibh a leo. Donec efficitur velit ac nisi rutrum, eu ornare augue tristique. Vivamus accumsan nisl id
              massa finibus aliquet. Pellentesque blandit ut urna dignissim pulvinar. Aliquam in ultrices ante. Nam
              condimentum eleifend consectetur. Fusce quam nunc, bibendum eget venenatis a, volutpat at ligula. Ut
              interdum elit vel ante tincidunt mattis. Aenean dignissim vulputate justo, sed tincidunt sapien laoreet a.
              Fusce vehicula, turpis sed hendrerit gravida, ante justo accumsan nisi, non congue metus risus a lorem.
              <br />
              Quisque eleifend velit id metus ullamcorper tristique. Integer vel commodo ex. Pellentesque sed ultrices
              tellus. Integer lobortis et lorem vitae ullamcorper Tempus interdum ligula proin aptent ornare eu Pede,
              dignissim lacinia odio arcu augue platea habitant nibh lectus. Platea nostra. Aliquam posuere fringilla
              aptent quisque consectetuer. Bibendum et amet. Nisl. Luctus. Eros malesuada facilisis
              <br />
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet
              a, venenatis vitae, justo.
            </span>
            <span className="text-black text-sm font-normal font-['Inter']">Nullam dictum</span>
            <span className="text-black text-sm font-normal font-['Inter']">
              felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
              vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            </span>
          </div>
          <Row gutter={30}>
            <Col className="gutter-row" span={8}>
              <Image className="aspect-square" width="100%" src={NewsDetailImg1} preview={false} />
            </Col>
            <Col className="gutter-row" span={8}>
              <Image className="aspect-square" width="100%" src={NewsDetailImg2} preview={false} />
            </Col>
            <Col className="gutter-row" span={8}>
              <Image className="aspect-square" width="100%" src={NewsDetailImg3} preview={false} />
            </Col>
          </Row>
          <div className="w-full py-[60px]">
            <span className="text-black text-sm font-normal font-['Inter']">
              orem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi
              facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet interdum felis
              nibh a leo. Donec efficitur velit ac nisi rutrum, eu ornare augue tristique. Vivamus accumsan nisl id
              massa finibus aliquet. Pellentesque blandit ut urna dignissim pulvinar. Aliquam in ultrices ante. Nam
              condimentum eleifend consectetur. Fusce quam nunc, bibendum eget venenatis a, volutpat at ligula. Ut
              interdum elit vel ante tincidunt mattis. Aenean dignissim vulputate justo, sed tincidunt sapien laoreet a.
              Fusce vehicula, turpis sed hendrerit gravida, ante justo accumsan nisi, non congue metus risus a lorem.
              <br />
              Quisque eleifend velit id metus ullamcorper tristique. Integer vel commodo ex. Pellentesque sed ultrices
              tellus. Integer lobortis et lorem vitae ullamcorper Tempus interdum ligula proin aptent ornare eu Pede,
              dignissim lacinia odio arcu augue platea habitant nibh lectus. Platea nostra. Aliquam posuere fringilla
              aptent quisque consectetuer. Bibendum et amet. Nisl. Luctus. Eros malesuada facilisis
              <br />
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet
              a, venenatis vitae, justo.
            </span>
            <span className="text-black text-sm font-normal font-['Inter']">Nullam dictum</span>
            <span className="text-black text-sm font-normal font-['Inter']">
              felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
              vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            </span>
          </div>
          <hr className="w-full" />
          <Row justify="space-between" className="pt-[66px] pb-[40px]">
            <Col span={5}>
              <Flex align="center">
                <Image className="aspect-square" width={115} src={NewsDetailImg4} preview={false} />
                <Col className="pl-[30px]">
                  <div className="text-[#77C373] text-base font-semibold font-['Inter']">Tin sau</div>
                  <div className="text-[#215E74] text-xl font-bold font-['Inter']">Tin tức 3</div>
                </Col>
              </Flex>
            </Col>
            <Col span={5}>
              <Flex align="center" justify="end">
                <Col className="pr-[30px]">
                  <div className="text-[#77C373] text-base font-semibold font-['Inter']">Tin trước</div>
                  <div className="text-[#215E74] text-xl font-bold font-['Inter']">Tin tức 1</div>
                </Col>
                <Image className="aspect-square" width={115} src={NewsDetailImg5} preview={false} />
              </Flex>
            </Col>
          </Row>
        </Flex>
      </div>
    </Flex>
  </>
);

export default NewsDetail;
