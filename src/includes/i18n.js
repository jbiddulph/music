import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";

export default createI18n({
  globalInjection: true,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    fr,
  },
  numberFormats: {
    en: {
      currency: {
        style: "currency",
        currency: "USD",
      },
    },
    ja: {
      currency: {
        style: "currency",
        currency: "JPY",
      },
    },
  },
});
