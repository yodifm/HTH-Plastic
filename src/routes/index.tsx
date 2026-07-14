import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Trans, useTranslation } from "react-i18next";
import {
  Menu,
  X,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  ShieldCheck,
  Lightbulb,
  Award,
  Users,
  Leaf,
  Sparkles,
  BadgeCheck,
  TrendingDown,
  Settings2,
  UserCheck,
  CheckCircle2,
  Download,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import clientAds from "@/assets/Client/ADS.png";
import clientMulti from "@/assets/Client/multi.png";
import clientRsia from "@/assets/Client/RSIA.png";
import clientPutra from "@/assets/Client/Putra.png";
import clientNsp from "@/assets/Client/NSP.png";
import clientCpm from "@/assets/Client/CPM.png";
import clientIj from "@/assets/Client/IJ.png";
import clientGmk from "@/assets/Client/GMK.png";
import productBijiRecycle from "@/assets/product/biji plastik 1.png";
import productBijiOri from "@/assets/product/biji plastik ori 1.png";
import productKresek from "@/assets/product/kantong kresek 1.png";
import productSampahHitam from "@/assets/product/kantong sampah hitam 1.png";
import productSampahMedis from "@/assets/product/kantong sampah medis 1.png";
import productMulsa from "@/assets/product/plastik mulsa 1.png";
import productSawah from "@/assets/product/plastik sawah 1.png";
import productEs from "@/assets/product/image 22.png";
import productPolybag from "@/assets/product/Polybag-Hitam 1.png";
import productLakban from "@/assets/product/lakban 1.png";
import productBubbleWrap from "@/assets/product/bubble wrap 1.png";
import productHvs from "@/assets/product/kertas hvs 1.png";
import gallery1 from "@/assets/Gallery/WhatsApp Image 2026-07-14 at 14.03.36 1.png";
import gallery2 from "@/assets/Gallery/WhatsApp Image 2026-07-14 at 14.03.37 1.png";
import gallery3 from "@/assets/Gallery/WhatsApp Image 2026-07-14 at 14.03.37 (1) 1.png";
import gallery4 from "@/assets/Gallery/WhatsApp Image 2026-07-14 at 14.03.38 1.png";
import gallery5 from "@/assets/Gallery/WhatsApp Image 2026-07-14 at 14.03.39 1.png";
import gallery6 from "@/assets/Gallery/WhatsApp Image 2026-07-14 at 14.03.40 1.png";
import gallery7 from "@/assets/Gallery/WhatsApp Image 2026-07-14 at 14.03.41 1.png";
import gallery8 from "@/assets/Gallery/WhatsApp Image 2026-07-14 at 14.03.41 (1) 1.png";
import gallery9 from "@/assets/Gallery/WhatsApp Image 2026-07-14 at 14.03.41 (2) 1.png";
import gallery10 from "@/assets/Gallery/WhatsApp Image 2026-07-14 at 14.03.42 1.png";
import video1 from "@/assets/video/Video1.mp4";
import video2 from "@/assets/video/Video2.mp4";
import video3 from "@/assets/video/Video3.mp4";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import "@/i18n";
import { applyLanguage } from "@/i18n";
import { LANGUAGES, type LangCode, type ProductText, type TitledText } from "@/i18n/resources";
import { LanguageGate } from "@/components/LanguageGate";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "HTH Plastik — Solusi Kemasan Anda | Supplier Plastik Industri" },
      {
        name: "description",
        content:
          "PT HTH Sinergi Intranusa — supplier plastik industri di Indonesia. Biji plastik, kantong kresek, kantong sampah medis, plastik mulsa, polybag, dan lainnya.",
      },
      { property: "og:title", content: "HTH Plastik — Solusi Kemasan Anda" },
      {
        property: "og:description",
        content:
          "Produksi, distribusi, dan daur ulang plastik berkualitas untuk kebutuhan industri Anda.",
      },
    ],
  }),
});

const WA_NUMBER = "628119993775";
const WA_SARI_NUMBER = "6281183831800";

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const NAV_IDS = [
  "beranda",
  "tentang",
  "produk",
  "galeri",
  "keunggulan",
  "klien",
  "kontak",
] as const;

const VALUE_ICONS = [ShieldCheck, Lightbulb, Award, Users];

const PRODUCT_IMAGES = [
  productBijiRecycle,
  productBijiOri,
  productKresek,
  productSampahHitam,
  productSampahMedis,
  productMulsa,
  productSawah,
  productEs,
  productPolybag,
  productLakban,
  productBubbleWrap,
  productHvs,
];
const PRODUCT_BEST_INDEX = 2;

const GALLERY_IMAGES = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
];

const VIDEOS = [video1, video2, video3];

const ADVANTAGE_ICONS = [BadgeCheck, TrendingDown, Settings2, UserCheck];

const CLIENTS = [
  { name: "CV Adi Sakti Chemical", logo: clientAds },
  { name: "PT Multi Insan Gemilang", logo: clientMulti },
  { name: "RSIA Bunda Triananda", logo: clientRsia },
  { name: "CV Putra Banten Semesta", logo: clientPutra },
  { name: "PT Naratama Sinar Perkasa", logo: clientNsp },
  { name: "PT Citra Pratama Madani", logo: clientCpm },
  { name: "PT Iljin Indonesia", logo: clientIj },
  { name: "PT GMK Makmur Indonesia", logo: clientGmk },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language as LangCode) || "id";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const selectLanguage = (code: LangCode) => {
    applyLanguage(code);
    setLangMenuOpen(false);
    setOpen(false);
  };

  const waMessage = t("contact.waMessage");
  const waSariMessage = t("contact.waSariMessage");
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waSariMessage)}`;
  const waSariLink = `https://wa.me/${WA_SARI_NUMBER}?text=${encodeURIComponent(waMessage)}`;

  const values = t("about.values", { returnObjects: true }) as TitledText[];
  const missionItems = t("about.missionItems", { returnObjects: true }) as string[];
  const products = t("products.items", { returnObjects: true }) as ProductText[];
  const advantages = t("advantages.items", { returnObjects: true }) as TitledText[];
  const heroStats = t("hero.stats", { returnObjects: true }) as { k: string; v: string }[];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nama = String(fd.get("nama") || "");
    const email = String(fd.get("email") || "");
    const pesan = String(fd.get("pesan") || "");
    const text = `${t("contact.formGreeting")}%0A${t("contact.nama")}: ${nama}%0AEmail: ${email}%0A%0A${pesan}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
    toast.success(t("contact.toastSuccess"));
    e.currentTarget.reset();
  };

  const LanguageMenu = ({ className }: { className?: string }) => (
    <div className={`relative ${className ?? ""}`}>
      <button
        onClick={() => setLangMenuOpen((v) => !v)}
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition ${
          scrolled ? "text-navy hover:bg-brand/10" : "text-white/90 hover:bg-white/10"
        }`}
        aria-label="Language"
      >
        <Globe className="h-4 w-4" />
        {currentLang.toUpperCase()}
      </button>
      {langMenuOpen && (
        <div className="absolute end-0 top-full z-20 mt-2 w-44 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              dir={l.dir}
              onClick={() => selectLanguage(l.code)}
              className={`block w-full px-4 py-2.5 text-start text-sm font-medium transition hover:bg-brand/10 ${
                l.code === currentLang ? "text-brand-dark" : "text-navy"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <LanguageGate>
      <div className="min-h-screen bg-background text-foreground">
        {/* NAVBAR */}
        <header
          className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-background/85 backdrop-blur-lg shadow-soft" : "bg-transparent"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <button onClick={() => scrollTo("beranda")} className="flex items-center">
              <img
                src={logo}
                alt="HTH Plastik"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
            </button>

            <nav className="hidden items-center gap-1 lg:flex">
              {NAV_IDS.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    scrolled ? "text-navy hover:bg-brand/10" : "text-white/90 hover:bg-white/10"
                  }`}
                >
                  {t(`nav.${id}`)}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <LanguageMenu className="hidden sm:block" />
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-brand transition hover:brightness-110 sm:inline-flex"
              >
                <MessageCircle className="h-4 w-4" /> {t("header.whatsapp")}
              </a>
              <button
                onClick={() => setOpen((v) => !v)}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
                  scrolled ? "text-navy bg-brand/10" : "text-white bg-white/10"
                }`}
                aria-label={t("header.menu")}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {open && (
            <div className="border-t border-border bg-background/95 backdrop-blur-lg lg:hidden">
              <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
                {NAV_IDS.map((id) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="rounded-lg px-3 py-3 text-start text-sm font-medium text-navy hover:bg-brand/10"
                  >
                    {t(`nav.${id}`)}
                  </button>
                ))}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-4 py-3 text-sm font-semibold text-white"
                >
                  <MessageCircle className="h-4 w-4" /> {t("header.whatsapp")}
                </a>
                <div className="mt-3 flex gap-2 border-t border-border pt-3">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      dir={l.dir}
                      onClick={() => selectLanguage(l.code)}
                      className={`flex-1 rounded-full border px-3 py-2 text-xs font-semibold transition ${
                        l.code === currentLang
                          ? "border-brand bg-brand/10 text-brand-dark"
                          : "border-border text-navy"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          )}
        </header>

        {/* HERO */}
        <section id="beranda" className="relative isolate overflow-hidden">
          <img
            src={heroBg}
            alt=""
            aria-hidden
            width={1920}
            height={1280}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-90" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,oklch(0.72_0.22_145/0.35),transparent_50%)]" />

          <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-28 pb-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
                <Leaf className="h-3.5 w-3.5 text-brand-light" />
                {t("hero.badge")}
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                <Trans
                  i18nKey="hero.title"
                  t={t}
                  components={[
                    <span className="text-transparent bg-gradient-to-r from-brand-light to-white bg-clip-text" />,
                  ]}
                />
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                {t("hero.desc")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3.5 text-sm font-semibold text-white shadow-brand transition hover:brightness-110"
                >
                  {t("hero.ctaConsult")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </a>
                <a
                  href="/katalog-hth-plastik.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  <Download className="h-4 w-4" /> {t("hero.ctaCatalog")}
                </a>
              </div>

              <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
                {heroStats.map((s, i) => (
                  <div key={i}>
                    <dt className="font-display text-3xl font-bold text-white sm:text-4xl">
                      {s.k}
                    </dt>
                    <dd className="mt-1 text-xs text-white/70 sm:text-sm">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* TENTANG */}
        <section id="tentang" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="reveal">
              <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-dark">
                {t("about.badge")}
              </span>
              <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
                <Trans
                  i18nKey="about.title"
                  t={t}
                  components={[
                    <span className="text-gradient-brand" />,
                    <span className="text-gradient-brand" />,
                  ]}
                />
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                <Trans
                  i18nKey="about.p1"
                  t={t}
                  components={[<strong className="text-navy" />, <em />]}
                />
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {t("about.p2")}
              </p>
            </div>

            <div className="reveal grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-gradient-brand p-8 text-white shadow-brand">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold">{t("about.visionTitle")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  {t("about.visionDesc")}
                </p>
              </div>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:mt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10">
                  <Award className="h-6 w-6 text-brand-dark" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-navy">
                  {t("about.missionTitle")}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {missionItems.map((m, i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Nilai */}
          <div className="mt-24">
            <div className="reveal text-center">
              <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-dark">
                {t("about.valuesBadge")}
              </span>
              <h3 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
                {t("about.valuesTitle")}
              </h3>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => {
                const Icon = VALUE_ICONS[i];
                return (
                  <div
                    key={i}
                    className="reveal group rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-brand"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-accent text-white shadow-brand transition group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="mt-5 font-display text-lg font-bold text-navy">{v.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRODUK */}
        <section
          id="produk"
          className="relative bg-gradient-to-b from-secondary/40 to-background py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="reveal mx-auto max-w-2xl text-center">
              <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-dark">
                {t("products.badge")}
              </span>
              <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
                {t("products.title")}
              </h2>
              <p className="mt-4 text-muted-foreground">{t("products.desc")}</p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p, i) => {
                const best = i === PRODUCT_BEST_INDEX;
                return (
                  <article
                    key={i}
                    className={`reveal group relative overflow-hidden rounded-3xl border transition hover:-translate-y-1 hover:shadow-brand ${
                      best
                        ? "border-orange/40 bg-gradient-to-br from-orange/10 via-card to-card"
                        : "border-border bg-card"
                    }`}
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    {best && (
                      <span className="absolute end-4 top-4 z-10 inline-flex items-center rounded-full bg-orange px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-brand">
                        {t("products.best")}
                      </span>
                    )}
                    <div className="aspect-[4/3] overflow-hidden bg-secondary">
                      <img
                        src={PRODUCT_IMAGES[i]}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-navy">{p.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark hover:gap-2 transition-all"
                      >
                        {t("products.cta")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* GALERI */}
        <section id="galeri" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-dark">
              {t("gallery.badge")}
            </span>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">{t("gallery.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("gallery.desc")}</p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {GALLERY_IMAGES.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="reveal group aspect-square overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:shadow-brand"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                />
              </button>
            ))}
          </div>

          <div className="mt-20">
            <div className="reveal mx-auto max-w-2xl text-center">
              <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-dark">
                {t("videos.badge")}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-navy sm:text-3xl">{t("videos.title")}</h3>
              <p className="mt-3 text-muted-foreground">{t("videos.desc")}</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {VIDEOS.map((src, i) => (
                <video
                  key={i}
                  src={src}
                  controls
                  preload="metadata"
                  className="reveal aspect-video w-full rounded-2xl bg-black shadow-soft"
                  style={{ transitionDelay: `${i * 60}ms` }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* LIGHTBOX GALERI */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(null);
              }}
              aria-label={t("gallery.close")}
              className="absolute end-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((v) =>
                  v === null ? v : (v - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length,
                );
              }}
              aria-label={t("gallery.prev")}
              className="absolute start-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:start-4"
            >
              <ChevronLeft className="h-6 w-6 rtl:rotate-180" />
            </button>
            <img
              src={GALLERY_IMAGES[lightbox]}
              alt=""
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((v) => (v === null ? v : (v + 1) % GALLERY_IMAGES.length));
              }}
              aria-label={t("gallery.next")}
              className="absolute end-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:end-4"
            >
              <ChevronRight className="h-6 w-6 rtl:rotate-180" />
            </button>
          </div>
        )}

        {/* KEUNGGULAN */}
        <section id="keunggulan" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="reveal">
              <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-dark">
                {t("advantages.badge")}
              </span>
              <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
                <Trans
                  i18nKey="advantages.title"
                  t={t}
                  components={[<span className="text-gradient-brand" />]}
                />
              </h2>
              <p className="mt-5 text-muted-foreground">{t("advantages.desc")}</p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-navy/90"
              >
                {t("advantages.cta")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {advantages.map((a, i) => {
                const Icon = ADVANTAGE_ICONS[i];
                return (
                  <div
                    key={i}
                    className={`reveal rounded-3xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-brand ${
                      i % 2 ? "sm:mt-8" : ""
                    }`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand-dark">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-base font-bold text-navy">{a.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* KLIEN */}
        <section id="klien" className="bg-navy py-24 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="reveal mx-auto max-w-2xl text-center">
              <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-light">
                {t("clients.badge")}
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                <Trans
                  i18nKey="clients.title"
                  t={t}
                  components={[
                    <span className="text-transparent bg-gradient-to-r from-brand-light to-brand bg-clip-text" />,
                  ]}
                />
              </h2>
              <p className="mt-4 text-white/70">{t("clients.desc")}</p>
            </div>
            <div className="reveal mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
                {[...CLIENTS, ...CLIENTS].map((c, i) => (
                  <div
                    key={i}
                    className="flex w-72 shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-brand/40 hover:bg-white/10"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white p-1.5">
                      <img src={c.logo} alt={c.name} className="h-full w-full object-contain" />
                    </div>
                    <span className="text-sm font-semibold leading-tight">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SOSIAL MEDIA */}
        <section className="border-t border-border bg-secondary/30 py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-dark">
              {t("social.badge")}
            </span>
            <h3 className="mt-4 text-2xl font-bold text-navy sm:text-3xl">{t("social.title")}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{t("social.desc")}</p>
            <div className="mt-8 flex items-center justify-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-white shadow-brand transition hover:-translate-y-1 hover:brightness-110"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* KONTAK */}
        <section id="kontak" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="reveal lg:col-span-2">
              <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-dark">
                {t("contact.badge")}
              </span>
              <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
                {t("contact.title")}
              </h2>
              <p className="mt-4 text-muted-foreground">{t("contact.desc")}</p>

              <ul className="mt-8 space-y-4">
                <li className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-brand">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {t("contact.whatsapp")}
                    </div>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      dir="ltr"
                      className="inline-block font-semibold text-navy hover:text-brand-dark"
                    >
                      +62 811-9993-775
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-brand">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {t("contact.whatsappSales")}
                    </div>
                    <a
                      href={waSariLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      dir="ltr"
                      className="inline-block font-semibold text-navy hover:text-brand-dark"
                    >
                      +62 811-8383-1800
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-brand">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {t("contact.email")}
                    </div>
                    <a
                      href="mailto:hthsinergiintranusa@gmail.com"
                      className="font-semibold text-navy break-all hover:text-brand-dark"
                    >
                      hthsinergiintranusa@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-brand">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {t("contact.address")}
                    </div>
                    <p className="font-semibold text-navy">{t("contact.addressValue")}</p>
                  </div>
                </li>
              </ul>
            </div>

            <form
              onSubmit={onSubmit}
              className="reveal rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8 lg:col-span-3"
            >
              <h3 className="font-display text-xl font-bold text-navy">{t("contact.formTitle")}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t("contact.formDesc")}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="nama" className="text-sm font-medium text-navy">
                    {t("contact.nama")}
                  </label>
                  <Input
                    id="nama"
                    name="nama"
                    required
                    placeholder={t("contact.namaPlaceholder")}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-navy">
                    {t("contact.email2")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={t("contact.emailPlaceholder")}
                    className="mt-1.5"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="pesan" className="text-sm font-medium text-navy">
                  {t("contact.pesan")}
                </label>
                <Textarea
                  id="pesan"
                  name="pesan"
                  required
                  rows={5}
                  placeholder={t("contact.pesanPlaceholder")}
                  className="mt-1.5"
                />
              </div>
              <Button
                type="submit"
                className="mt-6 w-full rounded-full bg-gradient-brand py-6 text-base font-semibold text-white shadow-brand hover:brightness-110"
              >
                {t("contact.kirim")}
                <ArrowRight className="ms-1 h-4 w-4 rtl:rotate-180" />
              </Button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-border bg-secondary/30">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
            <img
              src={logo}
              alt="HTH Plastik"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
              loading="lazy"
            />
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} {t("footer.copyright")}
            </p>
          </div>
        </footer>

        {/* Floating WA */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("waFloating")}
          className="animate-float fixed bottom-5 end-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-white shadow-brand ring-4 ring-brand/20 transition hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>
    </LanguageGate>
  );
}
