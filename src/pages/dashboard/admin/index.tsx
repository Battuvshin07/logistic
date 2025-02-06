import { ProColumns, ProTable } from "@ant-design/pro-components";
import { DatePicker } from "antd";
import Search from "antd/lib/input/Search";

const SAMPLE_TABLE = Array(100).fill({
  name: "Баатар Цогт",
  role: "Тээврийн менежер",
  registrationNumber: "УО12345678",
  age: 21,
  gender: "Эр",
  phoneNumber: "12345678",
  email: "baatar.tsogt@mail.com",
  registeredDate: "2023/03/13",
  registeredEmployee: "Админ",
});
const SAMPLE_COLUMN: ProColumns<(typeof SAMPLE_TABLE)[0]>[] = [
  {
    title: "Нэр",
    dataIndex: "name",
  },
  {
    title: "Үүрэг",
    dataIndex: "role",
  },
  {
    title: "Регистрийн дугаар",
    dataIndex: "registrationNumber",
  },
  {
    title: "Нас",
    dataIndex: "age",
  },
  {
    title: "Хүйс",
    dataIndex: "gender",
  },
  {
    title: "Утасны дугаар",
    dataIndex: "phoneNumber",
  },
  {
    title: "И-мэйл",
    dataIndex: "email",
  },
  {
    title: "Бүртгэсэн огноо",
    dataIndex: "registeredDate",
  },
  {
    title: "Бүртгэсэн ажилтан",
    dataIndex: "registeredEmployee",
  },
];

export default function AdminPage() {
  return (
    <ProTable
      rowKey="email"
      dataSource={SAMPLE_TABLE}
      columns={SAMPLE_COLUMN}
      search={false}
      options={false}
      headerTitle={
        <div className="flex gap-8 items-center">
          <p>Нийт: {SAMPLE_TABLE.length}</p>
          <DatePicker.RangePicker />
        </div>
      }
      toolBarRender={() => [
        <div className="flex gap-8">
          <Search placeholder="Хайх" />
        </div>,
      ]}
    />
  );
}
