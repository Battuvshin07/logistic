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
  value: 3,
};
