import { admin, enums } from "@/api";
import Table, { FormProp } from "@/components/table";
import {
  ProColumnType,
  ProFormDatePicker,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
} from "@ant-design/pro-components";
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

function formText(name: string, label?: string, rules: any[] = []) {
  return (value: string | null) => (
    <ProFormText
      name={name}
      label={label}
      initialValue={value}
      placeholder={label}
      rules={[{ required: true, message: "Заавал бөглөнө үү" }, ...rules]}
    />
  );
}
function formSelect(
  name: string,
  options: { value: any; label: string }[],
  fieldProps: any,
  label: string,
  rules: any[] = []
) {
  return (value: any) => (
    <ProFormSelect
      name={name}
      label={label}
      options={options}
      fieldProps={fieldProps}
      placeholder={label}
      initialValue={value}
      rules={[{ required: true, message: "Заавал сонгоно уу" }, ...rules]}
    />
  );
}
const FORM_ELEMENTS: FormProp<Awaited<ReturnType<typeof admin.tables>>[0]> = {
  email: formText("email", "И-мэйл", [{ type: "email" }]),
  role: formSelect(
    "role",
    Object.entries(ROLE_TAG_PROPS).map(([value, { text }]) => ({
      label: text,
      value,
    })),
    {
      optionItemRender: (item: any) => (
        <Tag color={ROLE_TAG_PROPS[item.value].color}>{item.label}</Tag>
      ),
    },
    "Үүрэг"
  ),
  name: formText("name", "Нэр"),
  surname: formText("surname", "Овог"),
  phoneNumber: formText("phoneNumber", "Утасны дугаар"),
  isMale: formSelect(
    "isMale",
    [
      { value: true, label: "Эр" },
      { value: false, label: "Эм" },
    ],
    {},
    "Хүйс"
  ),
  age: (value) => (
    <ProFormDigit
      name="age"
      placeholder="Нас"
      initialValue={value}
      rules={[{ required: true, message: "Заавар бөглөнө үү" }]}
    />
  ),
  registeredBy: formSelect(
    "registeredBy",
    Object.entries(REGISTER_BY_PROPS).map(([value, text]) => ({
      value,
      label: text,
    })),
    {},
    "Бүртгэсэн ажилтан"
  ),
  registeredDate: (value) => (
    <ProFormDatePicker
      name="registeredDate"
      label="Бүртгэсэн огноо"
      initialValue={value}
      rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
    ></ProFormDatePicker>
  ),
};
export default function AdminPage() {
  const { data, loading, refresh } = useRequest(admin.tables);

  return (
    <Table
      data={data}
      columns={COLUMNS}
      loading={loading}
      formElements={FORM_ELEMENTS}
      onReload={refresh}
    />
  );
}
