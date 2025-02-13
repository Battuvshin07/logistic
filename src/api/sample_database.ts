import { RegisteredByColumn, RoleColumn } from "./enums";

export const SAMPLE_USERS = [
  {
    email: "admin@mail.com",
    password: "admin123",
    fullName: "Admin Molor",
    role: "admin",
    token: "admin-token",
  },
  {
    email: "finance@mail.com",
    password: "finance123",
    fullName: "Finance Molor",
    role: "finance",
    token: "finance-token",
  },
];
export const SAMPLE_ADMIN_TABLE = [
  {
    id: 1,
    surname: "Баатар",
    name: "Цогт",
    role: RoleColumn.VehicleManager,
    registrationNumber: "УО12345678",
    age: 21,
    isMale: true,
    phoneNumber: "12345678",
    email: "baatar.tsogt@mail.com",
    registeredDate: "2023-03-13",
    registeredBy: RegisteredByColumn.Admin,
  },
  {
    id: 3,
    surname: "Сайхан",
    name: "Цогт",
    role: RoleColumn.Cashier,
    registrationNumber: "УО12345678",
    age: 21,
    isMale: false,
    phoneNumber: "12345678",
    email: "saikhan.tsogt@mail.com",
    registeredDate: "2023-03-13",
    registeredBy: RegisteredByColumn.Admin,
  },
  {
    id: 2,
    surname: "Амар",
    name: "Баяр",
    role: RoleColumn.Finance,
    registrationNumber: "УО12345678",
    age: 21,
    isMale: false,
    phoneNumber: "12345678",
    email: "amar@mail.com",
    registeredDate: "2023-03-13",
    registeredBy: RegisteredByColumn.Admin,
  },
];
export const SAMPLE_ID_COUNTER = {
  value: 9,
};
export function nextId() {
  SAMPLE_ID_COUNTER.value++;
  return SAMPLE_ID_COUNTER.value;
}
export const SAMPLE_CONTACT_INFO_CUSTOMER_COMPANY_TABLE = [
  {
    id: 4,
    abbreviation: "ABC",
    companyName: "ABC ХХК",
    isBroker: true,
    account: "123456789",
    contactNumber: "99112233",
  },
  {
    id: 5,
    abbreviation: "XYZ",
    companyName: "XYZ ББСБ",
    isBroker: false,
    account: "987654321",
    contactNumber: "88001122",
  },
  {
    id: 6,
    abbreviation: "MNO",
    companyName: "MNO Групп",
    isBroker: true,
    account: "567891234",
    contactNumber: "77008899",
  },
  {
    id: 7,
    abbreviation: "QWE",
    companyName: "QWE Санхүү",
    isBroker: false,
    account: "112233445",
    contactNumber: "99007766",
  },
  {
    id: 8,
    abbreviation: "JKL",
    companyName: "JKL Холдинг",
    isBroker: true,
    account: "556677889",
    contactNumber: "88119955",
  },
];
