import { I18nItem, I18nValues } from "@/utils/i18n";

export const SupportedLanguages = [
  {
    value: "en_US",
    label: "English",
  },
  {
    value: "zh_CN",
    label: "简体中文",
  },
  {
    value: "fr_FR",
    label: "Français",
  },
];

export const Texts: I18nItem[] = [
  {
    key: "welcome_title",
    values: {
      en_US: "Welcome to the unit converter",
      zh_CN: "欢迎使用单位换算器",
      fr_FR: "Bienvenue sur le convertisseur d'unités",
    } as I18nValues,
  },
];
