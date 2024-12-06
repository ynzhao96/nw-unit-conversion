import { SupportedLanguages, Texts } from "@/constants/i18n";
export type I18nItem = {
  key: string;
  values: I18nValues;
};
export type I18nValues = {
  [lang: string]: string;
};
export function getText(key: string, lang: string): any {
  const values = Texts.find((text) => text.key === key)?.values;
  return values?.[lang] || "";
}
