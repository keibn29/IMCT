import { Flex } from 'antd';
import SectionTitle from 'app/components/SectionTitle';

const CommitmentToQuality = () => {
  return (
    <Flex vertical className="py-[80px] commitmentToQuality-container background-image" justify="center" align="center">
      <div className="container px-[100px]">
        <SectionTitle className="z-[2] relative" title="Cam kết về chất lượng" isWhite={false} />
      </div>
      <div className="container z-[2]">
        <p className="text-[#77C373] text-xl font-bold">
          Công ty IMCT áp dụng Hệ thống quản lý chất lượng toàn diện (TQMS)
        </p>
        <br />
        <p className="text-base ">
          Quy trình quản lý chất lượng của công ty được quy định trong Sổ tay hướng dẫn về chất lượng. Đối với từng dự
          án, công tác quản lý được thực hiện theo tiêu chuẩn TCVN 11866:2017 ISO 21500:2012. Nhân viên, chuyên gia/kỹ
          sư và các trợ lý hiện trường khi tham gia dự án đều được đào tạo để thực hiện theo quy trình này.
          <br />
          <br />
          Tập thể cán bộ nhân viên công ty và các chuyên gia/kỹ sư tham gia thực hiện dự án đều thấu hiểu và thực hiện
          cam kết:“Cung cấp dịch vụ và sản phẩm vượt trên sự mong đợi của khách hàng”. Cam kết này đã được thực hiện và
          khẳng định trong suốt quá trình cung cấp sản phẩm/dịch vụ cho khách hàng. Nhờ đó, công ty IMCT có thể duy trì
          và phát triển bền vững trong suốt những năm qua.
        </p>
      </div>
    </Flex>
  );
};

export default CommitmentToQuality;
