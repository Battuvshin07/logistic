import { ProColumns, ProTable } from "@ant-design/pro-components";
import { DatePicker } from "antd";
import Search from "antd/lib/input/Search";

const SAMPLE_TABLE = [
  {
    name: "Baatar tsogt",
    role: "Teevriin meneger",
    registrationNumber: "UO12345678",
    age: 21,
    gender: "Er",
    phoneNumber: "12345678",
    email: "baatar.tsogt@mail.com",
    registeredDate: "2023/03/13",
    registeredEmployee: "Admin",
  },
];
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
      toolBarRender={() => [
        <div className="w-full flex justify-between">
          <div className="flex gap-8 items-center">
            <p>Нийт: {SAMPLE_TABLE.length}</p>
            <DatePicker.RangePicker />
          </div>
          <div className="flex gap-8">
            <Search placeholder="Хайх" />
          </div>
        </div>,
      ]}
    />
  );
}
