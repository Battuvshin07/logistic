import {
  createContext,
  PropsWithChildren,
  Reducer,
  useContext,
  useReducer,
} from "react";
import { Locale, LocaleSchema } from "../locale/type";
import getLocale from "../locale";
import { Locale as AntdLocale } from "antd/es/locale";

interface LocaleContext {
  locale: LocaleSchema;
  antdLocale: AntdLocale;
  setLocale(locale: Locale): void;
}
const localeContext = createContext<LocaleContext>([] as any);

export function useLocale() {
  return useContext(localeContext);
}

export default function LocaleProvider({ children }: PropsWithChildren) {
  const [[locale, antdLocale], setLocale] = useReducer<
    Reducer<[LocaleSchema, AntdLocale], Locale>
  >((_, locale) => getLocale(locale), getLocale(Locale.mn_MN));
  return (
    <localeContext.Provider value={{ locale, antdLocale, setLocale }}>
      {children}
    </localeContext.Provider>
  );
}
