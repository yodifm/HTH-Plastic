import { useEffect, useState, type ReactNode } from "react";
import { LANG_STORAGE_KEY, applyLanguage } from "@/i18n";
import { LANGUAGES, type LangCode } from "@/i18n/resources";
import logoFull from "@/assets/logo-full.png";

export function LanguageGate({ children }: { children: ReactNode }) {
  const [showGate, setShowGate] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY) as LangCode | null;
    if (stored && LANGUAGES.some((l) => l.code === stored)) {
      applyLanguage(stored);
    } else {
      setShowGate(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    }
  }, []);

  const choose = (code: LangCode) => {
    applyLanguage(code);
    setVisible(false);
    setTimeout(() => setShowGate(false), 300);
  };

  return (
    <>
      {children}
      {showGate && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-gradient-brand p-4 backdrop-blur-sm transition-opacity duration-300 ${
            visible ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div
            className={`w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl transition-all duration-300 ${
              visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <img
              src={logoFull}
              alt="HTH Plastik"
              width={180}
              height={124}
              className="mx-auto h-24 w-auto object-contain"
            />
            <h2 className="mt-5 text-xl font-bold text-navy">
              Pilih Bahasa · Choose Language · اختر اللغة
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Silakan pilih bahasa Anda / Please select your language / يرجى اختيار لغتك
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => choose(l.code)}
                  dir={l.dir}
                  className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-navy transition hover:border-brand hover:bg-brand/10"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
