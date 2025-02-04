export interface LocaleSchema {
  login: Login;
}
export interface Login {
  title: string;
  email: string;
  password: string;
  validate: Validate;
  submit: string;
}
export interface Validate {
  required: Required;
  email: string;
}
export interface Required {
  email: string;
  password: string;
}

export enum Locale {
  mn_MN = "mn_MN",
}
