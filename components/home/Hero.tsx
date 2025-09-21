"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[321px] font-sans">
      {/* BG gambar + gradient (0% → 77%) */}
      <Image
        src="/images/hero-home-tractor.jpg" // ganti sesuai asetmu
        alt="Panen pagi di lahan petani"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_77%)]" />

      {/* Konten tengah, padding kiri/kanan 100px sesuai figma */}
      <div className="absolute inset-0">
        <div className="h-full px-[100px]">
          <div className="flex h-full items-center justify-between gap-[75px]">
            {/* Kiri: teks (width 538px, gap 24px) */}
            <div className="w-[538px] flex flex-col justify-center items-start gap-6">
              <h1 className="text-white text-[36px] leading-[43.2px] font-medium">
                Hasil Panen Segar, Langsung dari Petani
              </h1>
              <p className="text-[#8B8B8B] text-[18px] leading-[27px] font-normal">
                Temukan beras, sayur, buah, dan bumbu dapur pilihan. 
                Harga adil untuk petani, belanja aman dan transparan untuk Anda.
              </p>
            </div>

            {/* Kanan: tombol (px=24, py=12, gap ≈ 11.36px) */}
            <Link
              href="#catalog"
              className="inline-flex items-center justify-center gap-[11.36px]
                         px-6 py-3 rounded-[6px] bg-[#CEF17B] text-[#0A4734]
                         text-[18px] leading-6 font-medium hover:brightness-95
                         focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <span>Jelajahi Produk</span>
              <ArrowRight className="h-5 w-5" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
