export const SAMPLE_REMAINING = Array(100).fill({
  arrivalDate: "2023-01-01", // Дөхөлт огноо
  borderEntry: "MN", // Орох хил
  arrivalDeparture: "Arrival", // Ирэх\Явах
  containerNumber: 21, // Чингэлэг дугаар
  capacity: 1000, // Даац
  brokerName: "Cola", // Зуучийн нэр
  emptyLoaded: "Loaded", // Хоосон\Ачаатай
  forSale: true, // Зарах эсэх
  salePrice: 13000, // Зарах үнэ
});
export const REMAINING_COLUMNS = [
  { title: "Дөхөлт огноо", dataIndex: "arrivalDate" }, // Дөхөлт огноо
  { title: "Орох хил", dataIndex: "borderEntry" }, // Орох хил
  { title: "Ирэх/Явах", dataIndex: "arrivalDeparture" }, // Ирэх\Явах
  { title: "Чингэлэг дугаар", dataIndex: "containerNumber" }, // Чингэлэг дугаар
  { title: "Даац", dataIndex: "capacity" }, // Даац
  { title: "Зуучийн нэр", dataIndex: "brokerName" }, // Зуучийн нэр
  { title: "Хоосон/Ачаатай", dataIndex: "emptyLoaded" }, // Хоосон\Ачаатай
  { title: "Зарах эсэх", dataIndex: "forSale" }, // Зарах эсэх
  { title: "Зарах үнэ", dataIndex: "salePrice" }, // Зарах үнэ
];
