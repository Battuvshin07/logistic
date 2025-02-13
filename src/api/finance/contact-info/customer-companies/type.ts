export type Schema = Awaited<
  typeof import("@/api/sample_database")["SAMPLE_CONTACT_INFO_CUSTOMER_COMPANY_TABLE"]
>[0];
