export type AdminTableResponse = Awaited<
  typeof import("../sample_database")
>["SAMPLE_ADMIN_TABLE"];
export type AdminTableSchema = AdminTableResponse[0];
