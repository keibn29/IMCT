import CommitmentToQuality from './CommitmentToQuality';
import CoreValues from './CoreValues';
import OrganizationalStructure from './OrganizationalStructure';

import Standard from './Standard';
import Overview from './Overview';
import Capacity from './Capacity';
import Infrastructure from './Infrastructure';

const HomeIntroduction = () => {
  return (
    <>
      <Overview />
      <CoreValues />
      <Standard />
      <CommitmentToQuality />
      <OrganizationalStructure />
      <Capacity />
      <Infrastructure />
    </>
  );
};

export default HomeIntroduction;
