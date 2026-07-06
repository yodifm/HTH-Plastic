import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
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
  Recycle,
  Package,
  Factory,
  Sparkles,
  BadgeCheck,
  TrendingDown,
  Settings2,
  UserCheck,
  CheckCircle2,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

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
        content: "Produksi, distribusi, dan daur ulang plastik berkualitas untuk kebutuhan industri Anda.",
      },
    ],
  }),
});

const WA_NUMBER = "6281183831800";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Halo HTH Plastik, saya ingin konsultasi produk plastik.",
)}`;

const NAV = [
  { id: "beranda", label: "Beranda" },
  { id: "tentang", label: "Tentang Kami" },
  { id: "produk", label: "Produk" },
  { id: "keunggulan", label: "Keunggulan" },
  { id: "klien", label: "Klien" },
  { id: "kontak", label: "Kontak" },
];

const VALUES = [
  { icon: ShieldCheck, title: "Integritas", desc: "Kami menjunjung kejujuran dan transparansi dalam setiap kerja sama." },
  { icon: Lightbulb, title: "Inovasi", desc: "Terus berinovasi menghadirkan solusi kemasan yang lebih baik dan berkelanjutan." },
  { icon: Award, title: "Kualitas", desc: "Setiap produk melewati kontrol mutu ketat untuk hasil yang konsisten." },
  { icon: Users, title: "Kolaborasi", desc: "Kemitraan jangka panjang berbasis pertumbuhan dan kepercayaan bersama." },
];

const PRODUCTS = [
  { icon: Recycle, name: "Biji Plastik Recycle", desc: "Bahan baku daur ulang berkualitas untuk industri ramah lingkungan." },
  { icon: Package, name: "Biji Plastik Original", desc: "Bahan baku murni untuk produk plastik premium." },
  { icon: Sparkles, name: "Kantong Kresek", desc: "Berbagai ukuran & warna untuk kebutuhan retail dan grosir.", best: true },
  { icon: Package, name: "Kantong Sampah Hitam", desc: "Tebal, kuat, tahan robek untuk kebutuhan komersial." },
  { icon: ShieldCheck, name: "Kantong Sampah Medis", desc: "Sesuai standar rumah sakit dan fasilitas kesehatan." },
  { icon: Leaf, name: "Plastik Mulsa", desc: "Meningkatkan produktivitas pertanian dan menjaga kelembaban tanah." },
  { icon: Factory, name: "Pagar Sawah", desc: "Perlindungan tanaman dari hama dengan bahan tahan cuaca." },
  { icon: Package, name: "Plastik Es", desc: "Food grade untuk kemasan es batu dan minuman." },
  { icon: Leaf, name: "Polybag", desc: "Media tanam ideal untuk pembibitan dan hortikultura." },
];

const ADVANTAGES = [
  { icon: BadgeCheck, title: "Kualitas Terjamin", desc: "Bahan baku terpilih dengan proses produksi terstandar." },
  { icon: TrendingDown, title: "Harga Kompetitif", desc: "Produksi mandiri memungkinkan harga terbaik di kelasnya." },
  { icon: Settings2, title: "Fleksibilitas Produksi", desc: "Custom ukuran, ketebalan, warna, dan sablon sesuai kebutuhan." },
  { icon: UserCheck, title: "Tim Profesional", desc: "Didukung tim berpengalaman & layanan responsif setiap hari." },
];

const CLIENTS = [
  "CV Adi Sakti Chemical",
  "PT Multi Insan Gemilang",
  "RSIA Bunda Triananda",
  "CV Putra Banten Semesta",
  "PT Naratama Sinar Perkasa",
  "PT Citra Pratama Madani",
  "PT Iljin Indonesia",
  "PT GMK Makmur Indonesia",
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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nama = String(fd.get("nama") || "");
    const email = String(fd.get("email") || "");
    const pesan = String(fd.get("pesan") || "");
    const text = `Halo HTH Plastik,%0ANama: ${nama}%0AEmail: ${email}%0A%0A${pesan}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
    toast.success("Terima kasih! Kami akan segera menghubungi Anda.");
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVBAR */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/85 backdrop-blur-lg shadow-soft" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <button onClick={() => scrollTo("beranda")} className="flex items-center gap-2.5">
            <img src={logo} alt="Logo HTH Plastik" width={40} height={40} className="h-10 w-10" />
            <div className="text-left leading-tight">
              <div className={`font-display text-base font-bold ${scrolled ? "text-navy" : "text-white"}`}>
                HTH Plastik
              </div>
              <div className={`text-[10px] font-medium tracking-wide ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
                Solusi Kemasan Anda
              </div>
            </div>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  scrolled ? "text-navy hover:bg-brand/10" : "text-white/90 hover:bg-white/10"
                }`}
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-brand transition hover:brightness-110 sm:inline-flex"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
                scrolled ? "text-navy bg-brand/10" : "text-white bg-white/10"
              }`}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-background/95 backdrop-blur-lg lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="rounded-lg px-3 py-3 text-left text-sm font-medium text-navy hover:bg-brand/10"
                >
                  {n.label}
                </button>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-4 py-3 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
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
              PT HTH Sinergi Intranusa · Berdiri 2024
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Solusi <span className="text-transparent bg-gradient-to-r from-brand-light to-white bg-clip-text">Kemasan Plastik</span> Berkualitas untuk Industri Anda
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              Supplier terpercaya biji plastik, kantong kresek, kantong sampah, plastik mulsa dan lainnya.
              Kami menghubungkan produksi, distribusi, dan daur ulang dalam satu ekosistem berkelanjutan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3.5 text-sm font-semibold text-white shadow-brand transition hover:brightness-110"
              >
                Konsultasi Gratis <ArrowRight className="h-4 w-4" />
              </a>
              <button
                onClick={() => scrollTo("produk")}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Lihat Produk
              </button>
            </div>

            <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
              {[
                { k: "9+", v: "Kategori Produk" },
                { k: "8+", v: "Klien Terpercaya" },
                { k: "100%", v: "Komitmen Mutu" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl font-bold text-white sm:text-4xl">{s.k}</dt>
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
              Tentang Kami
            </span>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
              Menghubungkan <span className="text-gradient-brand">Kualitas</span> dan
              <span className="text-gradient-brand"> Keberlanjutan</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              <strong className="text-navy">PT HTH Sinergi Intranusa</strong> berdiri pada tahun 2024 sebagai
              perusahaan <em>general supply of plastic product</em>. Kami bergerak di produksi, distribusi,
              serta daur ulang biji plastik, kantong kresek, dan kemasan industri.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Dengan pendekatan ekonomi sirkular, kami hadir sebagai partner strategis yang menghadirkan
              produk plastik bermutu tanpa mengorbankan tanggung jawab terhadap lingkungan.
            </p>
          </div>

          <div className="reveal grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-gradient-brand p-8 text-white shadow-brand">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold">Visi</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                Menjadi perusahaan general supply plastik terkemuka di Indonesia yang inovatif, terpercaya,
                dan berkelanjutan.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:mt-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10">
                <Award className="h-6 w-6 text-brand-dark" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-navy">Misi</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {[
                  "Produk berkualitas & layanan cepat",
                  "Inovasi daur ulang untuk ekonomi sirkular",
                  "Kemitraan jangka panjang",
                ].map((m) => (
                  <li key={m} className="flex gap-2">
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
              Nilai Perusahaan
            </span>
            <h3 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">Landasan Kami Bekerja</h3>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="reveal group rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-brand"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-accent text-white shadow-brand transition group-hover:scale-110">
                  <v.icon className="h-6 w-6" />
                </div>
                <h4 className="mt-5 font-display text-lg font-bold text-navy">{v.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUK */}
      <section id="produk" className="relative bg-gradient-to-b from-secondary/40 to-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-dark">
              Produk Kami
            </span>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
              Rangkaian Solusi Plastik Industri
            </h2>
            <p className="mt-4 text-muted-foreground">
              Dari bahan baku hingga kemasan siap pakai — sesuai kebutuhan bisnis Anda.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <article
                key={p.name}
                className={`reveal group relative overflow-hidden rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-brand ${
                  p.best
                    ? "border-orange/40 bg-gradient-to-br from-orange/10 via-card to-card"
                    : "border-border bg-card"
                }`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {p.best && (
                  <span className="absolute right-4 top-4 inline-flex items-center rounded-full bg-orange px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-brand">
                    Best Seller
                  </span>
                )}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-brand transition group-hover:rotate-6">
                  <p.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-navy">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark hover:gap-2 transition-all"
                >
                  Tanya harga <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* KEUNGGULAN */}
      <section id="keunggulan" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-dark">
              Kenapa HTH Plastik
            </span>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
              Empat Alasan Mitra Kami <span className="text-gradient-brand">Kembali Lagi</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Kami tidak hanya menjual plastik — kami memberikan solusi kemasan yang efisien, andal, dan
              berorientasi jangka panjang.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-navy/90"
            >
              Diskusi kebutuhan Anda <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {ADVANTAGES.map((a, i) => (
              <div
                key={a.title}
                className={`reveal rounded-3xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-brand ${
                  i % 2 ? "sm:mt-8" : ""
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand-dark">
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-navy">{a.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KLIEN */}
      <section id="klien" className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-light">
              Klien Kami
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Dipercaya oleh <span className="text-transparent bg-gradient-to-r from-brand-light to-brand bg-clip-text">Perusahaan Terkemuka</span>
            </h2>
            <p className="mt-4 text-white/70">Kolaborasi kami mencakup manufaktur, kesehatan, agrikultur, hingga logistik.</p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CLIENTS.map((c, i) => (
              <div
                key={c}
                className="reveal group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-brand/40 hover:bg-white/10"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-accent text-white text-sm font-bold">
                    {c.split(" ")[0].slice(0, 2)}
                  </div>
                  <span className="text-sm font-semibold leading-tight">{c}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAK */}
      <section id="kontak" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="reveal lg:col-span-2">
            <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-dark">
              Kontak
            </span>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">Mari Bicara</h2>
            <p className="mt-4 text-muted-foreground">
              Konsultasikan kebutuhan kemasan plastik Anda. Tim kami siap merespons dengan cepat.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-brand">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy hover:text-brand-dark">
                    +62 811-8383-180
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-brand">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <a href="mailto:hthsinergiintranusa@gmail.com" className="font-semibold text-navy break-all hover:text-brand-dark">
                    hthsinergiintranusa@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-brand">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Alamat</div>
                  <p className="font-semibold text-navy">
                    Ruko Rose Garden 1 No. 51, Grand Galaxy,<br />
                    Jakasetia, Bekasi Selatan
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="reveal rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8 lg:col-span-3"
          >
            <h3 className="font-display text-xl font-bold text-navy">Kirim Pesan</h3>
            <p className="mt-1 text-sm text-muted-foreground">Isi form berikut — kami akan menghubungi Anda melalui WhatsApp.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="nama" className="text-sm font-medium text-navy">Nama</label>
                <Input id="nama" name="nama" required placeholder="Nama Anda" className="mt-1.5" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-navy">Email</label>
                <Input id="email" name="email" type="email" required placeholder="nama@perusahaan.com" className="mt-1.5" />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="pesan" className="text-sm font-medium text-navy">Pesan</label>
              <Textarea id="pesan" name="pesan" required rows={5} placeholder="Ceritakan kebutuhan produk Anda…" className="mt-1.5" />
            </div>
            <Button
              type="submit"
              className="mt-6 w-full rounded-full bg-gradient-brand py-6 text-base font-semibold text-white shadow-brand hover:brightness-110"
            >
              Kirim Pesan
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-secondary/30">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="" width={32} height={32} className="h-8 w-8" loading="lazy" />
            <div>
              <div className="font-display text-sm font-bold text-navy">HTH Plastik</div>
              <div className="text-[11px] text-muted-foreground">PT HTH Sinergi Intranusa</div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PT HTH Sinergi Intranusa. Solusi Kemasan Anda.
          </p>
        </div>
      </footer>

      {/* Floating WA */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className="animate-float fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-white shadow-brand ring-4 ring-brand/20 transition hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
