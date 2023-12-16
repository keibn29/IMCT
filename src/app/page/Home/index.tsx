import Banner from 'app/page/Home/Banner';
import Introduction from './Introduction';
import Service from './Service';

const Home = () => {
  return (
    <>
      <Banner />
      <div className="mb-[500px]">
        <Introduction />
        <Service />
      </div>
    </>
  );
};

export default Home;
