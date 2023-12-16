import { Col, Flex, Row, Space } from 'antd';
import HorizontalIntro from 'images/horizontal-intro.svg?react';
import ManagerIcon from 'images/manager.svg?react';
import CapacityIcon from 'images/capacity.svg?react';
import SurveyIcon from 'images/survey.svg?react';
import SocialIcon from 'images/social.svg?react';
import MonitorIcon from 'images/monitor.svg?react';
import ReportIcon from 'images/report.svg?react';
import DeploymentIcon from 'images/deployment.svg?react';
import AnalystIcon from 'images/analyst.svg?react';

interface IService {
  id: number;
  icon: JSX.Element;
  title: string;
  content: string;
}

const listService: IService[] = [
  {
    id: 1,
    icon: <ManagerIcon />,
    title: 'Tư vấn Quản lý dự án đầu tư',
    content:
      'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,',
  },
  {
    id: 2,
    icon: <CapacityIcon />,
    title: 'Tư vấn xây dựng Thể chế và nâng cao năng lực',
    content:
      'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,',
  },
  {
    id: 3,
    icon: <SurveyIcon />,
    title: 'Điều tra, nghiên cứu, khảo sát XHH',
    content:
      'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,',
  },
  {
    id: 4,
    icon: <SocialIcon />,
    title: 'Tư vấn Truyền thông ',
    content:
      'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,',
  },
  {
    id: 5,
    icon: <MonitorIcon />,
    title: 'Giám sát đánh giá dự án',
    content:
      'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,',
  },
  {
    id: 6,
    icon: <ReportIcon />,
    title: 'Lập Báo cáo tiền khả thi/Khả thi dự án đầu tư',
    content:
      'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,',
  },
  {
    id: 7,
    icon: <DeploymentIcon />,
    title: 'Tư vấn thiết kế, triển khai hạ tầng dữ liệu',
    content:
      'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,',
  },
  {
    id: 8,
    icon: <AnalystIcon />,
    title: 'Cập nhật, xử lý và phân tích dữ liệu',
    content:
      'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,',
  },
];

const Service = () => {
  return (
    <div className="container mx-[auto] py-[80px]">
      <Flex justify="center" align="center">
        <HorizontalIntro className="mt-[5px]" />
        <span className="text-[40px] font-bold">Dịch Vụ Của Chúng Tôi</span>
        <HorizontalIntro className="mt-[5px]" />
      </Flex>
      <Row gutter={[20, 20]} className="mt-[50px]">
        {listService.map((service: IService) => (
          <Col key={service.id} span={6}>
            <Flex
              className="service-wrapper group shadow-default h-[100%] px-[30px] py-[30px] text-center hover:bg-primary hover:text-white"
              vertical
              justify="space-between"
              gap={20}
            >
              <Flex vertical align="center" gap={20}>
                <Space className="service-icon">{service.icon}</Space>
                <span className="text-primary text-lg font-bold group-hover:text-white">{service.title}</span>
              </Flex>
              <p className="text-[15px]">{service.content}</p>
            </Flex>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Service;