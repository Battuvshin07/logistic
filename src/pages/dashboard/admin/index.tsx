import Table from "@/components/table";

const SAMPLE_TABLE = Array(100)
  .fill(0)
  .map((_, index) => ({
    id: index + 1,
    name: "Баатар Цогт",
    role: "Тээврийн менежер",
    registrationNumber: "УО12345678",
    age: 21,
    gender: "Эр",
    phoneNumber: "12345678",
    email: "baatar.tsogt@mail.com",
    registeredDate: "2023/03/13",
    registeredEmployee: "Админ",
  }));
const SAMPLE_COLUMN = [
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
  return <Table data={SAMPLE_TABLE} columns={SAMPLE_COLUMN} />;
}
