import Banner from 'app/page/Home/Banner';
import Introduction from './Introduction';
import Service from './Service';
import Product from './Product';
import Partner from './Partner';
import Customer from './Customer';
import MyTeam from './MyTeam';
import MapComponent from './map';

const Home = () => {
  return (
    <>
      <Banner />
      <Introduction />
      <Service />
      <Product />
      <Partner />
      <Customer />
      <MyTeam />
      <MapComponent />
    </>
  );
};

export default Home;
