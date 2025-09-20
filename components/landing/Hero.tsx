import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";

// Playfair hanya untuk kata "Future"
const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" }); // medium

export function Hero() {
  return (
    <section id="hero" className="relative scroll-mt-20 pt-14 md:pt-16">
      {/* background hero: VIDEO + overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"            // bisa "metadata" kalau mau hemat data
          poster="/images/hero.png" // tampil sebelum video siap
          aria-hidden="true"
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* overlay gradasi agar teks kontras */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/40" />
      </div>

      {/* content */}
      <div className="relative container py-24 md:py-36 text-white">
        {/* H1: Inter medium 64, kata Future pakai Playfair medium 64 */}
        <h1 className="max-w-3xl text-[48px] md:text-[64px] font-medium leading-[1.1] tracking-tight">
          Empowering Farmers, <br />
          Connecting Markets, <br />
          Building the{" "}
          <span className={`${playfair.className} font-medium italic`}>
            Future
          </span>
          .
        </h1>

        {/* Subtext: Inter regular 24 */}
        <p className="mt-4 max-w-2xl text-[18px] md:text-[24px] font-normal text-slate-200">
          Belanja produk segar langsung dari petani lokal. Harga lebih adil untuk petani,
          pangan sehat & transparan untuk Anda.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          {/* Belanja Sekarang: Inter medium 18 + ikon panah ke kanan */}
          <Button asChild className="bg-[#0A4734] text-[#CEF17B] text-[16px] md:text-[18px] font-medium rounded-none hover:bg-[#0A4734]/90">
            <Link href="/products" className="inline-flex items-center">
              Belanja Sekarang
              <ArrowRight className="ml-2 h-4 w-4 text-[#CEF17B]" />
            </Link>
          </Button>

          {/* Pelajari lebih lanjut: Inter regular 18 + ikon panah ke kanan */}
          <Button
            asChild
            className="bg-[#CEF17B] text-[#0A4734] text-[16px] md:text-[18px] font-normal rounded-none hover:bg-[#CEF17B]/90"
          >
            <Link href="#problem" className="inline-flex items-center">
              Pelajari lebih lanjut
              <ArrowRight className="ml-2 h-4 w-4 text-[#0A4734]" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}



