import { finance } from "@/api";
import Table from "@/components/table";
import { Switch } from "antd";
import CustomerCompanyForm from "./customer-company-form";

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
  const customerCompanies = finance.contactInfo.customerCompanies;

  return (
    <Table
      columns={COLUMNS}
      onData={customerCompanies.get}
      onDelete={({ id }) => customerCompanies.del(id)}
      onAdd={customerCompanies.post as any}
      onEdit={(value, formValue) =>
        customerCompanies.put({ ...value, ...formValue })
      }
      form={CustomerCompanyForm}
    />
  );
}
