"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PromoBanner() {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/promo-bg.jpg')", // ganti sesuai gambar kamu
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black" />

      <div className="relative mx-auto max-w-[1440px] px-[100px] py-[100px]">
        <div className="h-[320px] bg-white p-8 flex flex-col justify-between">
          {/* Title & Image */}
          <div className="relative flex items-center justify-between gap-16">
            <h2 className="text-[36px] font-medium leading-[43.2px] text-black">
              Belanja Produk Segar, Lebih Adil untuk Petani
            </h2>
            <Image
              src="/images/farm-icon.png"
              alt="Promo Icon"
              width={225}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Description & Buttons */}
          <div className="flex items-center justify-between">
            <p className="max-w-[360px] text-[#878787] text-sm leading-[21px]">
              Belanja produk segar langsung dari petani lokal. Harga lebih adil
              untuk petani, pangan sehat & transparan untuk Anda.
            </p>

            <div className="flex gap-4">
              {/* tombol hijau muda → menuju catalog */}
              <Link
                href="#catalog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#CEF17B] text-[#0A4734] text-[16px] font-medium"
              >
                <span>Lihat Katalog</span>
                <ArrowRight className="h-5 w-5" strokeWidth={2} />
              </Link>

              {/* tombol hijau tua */}
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A4734] text-[#CEF17B] text-[16px] font-medium">
                <span>Belanja Sekarang</span>
                <ArrowRight className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
