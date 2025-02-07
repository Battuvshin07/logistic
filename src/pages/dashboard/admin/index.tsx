import { admin, enums } from "@/api";
import Table from "@/components/table";
import { ProColumnType } from "@ant-design/pro-components";
import { useRequest } from "ahooks";
import { Tag } from "antd";

const ROLE_TAG_PROPS: Record<string, { color: string; text: string }> = {
  [enums.RoleColumn.VehicleManager]: {
    color: "blue",
    text: "Тээврийн менежер",
  },
  [enums.RoleColumn.Finance]: { color: "red", text: "Санхүү" },
  [enums.RoleColumn.Cashier]: { color: "orange", text: "Кассир" },
};
const REGISTER_BY_PROPS: Record<string, string> = {
  [enums.RegisteredByColumn.Admin]: "Админ",
};

function stringFieldSorter(field: string) {
  return (a: Record<string, string>, b: Record<string, string>) =>
    String(a[field]).localeCompare(String(b[field]));
}
const COLUMNS: ProColumnType<any>[] = [
  {
    title: "Овог",
    dataIndex: "surname",
    sorter: stringFieldSorter("surname"),
  },
  {
    title: "Нэр",
    dataIndex: "name",
    sorter: stringFieldSorter("name"),
  },
  {
    title: "Үүрэг",
    dataIndex: "role",
    sorter: stringFieldSorter("role"),
    render: (_, { role }) => {
      const props = ROLE_TAG_PROPS[role];
      if (!props) throw new Error(`Role ${role} not found!`);
      return <Tag color={props.color}>{props.text}</Tag>;
    },
  },
  {
    title: "Регистрийн дугаар",
    dataIndex: "registrationNumber",
    sorter: stringFieldSorter("registrationNumber"),
  },
  {
    title: "Нас",
    dataIndex: "age",
    sorter: ({ age: a }, { age: b }) => a - b,
  },
  {
    title: "Хүйс",
    dataIndex: "isMale",
    sorter: stringFieldSorter("isMale"),
    render: (_, { isMale }) => <p>{isMale ? "Эр" : "Эм"}</p>,
  },
  {
    title: "Утасны дугаар",
    dataIndex: "phoneNumber",
    sorter: stringFieldSorter("phoneNumber"),
  },
  {
    title: "И-мэйл",
    dataIndex: "email",
    sorter: stringFieldSorter("email"),
  },
  {
    title: "Бүртгэсэн огноо",
    dataIndex: "registeredDate",
    sorter: stringFieldSorter("registeredDate"),
  },
  {
    title: "Бүртгэсэн ажилтан",
    dataIndex: "registeredBy",
    sorter: stringFieldSorter("registeredBy"),
    render: (_, { registeredBy }) => {
      const text = REGISTER_BY_PROPS[registeredBy];
      if (!text)
        throw new Error(`Registered by ${registeredBy} does not exist`);
      return <p>{text}</p>;
    },
  },
];

export default function AdminPage() {
  const { data, loading } = useRequest(admin.tables);

  return <Table data={data} columns={COLUMNS} loading={loading} />;
}
