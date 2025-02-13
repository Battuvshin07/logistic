import Table from "@/components/table";
import Tabs from "@/components/table/tabs";

const CAPACITY_COLUMNS = [
  {
    title: "Чингэлэг",
    fixed: "left", // Keeps Чингэлэг fixed
    children: [
      {
        title: "Дөхөлт огноо",
        dataIndex: "arrivalDate",
        key: "arrivalDate",
        width: 150,
      },
      {
        title: "Орох жил",
        dataIndex: "entryYear",
        key: "entryYear",
        width: 100,
      },
      {
        title: "Ирэх Явах",
        dataIndex: "arrivalDeparture",
        key: "arrivalDeparture",
        width: 120,
      },
      {
        title: "Чингэлэг дугаар",
        dataIndex: "containerNumber",
        key: "containerNumber",
        width: 150,
      },
      { title: "Даац", dataIndex: "capacity", key: "capacity", width: 100 },
      {
        title: "Зуучийн нэр",
        dataIndex: "brokerName",
        key: "brokerName",
        width: 150,
      },
      {
        title: "Хоосон ачаатай",
        dataIndex: "emptyOrLoaded",
        key: "emptyOrLoaded",
        width: 130,
      },
      { title: "Зарах эсэх", dataIndex: "forSale", key: "forSale", width: 100 },
      {
        title: "Зарах үнэ",
        dataIndex: "salePrice",
        key: "salePrice",
        width: 120,
      },
    ],
  },
  {
    title: "Талбайн бүртгэл",
    children: [
      {
        title: "Зууч код",
        dataIndex: "brokerCode",
        key: "brokerCode",
        width: 120,
      },
      {
        title: "Байр №",
        dataIndex: "locationNumber",
        key: "locationNumber",
        width: 100,
      },
      {
        title: "Талбайд задарсан",
        dataIndex: "unloadedAtYard",
        key: "unloadedAtYard",
        width: 150,
      },
      {
        title: "Талбайд ирсэн",
        dataIndex: "arrivedAtYard",
        key: "arrivedAtYard",
        width: 150,
      },
      { title: "Задарсан", dataIndex: "unloaded", key: "unloaded", width: 120 },
      { title: "Суларсан", dataIndex: "vacated", key: "vacated", width: 120 },
      { title: "Ачилт хийсэн", dataIndex: "loaded", key: "loaded", width: 150 },
      {
        title: "Талбайд ирсэн",
        dataIndex: "reArrivedAtYard",
        key: "reArrivedAtYard",
        width: 150,
      },
      {
        title: "Задарснаас хойш суларсан",
        dataIndex: "vacatedAfterUnload",
        key: "vacatedAfterUnload",
        width: 180,
      },
      {
        title: "Задарснаас хойш талбайгаас явсан",
        dataIndex: "leftAfterUnload",
        key: "leftAfterUnload",
        width: 200,
      },
      {
        title: "Суларснаас хойш ачилт хийсэн",
        dataIndex: "loadedAfterVacated",
        key: "loadedAfterVacated",
        width: 200,
      },
      {
        title: "Буцаж ирснээс хойш ачилт хийсэн",
        dataIndex: "loadedAfterReturn",
        key: "loadedAfterReturn",
        width: 200,
      },
    ],
  },
  {
    title: "Хяналт",
    dataIndex: "control",
    key: "control",
    fixed: "right", // Sticks to the right side
    width: 150,
  },
];
const TAB_OPTIONS = [
  {
    value: "load-factor",
    label: "Ачаа дөхөлт",
  },
  {
    value: "capacity",
    label: "Үлдэгдэл",
    children: <Table columns={CAPACITY_COLUMNS as any} />,
  },
  {
    value: "site-received",
    label: "Талбайд ирсэнээр",
  },
];
export default function SiteRegistrationPage() {
  return (
    <>
      <Tabs tabs={TAB_OPTIONS} defaultTab={1} />
    </>
  );
}
