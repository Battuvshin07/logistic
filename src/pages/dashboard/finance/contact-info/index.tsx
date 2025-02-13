import CustomerCompanyTable from "./customer-company";
import Tabs from "@/components/table/tabs";

const TAB_ITEMS = [
  {
    label: "Харилцагч компани",
    value: "customer-company",
    children: <CustomerCompanyTable />,
  },
  {
    label: "Нэмэлт хураамж тохиргоо",
    value: "additional-fee-config",
  },
  {
    label: "Харилцагчдын дансны тохиргоо",
    value: "customer-account-config",
  },
  {
    label: "Э/Х тасалбар хүчингүй болгох",
    value: "ticket-cancel",
  },
];

export default function ContactInfoPage() {
  return <Tabs tabs={TAB_ITEMS} />;
}
