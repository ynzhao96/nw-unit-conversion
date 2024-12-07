import { Texts } from "@/constants/i18n";
import { NextRouter } from "next/router";

export type I18nItem = {
  key: string;
  values: I18nValues;
};

export type I18nValues = {
  [lang: string]: string;
};

// get text based on current language
export function getText(key: string, lang?: string): any {
  const values = Texts.find((text) => text.key === key)?.values;
  return values?.[lang || "en_US"] || "";
}

// change 'lang' in search param to change global language
export function changeLanguage(router: NextRouter, lang: string) {
  router.push({
    pathname: router.pathname,
    query: { ...router.query, lang: lang },
  });
}
