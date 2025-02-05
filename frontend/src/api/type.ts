export type BaseResponse<T> =
  | {
      data: T;
    }
  | {
      error: string;
    };
