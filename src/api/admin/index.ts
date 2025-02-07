import { http, user } from "..";
import { AdminResponseError } from "../errors";
import { AdminTableResponse } from "./type";

export type * from "./type";
export async function tables() {
  const userInfo = await user.info();
  if (import.meta.env.VITE_NO_BACKEND) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (userInfo.role !== "admin") {
      throw new Error(AdminResponseError.UserNotAdmin);
    }

    const { SAMPLE_ADMIN_TABLE } = await import("../sample_database");
    return SAMPLE_ADMIN_TABLE as AdminTableResponse;
  }

  return await http.get<AdminTableResponse>("/admin/table", userInfo.token);
}
