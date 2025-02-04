import { Locale, LocaleSchema } from "./type";
import mn_MN from "./mn_MN.json";
import Antdmn_MN from "antd/locale/mn_MN";
import { Locale as AntdLocale } from "antd/lib/locale";

export default function getLocale(locale: Locale): [LocaleSchema, AntdLocale] {
  switch (locale) {
    case Locale.mn_MN:
      return [mn_MN, Antdmn_MN];
    default:
      throw new Error(`Unsupported locale: ${locale}`);
  }
}
