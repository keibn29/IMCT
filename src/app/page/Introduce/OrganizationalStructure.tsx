import { Col, Flex, Row, Tooltip, Image } from 'antd';
import { DefaultCarousel } from 'app/components/Carousel';
import SectionTitle from 'app/components/SectionTitle';
import AvatarMember from 'images/avatar.png';
import AvatarMember2 from 'images/avatar2.png';
import AvatarMember3 from 'images/avatar3.png';
import AvatarMember4 from 'images/avatar4.png';
interface ITeamMember {
  id: number;
  imageUrl: string;
  degree: string;
  name: string;
  position: string;
}

const members: ITeamMember[] = [
  { id: 1, imageUrl: AvatarMember, degree: 'Thạc sĩ', name: 'Trương Công Hữu', position: 'Giám Đốc' },
  { id: 2, imageUrl: AvatarMember2, degree: 'Cử nhân', name: 'Nguyễn Minh Tuấn', position: 'Phó Giám Đốc' },
  { id: 3, imageUrl: AvatarMember3, degree: 'Tiến sĩ', name: 'Phạm Đức Thành', position: 'Phó Giám Đốc' },
  { id: 4, imageUrl: AvatarMember4, degree: 'Thạc sĩ', name: 'Nguyễn Thị Liên Hương', position: 'Phó Giám Đốc' },
];
const OrganizationalStructure = () => {
  return (
    <Flex vertical className="py-[80px] bg-white" justify="center" align="center">
      <div className="container px-[100px]">
        <SectionTitle className="z-[2] relative" title="Cơ cấu tổ chức" isWhite={false} />
      </div>
      <div className="container z-[2]">
        <p className="text-black text-xl font-bold">
          Công ty IMCT có đội ngũ gồm các chuyên gia/kỹ sư giỏi đang làm việc tại các bộ phận chuyên môn. Các chuyên
          gia, kỹ sư này được đào tạo chuyên nghiệp từ các trường đại học danh tiếng trong nước và quốc tế, giàu kinh
          nghiệm thực tiễn trong các lĩnh vực.
        </p>
        <br />
        <ul className="list-disc pl-[20px]">
          <li>Nông nghiệp & Phát triển nông thôn;</li>

          <li>Cơ sở hạ tầng; Cấp thoát nước và Môi trường;</li>

          <li>CNTT</li>
          <li>
            Các chuyên ngành: Kinh tế & tài chính; Quản lý dự án, phát triển chính sách và thể chế, truyền thông; Xã hội
            học...Phát triển cộng đồng, đào tạo tăng cường năng lực, an toàn môi trường và xã hội... Hệ thống thông tin.
          </li>
        </ul>
      </div>
      <div className="container text-white flex justify-center mt-[40px]">
        <div className="grid gap-x-8 w-[80%]">
          <Row justify="center" className="w-full">
            <Col className="w-[16%]"></Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
            <Col className="w-[5%]"></Col>
            <Tooltip
              color="#77C373"
              overlayClassName="custom-tooltip"
              title={
                <div className="w-full flex justify-center items-center">
                  <div className="">
                    <p className="text-center text-[40px] font-bold my-[15px]">Hội Đồng Thành Viên/Ban Kiểm Soát</p>
                    <p className="text-sm w-[757px] mb-[15px]">
                      Hội đồng thành viên và ban Kiểm soát của công ty được thành lập theo quy định của pháp luật đối
                      với loại hình công ty TNHH có từ 2 thành viên trở lên.
                      <br />
                      <br />
                      Quyền hạn và trách nhiệm của Hội đồng thành viên được quy định tại Điều lệ công ty.
                    </p>
                  </div>
                </div>
              }
              placement="bottom"
              trigger={['hover']}
              overlayInnerStyle={{
                width: 828,
              }}
              overlayStyle={{
                maxWidth: 'none',
              }}
            >
              <Col className="w-[16%] h-12 rounded-lg bg-[#529949] flex justify-center items-center">
                <span className="font-bold">Hội đồng Thành Viên</span>
              </Col>
            </Tooltip>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
          </Row>
          <Row justify="center" className="w-full">
            <Col className="w-[16%]"></Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%] h-10 relative">
              <div className="vertical-line absolute top-0 bottom-0 left-1/2 border-[1px] border-[#0E0E0E]"></div>
            </Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
          </Row>
          <Row justify="center" className="w-full">
            <Col className="w-[16%]"></Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%] h-12 relative">
              <div className="vertical-line absolute top-0 bottom-0 left-1/2 border-[1px] border-[#0E0E0E]"></div>
              <div className="horizontal-line absolute top-1/2 right-0 border-[1px] border-[#0E0E0E] w-1/2"></div>
            </Col>
            <Col className="w-[5%] h-12 relative">
              <div className="horizontal-line absolute top-1/2 left-0 right-0 border-[1px] border-[#0E0E0E] w-full"></div>
            </Col>
            <Tooltip
              arrow={{ pointAtCenter: true }}
              color="#77C373"
              overlayClassName="custom-tooltip"
              title={
                <div className="w-full flex justify-center items-center">
                  <div className="">
                    <p className="text-center text-[40px] font-bold my-[15px]">Hội Đồng Thành Viên/Ban Kiểm Soát</p>
                    <p className="text-sm w-[757px] mb-[15px]">
                      Hội đồng thành viên và ban Kiểm soát của công ty được thành lập theo quy định của pháp luật đối
                      với loại hình công ty TNHH có từ 2 thành viên trở lên.
                      <br />
                      <br />
                      Quyền hạn và trách nhiệm của Hội đồng thành viên được quy định tại Điều lệ công ty.
                    </p>
                  </div>
                </div>
              }
              placement="bottomRight"
              trigger={['hover']}
              overlayInnerStyle={{
                width: 828,
              }}
              overlayStyle={{
                maxWidth: 620,
              }}
              getPopupContainer={(triggerNode) => triggerNode}
              arrowContent={<div style={{ marginLeft: '-8px' }}></div>}
            >
              <Col className="w-[16%] h-12 bg-[#77C373] rounded-lg flex justify-center items-center">
                <span className="font-bold">Ban kiểm soát</span>
              </Col>
            </Tooltip>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
          </Row>
          <Row justify="center" className="w-full">
            <Col className="w-[16%]"></Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%] h-10 relative">
              <div className="vertical-line absolute top-0 bottom-0 left-1/2 border-[1px] border-[#0E0E0E]"></div>
            </Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
          </Row>
          <Row justify="center" className="w-full">
            <Col className="w-[16%]"></Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
            <Col className="w-[5%]"></Col>
            <Tooltip
              color="#77C373"
              overlayClassName="custom-tooltip"
              title={
                <div className="container flex justify-center items-center">
                  <div className="w-full">
                    <p className="text-center text-[40px] font-bold my-[15px]">Ban Giám Đốc</p>
                    <p className="text-center text-sm mb-[15px] font-bold">
                      Ban Giám đốc công ty hiện tại có các thành viên được bổ nhiệm theo quy định của pháp luật.
                    </p>
                    <DefaultCarousel dots={false} slidesToShow={4} autoplay={false}>
                      {members.map((member: ITeamMember) => (
                        <div key={member.id}>
                          <Flex className="px-[35px] py-[25px]" vertical align="center">
                            <Flex className="myteam-image-wrapper w-[160px] h-[160px] rounded-full border-2 border-solid border-white circle-team">
                              <Image
                                className="rounded-full child"
                                width={150}
                                height={150}
                                src={member.imageUrl}
                                preview={false}
                              />
                            </Flex>
                            <Flex vertical align="center" className="text-white font-bold text-lg mt-[20px]">
                              <span>{member.degree}</span>
                              <span>{member.name}</span>
                            </Flex>
                            <span className="text-white text-lg font-medium mt-[10px]">{member.position}</span>
                          </Flex>
                        </div>
                      ))}
                    </DefaultCarousel>
                  </div>
                </div>
              }
              placement="bottom"
              trigger={['hover']}
              overlayInnerStyle={{
                width: 1280,
              }}
              overlayStyle={{
                maxWidth: 'none',
              }}
              getPopupContainer={(triggerNode) => triggerNode}
              arrowContent={<div style={{ marginLeft: '-8px' }}></div>}
            >
              <Col className="w-[16%] h-12 rounded-lg bg-[#529949] flex justify-center items-center">
                <span className="font-bold">Ban Giám Đốc</span>
              </Col>
            </Tooltip>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
          </Row>
          <Row justify="center" className="w-full">
            <Col className="w-[16%]"></Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%] h-10 relative">
              <div className="vertical-line absolute top-0 bottom-0 left-1/2 border-[1px] border-[#0E0E0E]"></div>
            </Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
          </Row>
          <Row justify="center" className="w-full">
            <Col className="w-[16%]"></Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%] h-12 relative">
              <div className="vertical-line absolute top-0 bottom-0 left-1/2 border-[1px] border-[#0E0E0E]"></div>
              <div className="horizontal-line absolute top-1/2 right-0 border-[1px] border-[#0E0E0E] w-1/2"></div>
            </Col>
            <Col className="w-[5%] h-12 relative">
              <div className="horizontal-line absolute top-1/2 left-0 right-0 border-[1px] border-[#0E0E0E] w-full"></div>
            </Col>
            <Tooltip
              arrow={{ pointAtCenter: true }}
              color="#77C373"
              overlayClassName="custom-tooltip"
              title={
                <div className="w-full flex justify-center items-center">
                  <div className="w-full">
                    <p className="text-center text-[40px] font-bold my-[15px]">Hội Đồng Khoa Học</p>
                    <p className="text-center text-sm mb-[15px] font-bold">
                      Hội đồng khoa học của công ty gồm các nhà khoa học, các giáo sư, tiến sĩ và các chuyên gia đầu
                      ngành trong các lĩnh vực:
                    </p>
                    <Flex className="grid grid-cols-2 text-sm pl-[60px] pb-[50px]">
                      <ul className="list-disc pl-[20px]">
                        <li>Cấp thoát nước.</li>
                        <li>Công nghệ Môi trường (Quản lý môi trường/ĐTM).</li>
                        <li>Xử lý nước thải, rác thải và vận hành hệ thống XLNT.</li>
                        <li>Hạ tầng Nông thôn và hạ tầng Đô thị.</li>
                        <li>Tài chính.</li>
                        <li>Xã hội học.</li>
                        <li>Điều tra/nghiên cứu thị trường.</li>
                        <li>Giới và giảm nghèo.</li>
                        <li>Sinh kế cho người nghèo.</li>
                      </ul>
                      <ul className="list-disc pl-[20px]">
                        <li>Chuỗi giá trị.</li>
                        <li>Giám sát, đánh giá.</li>
                        <li>Đấu thầu và quản lý hợp đồng.</li>
                        <li>Công nghệ thông tin.</li>
                        <li>Thiết kế/tạo lập CSDL lớn trong các ngành/lĩnh vực.</li>
                        <li>Mua bán/định giá và sáp nhập doanh nghiệp.</li>
                        <li>Xây dựng Chiến lược phát triển và Tái cấu trúc.</li>
                        <li>Khảo sát, xây dựng các đề án Quy hoạch phát triển vùng/ngành/ lĩnh vực.</li>
                      </ul>
                    </Flex>
                  </div>
                </div>
              }
              placement="bottomRight"
              trigger={['hover']}
              overlayInnerStyle={{
                width: 1300,
              }}
              overlayStyle={{
                maxWidth: 900,
              }}
              getPopupContainer={(triggerNode) => triggerNode}
              arrowContent={<div style={{ marginLeft: '-8px' }}></div>}
            >
              <Col className="w-[16%] h-12 bg-[#77C373] rounded-lg flex justify-center items-center">
                <span className="font-bold">Hội đồng khoa học</span>
              </Col>
            </Tooltip>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
          </Row>
          <Row justify="center" className="w-full">
            <Col className="w-[16%]"></Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%] h-5 relative">
              <div className="vertical-line absolute top-0 bottom-0 left-1/2 border-[1px] border-[#0E0E0E]"></div>
            </Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
          </Row>
          <Row justify="center" className="w-full">
            <Col className="w-[16%] h-10 relative">
              <div className="vertical-line absolute h-1/2 bottom-0 left-1/2 border-[1px] border-[#0E0E0E]"></div>
              <div className="horizontal-line absolute top-1/2 right-0 border-[1px] border-[#0E0E0E] w-1/2"></div>
            </Col>
            <Col className="w-[5%] h-10 relative">
              <div className="horizontal-line absolute top-1/2 left-0 right-0 border-[1px] border-[#0E0E0E] w-full"></div>
            </Col>
            <Col className="w-[16%] h-10 relative">
              <div className="vertical-line absolute h-1/2 bottom-0 left-1/2 border-[1px] border-[#0E0E0E]"></div>
              <div className="horizontal-line absolute top-1/2 right-0 left-0 border-[1px] border-[#0E0E0E] w-full"></div>
            </Col>
            <Col className="w-[5%] h-10 relative">
              <div className="horizontal-line absolute top-1/2 left-0 right-0 border-[1px] border-[#0E0E0E] w-full"></div>
            </Col>
            <Col className="w-[16%] h-10 relative">
              <div className="vertical-line absolute top-0 bottom-0 left-1/2 border-[1px] border-[#0E0E0E]"></div>
              <div className="horizontal-line absolute top-1/2 right-0 left-0 border-[1px] border-[#0E0E0E] w-full"></div>
            </Col>
            <Col className="w-[5%] h-10 relative">
              <div className="horizontal-line absolute top-1/2 left-0 right-0 border-[1px] border-[#0E0E0E] w-full"></div>
            </Col>
            <Col className="w-[16%] h-10 relative">
              <div className="vertical-line absolute h-1/2 bottom-0 left-1/2 border-[1px] border-[#0E0E0E]"></div>
              <div className="horizontal-line absolute top-1/2 right-0 left-0 border-[1px] border-[#0E0E0E] w-full"></div>
            </Col>
            <Col className="w-[5%] h-10 relative">
              <div className="horizontal-line absolute top-1/2 left-0 right-0 border-[1px] border-[#0E0E0E] w-full"></div>
            </Col>
            <Col className="w-[16%] h-10 relative">
              <div className="vertical-line absolute h-1/2 bottom-0 left-1/2 border-[1px] border-[#0E0E0E]"></div>
              <div className="horizontal-line absolute top-1/2 left-0 border-[1px] border-[#0E0E0E] w-1/2"></div>
            </Col>
          </Row>
          <Row justify="center" className="w-full">
            <Col className="w-[16%] h-12 rounded-lg bg-[#215E74] flex justify-center items-center">
              <span className="font-bold">P. Hành Chính -Quản Trị</span>
            </Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%] h-12 rounded-lg bg-[#215E74] flex justify-center items-center">
              <span className="font-bold text-center">
                Trung Tâm DV Tư Vấn
                <br />
                Dự Án ODA
              </span>
            </Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%] h-12 rounded-lg bg-[#215E74] flex justify-center items-center">
              <span className="font-bold">Trung Tâm CNTT</span>
            </Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%] h-12 rounded-lg bg-[#215E74] flex justify-center items-center">
              <span className="font-bold">Trung Tâm DV Tư Vấn DN</span>
            </Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%] h-12 rounded-lg bg-[#215E74] flex justify-center items-center">
              <span className="font-bold">Văn Phòng TP. HCM</span>
            </Col>
            <Col className="w-[5%]"></Col>
          </Row>
          <Row justify="center" className="w-full">
            <Col className="w-[16%] h-5 relative">
              <div className="vertical-line absolute top-0 bottom-0 left-1/2 border-[1px] border-[#0E0E0E]"></div>
            </Col>
            <Col className="w-[5%] h-5 relative"></Col>
            <Col className="w-[16%] h-5 relative">
              <div className="vertical-line absolute top-0 bottom-0 left-1/2 border-[1px] border-[#0E0E0E]"></div>
            </Col>
            <Col className="w-[5%] h-5 relative"></Col>
            <Col className="w-[16%] h-5 relative">
              <div className="vertical-line absolute top-0 bottom-0 left-1/2 border-[1px] border-[#0E0E0E]"></div>
            </Col>
            <Col className="w-[5%] h-5 relative"></Col>
            <Col className="w-[16%] h-5 relative">
              <div className="vertical-line absolute top-0 bottom-0 left-1/2 border-[1px] border-[#0E0E0E]"></div>
            </Col>
            <Col className="w-[5%] h-5 relative"></Col>
            <Col className="w-[16%] h-5 relative"></Col>
          </Row>
          <Row justify="center" className="w-full">
            <Col className="w-[16%] h-15 rounded-lg bg-[#52A9C9] flex justify-center items-center">
              <span className="font-semibold text-center">Bộ Phận Nhân Sự</span>
            </Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%] h-15 rounded-lg bg-[#52A9C9] flex justify-center items-center">
              <span className="text-center text-xs font-semibold">
                Phòng DV Tư Vấn Cấp Thoát <br /> Nước, <br /> Môi Trường & CSHT Đô Thị / Nông Thôn
              </span>
            </Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%] h-15 rounded-lg bg-[#52A9C9] flex justify-center items-center">
              <span className="font-semibold text-center">Phòng Tư Vấn Giải Pháp Và Ứng Dụng CNTT</span>
            </Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%] h-15 rounded-lg bg-[#52A9C9] flex justify-center items-center">
              <span className="font-semibold text-center">Phòng Các Dịch Vụ Đảm Bảo</span>
            </Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
          </Row>
          <Row justify="center" className="w-full">
            <Col className="w-[16%] h-5 relative">
              <div className="vertical-line absolute top-0 bottom-0 left-1/2 border-[1px] border-[#0E0E0E]"></div>
            </Col>
            <Col className="w-[5%] h-5 relative"></Col>
            <Col className="w-[16%] h-5 relative">
              <div className="vertical-line absolute top-0 bottom-0 left-1/2 border-[1px] border-[#0E0E0E]"></div>
            </Col>
            <Col className="w-[5%] h-5 relative"></Col>
            <Col className="w-[16%] h-5 relative">
              <div className="vertical-line absolute top-0 bottom-0 left-1/2 border-[1px] border-[#0E0E0E]"></div>
            </Col>
            <Col className="w-[5%] h-5 relative"></Col>
            <Col className="w-[16%] h-5 relative">
              <div className="vertical-line absolute top-0 bottom-0 left-1/2 border-[1px] border-[#0E0E0E]"></div>
            </Col>
            <Col className="w-[5%] h-5 relative"></Col>
            <Col className="w-[16%] h-5 relative"></Col>
          </Row>
          <Row justify="center" className="w-full">
            <Col className="w-[16%] h-15 rounded-lg bg-[#52A9C9] flex justify-center items-center">
              <span className="font-semibold">Bộ Phận Kế Toán</span>
            </Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%] h-15 rounded-lg bg-[#52A9C9] flex justify-center items-center">
              <span className="font-semibold text-center">
                Phòng Dịch Vụ Tư Vấn Phát
                <br /> Triển Nông Nghiệp, Nông <br />
                Thôn
              </span>
            </Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%] h-15 rounded-lg bg-[#52A9C9] flex justify-center items-center">
              <span className="font-semibold text-center">
                Phòng ERP Và Dịch Vụ Giá
                <br /> Trị Gia Tăng
              </span>
            </Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%] h-15 rounded-lg bg-[#52A9C9] flex justify-center items-center">
              <span className="font-semibold text-center">
                Phòng Hỗ Trợ Phát Triển <br />
                Doanh Nghiệp
              </span>
            </Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
          </Row>
          <Row justify="center" className="w-full">
            <Col className="w-[16%] h-5 relative">
              <div className="vertical-line absolute top-0 bottom-0 left-1/2 border-[1px] border-[#0E0E0E]"></div>
            </Col>
            <Col className="w-[5%] h-5 relative"></Col>
            <Col className="w-[16%] h-5 relative">
              <div className="vertical-line absolute top-0 bottom-0 left-1/2 border-[1px] border-[#0E0E0E]"></div>
            </Col>
            <Col className="w-[5%] h-5 relative"></Col>
            <Col className="w-[16%] h-5 relative">
              <div className="vertical-line absolute top-0 bottom-0 left-1/2 border-[1px] border-[#0E0E0E]"></div>
            </Col>
            <Col className="w-[5%] h-5 relative"></Col>
            <Col className="w-[16%] h-5 relative"></Col>
            <Col className="w-[5%] h-5 relative"></Col>
            <Col className="w-[16%] h-5 relative"></Col>
          </Row>
          <Row justify="center" className="w-full">
            <Col className="w-[16%] h-15 rounded-lg bg-[#52A9C9] flex justify-center items-center">
              <span className="font-semibold">Bộ Phận Điều Phối Dự Án</span>
            </Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%] h-15 rounded-lg bg-[#52A9C9] flex justify-center items-center">
              <span className="font-semibold text-center">
                Bộ Phận Nghiên Cứu & Tư <br />
                Vấn Về Ứng Phó Và Biến Đổi
                <br /> Khí Hậu
              </span>
            </Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%] h-15 rounded-lg bg-[#52A9C9] flex justify-center items-center">
              <span className="font-semibold text-center">
                Phòng Dịch Vụ CSDL Và <br /> Chuyển Đổi Số
              </span>
            </Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
            <Col className="w-[5%]"></Col>
            <Col className="w-[16%]"></Col>
          </Row>
        </div>
      </div>
    </Flex>
  );
};

export default OrganizationalStructure;
