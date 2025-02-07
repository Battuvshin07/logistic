import axios from "axios";
import { BaseResponse } from "./type";

const API_URL = import.meta.env.VITE_API_URL;
if (!API_URL) {
  throw new Error("API_URL is not defined");
}

function createHeaders(token?: string) {
  return token ? { Authorization: `Bearer ${token}` } : {};
}
async function request<T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: any,
  token?: string
) {
  const response = (
    await axios<BaseResponse<T>>({
      method,
      url,
      data,
      headers: createHeaders(token),
    })
  ).data;
  if (!response.ok) throw new Error(response.error);
  return response.data;
}
export function get<T>(url: string, token?: string) {
  return request<T>(url, "GET", undefined, token);
}
export function put<T>(url: string, data?: any, token?: string) {
  return request<T>(url, "PUT", data, token);
}
export function post<T>(url: string, data: any, token?: string) {
  return request<T>(url, "POST", data, token);
}
export function del<T>(url: string, token?: string) {
  return request<T>(url, "DELETE", undefined, token);
}
