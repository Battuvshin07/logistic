import { admin } from "@/api";
import Table from "@/components/table";
import { useRequest } from "ahooks";

const COLUMNS = [
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
  const { data, loading } = useRequest(async () => {
    return await admin.tables();
  });

  return <Table data={data} columns={COLUMNS} loading={loading} />;
}
