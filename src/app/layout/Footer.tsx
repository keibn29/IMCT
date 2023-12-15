import { Flex } from 'antd';
import MapComponent from './map';
import address from 'images/Group 202.png';
import { Image } from 'antd';
const FooterComponent = () => (
  <Flex vertical>
    <Flex style={{ backgroundColor: '#77C373' }} justify="center" align="center">
      <MapComponent></MapComponent>
      <div className="w-3/6 pl-6">
        <Image width={200} height={200} src={address} />
      </div>
    </Flex>
  </Flex>
);

export default FooterComponent;
