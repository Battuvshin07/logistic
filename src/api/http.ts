import axios from "axios";
import { BaseResponse } from "./type";

const API_URL = import.meta.env.VITE_API_URL;
if (!API_URL) {
  throw new Error("API_URL is not defined");
}

function createHeaders(token?: string) {
  return token ? { Authorization: `Bearer ${token}` } : {};
}
export function get<T>(url: string, token?: string) {
  return axios.get<T>(API_URL + url, {
    headers: createHeaders(token),
  }) as Promise<BaseResponse<T>>;
}
export function put<T>(url: string, data?: any, token?: string) {
  return axios.put<T>(API_URL + url, {
    headers: createHeaders(token),
    data,
  }) as Promise<BaseResponse<T>>;
}
export function post<T>(url: string, data: any, token?: string) {
  return axios.post<T>(API_URL + url, {
    headers: createHeaders(token),
    data,
  }) as Promise<BaseResponse<T>>;
}
export function del<T>(url: string, token?: string) {
  return axios.delete<T>(API_URL + url, {
    headers: createHeaders(token),
  }) as Promise<BaseResponse<T>>;
}
