import { ISelectOption } from 'model';

interface IMenuItem {
  key: number;
  label: string;
  children?: IMenuItem[];
}

export const menuItems: IMenuItem[] = [
  {
    key: 1,
    label: 'Giới Thiệu',
    children: [
      { key: 11, label: 'Giới thiệu chung' },
      { key: 12, label: 'Tiêu chuẩn trong công việc' },
      { key: 13, label: 'Cơ cấu tổ chức' },
    ],
  },
  {
    key: 2,
    label: 'Dịch Vụ',
    children: [
      { key: 21, label: 'Tư vấn Quản lý dự án đầu tư' },
      { key: 22, label: 'Tư vấn xây dựng thể chế và nâng cao năng lực' },
      { key: 23, label: 'Điều tra, nghiên cứu, khảo sát XHH' },
      { key: 24, label: 'Tư vấn Truyền thông ' },
      { key: 25, label: 'Giám sát đánh giá dự án ' },
      { key: 26, label: 'Lập Báo cáo tiền khả thi/Khả thi dự án đầu tư' },
      { key: 27, label: 'Tư vấn thiết kế, triển khai hạ tầng dữ liệu' },
      { key: 28, label: 'Cập nhật, xử lý và phân tích dữ liệu' },
    ],
  },
  {
    key: 3,
    label: 'Sản Phẩm',
    children: [
      {
        key: 31,
        label: 'Giải pháp CSDL số',
        children: [
          { key: 311, label: 'Thiết kế CSDL số chuyên ngành' },
          { key: 312, label: 'Tạo lập và chuyển đổi CSDL số' },
        ],
      },
      { key: 32, label: 'Giải pháp chuyển đổi số' },
      { key: 33, label: 'Hệ thống thông tin quản lý ' },
    ],
  },
  {
    key: 4,
    label: 'Đối Tác',
    children: [
      { key: 41, label: 'Tổ chức/cơ quan Nhà nước' },
      { key: 42, label: 'Doanh nghiệp' },
      { key: 43, label: 'Dự án do WB/ADB tài trợ' },
    ],
  },
  {
    key: 5,
    label: 'Tin Tức',
  },
  {
    key: 6,
    label: 'Tuyển Dụng',
  },
  {
    key: 7,
    label: 'Liên Hệ',
  },
];

export const languageOptions: ISelectOption[] = [
  { value: 'vi', label: 'VI' },
  { value: 'en', label: 'EN' },
];
