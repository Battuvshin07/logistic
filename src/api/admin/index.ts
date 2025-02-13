import { http, user } from "..";
import { AdminResponseError } from "../errors";
import { AdminTableResponse, AdminTableSchema } from "./type";

export type * from "./type";
export async function get(token: string) {
  const userInfo = await user.info(token);
  if (import.meta.env.VITE_NO_BACKEND) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (userInfo.role !== "admin") {
      throw new Error(AdminResponseError.UserNotAdmin);
    }

    const { SAMPLE_ADMIN_TABLE } = await import("../sample_database");
    return JSON.parse(JSON.stringify(SAMPLE_ADMIN_TABLE)) as AdminTableResponse; // to simulate sending api accurately, return json and parse json
  }

  return await http.get<AdminTableResponse>("/admin/table", userInfo.token);
}
export async function post(token: string, value: Omit<AdminTableSchema, "id">) {
  const userInfo = await user.info(token);
  if (import.meta.env.VITE_NO_BACKEND) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (userInfo.role !== "admin") {
      throw new Error(AdminResponseError.UserNotAdmin);
    }

    const { SAMPLE_ADMIN_TABLE, nextId } = await import("../sample_database");
    SAMPLE_ADMIN_TABLE.push({ ...value, id: nextId() });
    return;
  }
  return await http.post<undefined>("/admin/table", value, userInfo.token);
}
export async function put(token: string, value: AdminTableSchema) {
  const userInfo = await user.info(token);
  if (import.meta.env.VITE_NO_BACKEND) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (userInfo.role !== "admin") {
      throw new Error(AdminResponseError.UserNotAdmin);
    }

    const { SAMPLE_ADMIN_TABLE } = await import("../sample_database");
    const index = SAMPLE_ADMIN_TABLE.findIndex((s) => s.id === value.id);
    if (index < 0) return;
    SAMPLE_ADMIN_TABLE[index] = value;
    return;
  }
  return await http.put<undefined>("/admin/table", value, userInfo.token);
}
export async function del(token: string, id: number) {
  const userInfo = await user.info(token);
  if (import.meta.env.VITE_NO_BACKEND) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (userInfo.role !== "admin") {
      throw new Error(AdminResponseError.UserNotAdmin);
    }

    const { SAMPLE_ADMIN_TABLE } = await import("../sample_database");
    const index = SAMPLE_ADMIN_TABLE.findIndex((s) => s.id === id);
    if (index < 0) return;
    SAMPLE_ADMIN_TABLE.splice(index, 1);
    return;
  }
  return await http.del<undefined>(`/admin/table/${id}`, userInfo.token);
}
