import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type FeatureItem = {
  title: string;
  desc: string;
  iconSrc: string; 
  cta?: { label: string; href: string };
};

const items: FeatureItem[] = [
  {
    title: "Katalog produk segar",
    desc: "Temukan beragam produk segar langsung dari petani lokal",
    iconSrc: "/icons/features/catalog.png", 
    cta: { label: "Lihat Detail", href: "/products" },
  },
  {
    title: "Storytelling Petani",
    desc: "Mengenal lebih dekat petani dan kisah di balik setiap produk",
    iconSrc: "/icons/features/storytelling.png",
  },
  {
    title: "Edukasi & Artikel",
    desc: "Belajar tentang pangan sehat dan praktik pertanian berkelanjutan",
    iconSrc: "/icons/features/education.png",
  },
  {
    title: "Tracking & Pembayaran",
    desc: "Sistem pembayaran mudah dan tracking pesanan real-time",
    iconSrc: "/icons/features/tracking.png",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="container py-16 scroll-mt-20">
      <SectionHeader
        eyebrow="Feature"
        title="Apa yang Bisa Anda Temukan di AgriculHub?"
        desc="Solusi lengkap untuk petani dan konsumen modern."
        align="center"
        eyebrowClass="text-[16px] font-normal"
        titleClass="text-[36px] font-medium tracking-tight"
        descClass="mt-2 text-[16px] font-normal text-slate-500 max-w-2xl mx-auto"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it, idx) => (
          <FeatureCard key={it.title} item={it} highlight={idx === 0} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ item, highlight }: { item: FeatureItem; highlight?: boolean }) {
  return (
    <article
      className={[
        "relative overflow-hidden rounded-2xl border",
        highlight
          ? "bg-gradient-to-br from-brand-100/60 via-white to-white"
          : "bg-slate-50",
      ].join(" ")}
    >
      {/* ikon (pakai image) */}
      <div className="p-6">
        <div className="relative h-14 w-14">
          <Image
            src={item.iconSrc}
            alt={item.title}
            fill
            className="object-contain"
            sizes="56px"
            priority={highlight}
          />
        </div>
      </div>

      {/* isi */}
      <div className="px-6 pb-6">
        <h4 className="text-[18px] font-medium text-slate-900">
          {item.title}
        </h4>
        <p className="mt-2 text-[16px] font-normal leading-[1.6] text-slate-500">
          {item.desc}
        </p>

        {/* CTA hanya untuk kartu pertama */}
        {item.cta && (
          <Link
            href={item.cta.href}
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-brand-900 px-4 py-2 text-[16px] font-medium text-white hover:bg-brand-800"
          >
            {item.cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>

      
      <div
        className={[
          "pointer-events-none absolute inset-0 -z-10",
          highlight
            ? "bg-gradient-to-tr from-transparent via-transparent to-brand-100/30"
            : "bg-gradient-to-tr from-white via-white to-slate-100",
        ].join(" ")}
        aria-hidden="true"
      />
    </article>
  );
}
