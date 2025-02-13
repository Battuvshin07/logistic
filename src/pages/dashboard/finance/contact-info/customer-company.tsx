import Table from "@/components/table";
import { Switch } from "antd";

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
  return <Table columns={COLUMNS} />;
}
