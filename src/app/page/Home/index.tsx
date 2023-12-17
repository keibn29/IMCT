import Banner from 'app/page/Home/Banner';
import Introduction from './Introduction';
import Service from './Service';
import Product from './Product';
import Partner from './Partner';
import Customer from './Customer';
import MyTeam from './MyTeam';

const Home = () => {
  return (
    <>
      <Banner />
      <div className="mb-[500px]">
        <Introduction />
        <Service />
        <Product />
        <Partner />
        <Customer />
        <MyTeam />
      </div>
    </>
  );
};

export default Home;
