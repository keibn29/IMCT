import { Flex, Image } from 'antd';
import { DefaultCarousel } from 'app/components/Carousel';
import SectionTitle from 'app/components/SectionTitle';
import AvatarMember from 'images/avatar.png';

interface ITeamMember {
  id: number;
  imageUrl: string;
  degree: string;
  name: string;
  position: string;
}

const members: ITeamMember[] = [
  { id: 1, imageUrl: AvatarMember, degree: 'Thạc sĩ', name: 'Trương Công Hữu', position: 'Giám Đốc' },
  { id: 2, imageUrl: AvatarMember, degree: 'Cử nhân', name: 'Nguyễn Minh Tuấn', position: 'Phó Giám Đốc' },
  { id: 3, imageUrl: AvatarMember, degree: 'Tiến sĩ', name: 'Phạm Đức Thành', position: 'Phó Giám Đốc' },
  { id: 4, imageUrl: AvatarMember, degree: 'Thạc sĩ', name: 'Nguyễn Thị Liên Hương', position: 'Phó Giám Đốc' },
  { id: 5, imageUrl: AvatarMember, degree: 'Cử nhân', name: 'Nguyễn Hoàng Long', position: 'Phó Giám Đốc' },
  { id: 6, imageUrl: AvatarMember, degree: 'Tiến sĩ', name: 'Trương Đình Đạm', position: 'Phó Giám Đốc' },
];

const MyTeam = () => {
  return (
    <Flex className="bg-light-gray pt-[50px] pb-[70px]" justify="center">
      <div className="container px-[100px]">
        <SectionTitle title="Đội Ngũ Của Chúng Tôi" />
        <DefaultCarousel dots={false} slidesToShow={4}>
          {members.map((member: ITeamMember) => (
            <div key={member.id}>
              <Flex className="bg-light-gray px-[35px] py-[25px]" vertical align="center">
                <Flex
                  className="w-[160px] h-[160px] rounded-full border-2 border-solid border-primary"
                  align="center"
                  justify="center"
                >
                  <Image className="rounded-full" width={150} height={150} src={member.imageUrl} preview={false} />
                </Flex>
                <Flex vertical align="center" className="text-primary font-bold text-lg mt-[20px]">
                  <span>{member.degree}</span>
                  <span>{member.name}</span>
                </Flex>
                <span className="text-lg font-bold mt-[10px]">{member.position}</span>
              </Flex>
            </div>
          ))}
        </DefaultCarousel>
      </div>
    </Flex>
  );
};

export default MyTeam;
