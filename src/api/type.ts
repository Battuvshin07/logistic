export type BaseResponse<T> = OkResponse<T> | ErrorResponse;
export type OkResponse<T> = {
  ok: true;
  data: T;
};
export type ErrorResponse = {
  ok: false;
  error: string;
};
