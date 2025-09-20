import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <section id="cta" className="relative py-16 scroll-mt-20">
      {/* Background image + overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image src="/images/cta-bg.png" alt="Latar ladang" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="container">
        <div className="relative mx-auto max-w-6xl rounded-md bg-white p-8 md:p-12 shadow-xl">
          <div className="absolute right-6 top-6 h-12 w-20 md:h-16 md:w-28 lg:h-20 lg:w-36 pointer-events-none">
            <Image
              src="/images/cta-illustration.png"
              alt="Ilustrasi peternak"
              fill
              className="object-contain"
              sizes="(min-width:1024px) 144px, (min-width:768px) 112px, 80px"
              priority
            />
          </div>

          {/* GRID KONTEN */}
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-[1.2fr_0.8fr] md:grid-rows-[auto_auto]">
            {/* Judul besar */}
            <h3 className="text-[36px] md:text-[44px] font-medium tracking-tight text-slate-900">
              Siap Jadi Bagian Gerakan Pangan Lokal?
            </h3>

            <div />

            {/* Deskripsi */}
            <p className="text-[16px] font-normal text-slate-500 max-w-xl">
              Belanja produk segar langsung dari petani lokal. Harga lebih adil
              untuk petani, pangan sehat & transparan untuk Anda.
            </p>

            {/* Tombol */}
            <div className="flex items-center justify-start md:justify-end gap-4">
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 rounded-md bg-brand-300 px-5 py-2.5 text-[16px] font-medium text-brand-900 hover:bg-brand-400/90 transition"
              >
                Pelajari Program
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-md bg-brand-900 px-5 py-2.5 text-[16px] font-medium text-white hover:bg-brand-800 transition"
              >
                Mulai Belanja
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


