import {
  createContext,
  PropsWithChildren,
  Reducer,
  useContext,
  useReducer,
} from "react";
import getLocale, { Locale, LocaleLanguage } from "../locale";
import { Locale as AntdLocale } from "antd/es/locale";

interface LocaleContext {
  locale: Locale;
  antdLocale: AntdLocale;
  setLocale(locale: LocaleLanguage): void;
}
const localeContext = createContext<LocaleContext>([] as any);

export function useLocale() {
  return useContext(localeContext);
}

export default function LocaleProvider({ children }: PropsWithChildren) {
  const [[locale, antdLocale], setLocale] = useReducer<
    Reducer<[Locale, AntdLocale], LocaleLanguage>
  >((_, locale) => getLocale(locale), getLocale(LocaleLanguage.mn_MN));
  return (
    <localeContext.Provider value={{ locale, antdLocale, setLocale }}>
      {children}
    </localeContext.Provider>
  );
}
