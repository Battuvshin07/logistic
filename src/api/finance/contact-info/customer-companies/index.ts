import { http, user } from "@/api";
import { Schema } from "./type";

export type { Schema };

export async function get(token: string) {
  if (import.meta.env.VITE_NO_BACKEND) {
    const { SAMPLE_CONTACT_INFO_CUSTOMER_COMPANY_TABLE } = await import(
      "@/api/sample_database"
    );
    return JSON.parse(
      JSON.stringify(SAMPLE_CONTACT_INFO_CUSTOMER_COMPANY_TABLE)
    ) as Schema[]; // to simulate sending api accurately, return json and parse json
  }
  return await http.get<Schema[]>(
    "/finance/contact-info/customer-companies",
    token
  );
}
export async function del(token: string, id: number) {
  if (import.meta.env.VITE_NO_BACKEND) {
    const { SAMPLE_CONTACT_INFO_CUSTOMER_COMPANY_TABLE: TABLE } = await import(
      "@/api/sample_database"
    );
    const index = TABLE.findIndex((s) => s.id === id);
    if (index < 0) return;
    TABLE.splice(index, 1);
    return;
  }
  return await http.del<undefined>(
    `/finance/contact-info/customer-companies/${id}`,
    token
  );
}
export async function post(token: string, value: Omit<Schema, "id">) {
  if (import.meta.env.VITE_NO_BACKEND) {
    const { SAMPLE_CONTACT_INFO_CUSTOMER_COMPANY_TABLE: TABLE, nextId } =
      await import("@/api/sample_database");
    TABLE.push({ ...value, id: nextId() });
    return;
  }
  return await http.post<undefined>(
    "/finance/contact-info/customer-companies",
    value,
    token
  );
}
export async function put(token: string, value: Schema) {
  if (import.meta.env.VITE_NO_BACKEND) {
    const { SAMPLE_CONTACT_INFO_CUSTOMER_COMPANY_TABLE: TABLE } = await import(
      "@/api/sample_database"
    );
    const index = TABLE.findIndex((s) => s.id === value.id);
    if (index < 0) return;
    TABLE[index] = value;
    return;
  }
  return await http.put<undefined>(
    "/finance/contact-info/customer-companies",
    value,
    token
  );
}
