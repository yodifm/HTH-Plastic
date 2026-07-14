import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { LANGUAGES, resources, type LangCode } from "./resources";

export const LANG_STORAGE_KEY = "hth-lang";

if (!i18next.isInitialized) {
  i18next.use(initReactI18next).init({
    resources,
    lng: "id",
    fallbackLng: "id",
    interpolation: { escapeValue: false },
  });
}

export function applyLanguage(code: LangCode) {
  const meta = LANGUAGES.find((l) => l.code === code) ?? LANGUAGES[0];
  i18next.changeLanguage(code);
  if (typeof document !== "undefined") {
    document.documentElement.lang = code;
    document.documentElement.dir = meta.dir;
  }
  if (typeof window !== "undefined") {
    window.localStorage.setItem(LANG_STORAGE_KEY, code);
  }
}

export default i18next;
