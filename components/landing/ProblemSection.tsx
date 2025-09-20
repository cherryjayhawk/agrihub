"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import {
  ShoppingCart,
  BadgeDollarSign,
  BadgeInfo,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Item = {
  title: string;
  desc: string;
  img: string;
  variant?: "green-bottom" | "white-float";
  note?: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  imgWidth?: number;
  imgHeight?: number;
};

const ITEMS: Item[] = [
  {
    title: "Lebih Pilih Produk Impor",
    desc:
      "Produk lokal sulit bersaing dengan produk impor karena rendahnya harga jual, minim branding, dan terbatasnya akses digital.",
    img: "/images/problem-1.png",
    imgWidth: 500,
    imgHeight: 550,
    variant: "green-bottom",
    icon: ShoppingCart,
  },
  {
    title: "Harga Ditekan Tengkulak",
    desc:
      "Sebagian besar petani menjual melalui tengkulak dengan harga murah, membuat pendapatan rata-rata mereka",
    note: "< Rp40 juta/tahun.",
    img: "/images/problem-2.png",
    imgWidth: 500,
    imgHeight: 550,
    variant: "white-float",
    icon: BadgeDollarSign,
  },
  {
    title: "Minim Branding & Digital",
    desc:
      "Produk lokal jarang dikemas menarik dan minim praktik pemasaran modern. Akibatnya, generasi muda sulit menemukan alasan untuk memilih produk lokal.",
    img: "/images/problem-3.png",
    imgWidth: 500,
    imgHeight: 550,
    variant: "white-float",
    icon: BadgeInfo,
  },
];

export function ProblemSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  // drag-to-scroll (desktop)
  const [drag, setDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setDrag(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollStart(trackRef.current.scrollLeft);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!drag || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = x - startX;
    trackRef.current.scrollLeft = scrollStart - walk;
  };
  const stopDrag = () => setDrag(false);

  const scrollBy = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const delta = Math.floor(el.clientWidth * 0.9) * (dir === "left" ? -1 : 1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section id="problem" className="container py-16 scroll-mt-20">
      <SectionHeader
        eyebrow="Problem Statement"
        title="Masalah Pertanian Lokal Hari Ini"
        desc="Produk lokal sulit bersaing dengan produk impor karena rendahnya harga jual, minim branding, dan terbatasnya akses digital."
        align="center"

        eyebrowClass="text-[16px]"                        
        titleClass="text-[36px] font-medium leading-[1.2] tracking-tight"  
        descClass="mt-2 text-[16px] text-slate-600 max-w-2xl mx-auto"  
      />

      <div className="relative">
        {/* tombol panah (desktop) */}
        <button
          aria-label="Sebelumnya"
          onClick={() => scrollBy("left")}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Berikutnya"
          onClick={() => scrollBy("right")}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* gradient tepi */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent" />

        {/* track geser */}
        <div
          ref={trackRef}
          className={`flex gap-6 overflow-x-auto snap-x snap-mandatory px-1 pb-2 scrollbar-hide select-none ${
            drag ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseLeave={stopDrag}
          onMouseUp={stopDrag}
        >
          {ITEMS.map((it, i) => (
            <SlideCard key={i} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SlideCard({ title, desc, img, variant = "white-float", note, icon: Icon, imgWidth = 500, imgHeight = 550 }: Item) {
  return (
    <article
      className="relative snap-start shrink-0 overflow-hidden border bg-white
                 min-w-[320px] md:min-w-[520px]"
    >
      {/* gambar */}
      <div className="relative">
        <Image
          src={img}
          alt={title}
          width={imgWidth}
          height={imgHeight}
          sizes="(min-width: 768px) 520px, 90vw"
          className="h-auto w-full"
        />
        {/* border tipis di kiri/kanan seperti desain */}
        <div className="absolute left-0 top-0 h-full w-px bg-white/50" />
        <div className="absolute right-0 top-0 h-full w-px bg-white/50" />
      </div>

      {/* badge ikon (kiri-atas) */}
      <div className="absolute left-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 backdrop-blur">
        <Icon className="h-5 w-5 text-slate-700" />
      </div>

      {/* overlay konten */}
      {variant === "green-bottom" ? (
        <div className="absolute bottom-0 left-0 right-0 z-10 m-6 bg-[#CEF17B]/90 p-4 shadow-lg">
          <h3 className="font-medium text-[24px] leading-[1.35] tracking-tight">{title}</h3>
          <p className="mt-1 text-[16px] leading-[1.6]">{desc}</p>
        </div>
      ) : (
        <div className="absolute bottom-0 left-0 right-0 z-10 m-6 bg-white p-4 shadow-lg">
          <h3 className="font-medium text-[24px] leading-[1.35] tracking-tight">{title}</h3>
          <p className="mt-1 text-[16px] leading-[1.6] text-slate-600">
            {desc} {note && <span className="font-semibold text-slate-900">{note}</span>}
          </p>
        </div>
      )}

      {/* gradasi bawah biar teks kontras */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/30 to-transparent" />
    </article>
  );
}


