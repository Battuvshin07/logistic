import { finance } from "@/api";
import Table from "@/components/table";
import { Switch } from "antd";
import CustomerCompanyForm from "./form";
import { useUser } from "@/providers/user";
import { PageLoading } from "@ant-design/pro-components";
import Title from "antd/es/typography/Title";

const COLUMNS = [
  {
    title: "Товчлол",
    dataIndex: "abbreviation",
    key: "abbreviation",
  },
  {
    title: "Компаний нэр",
    dataIndex: "companyName",
    key: "companyName",
  },
  {
    title: "Зууч эсэх",
    dataIndex: "isBroker",
    key: "isBroker",
    render: (_: any, record: any) => (
      <Switch checked={record.isBroker} disabled />
    ),
  },
  {
    title: "Данс",
    dataIndex: "account",
    key: "account",
  },
  {
    title: "Харилцах дугаар",
    dataIndex: "contactNumber",
    key: "contactNumber",
  },
];

export default function CustomerCompanyTable() {
  const { loading, user } = useUser();

  if (loading) return <PageLoading />;
  if (!user) return <Title>Нэвтрэх боломжгүй</Title>;

  const customerCompanies = finance.contactInfo.customerCompanies;

  return (
    <Table
      columns={COLUMNS}
      onData={() => customerCompanies.get(user.token)}
      onDelete={({ id }) => customerCompanies.del(user.token, id)}
      onAdd={(value) => customerCompanies.post(user.token, value as any)}
      onEdit={(value, formValue) =>
        customerCompanies.put(user.token, { ...value, ...formValue })
      }
      form={CustomerCompanyForm}
    />
  );
}
