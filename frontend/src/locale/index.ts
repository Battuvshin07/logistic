import mn_MN from "./mn_MN";
import Antdmn_MN from "antd/es/locale/mn_MN";

export enum LocaleLanguage {
  mn_MN = "mn_MN",
}

export type Locale = typeof mn_MN;

export default function getLocale(
  language: LocaleLanguage
): [Locale, typeof Antdmn_MN] {
  switch (language) {
    case LocaleLanguage.mn_MN:
      return [mn_MN, Antdmn_MN];
    default:
      throw new Error(`Unsupported language: ${language}`);
  }
}
