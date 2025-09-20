import Image from "next/image";
import { ArrowRight, DollarSign } from "lucide-react";

const items = [
  {
    title: "Cerita di Balik Produk",
    desc: "Setiap produk menampilkan profil & kisah petani.",
  },
  {
    title: "Akses Pasar Digital",
    desc: "Petani jual langsung ke konsumen dengan harga adil.",
  },
  {
    title: "Belajar & Berkolaborasi",
    desc: "Edukasi pangan sehat & komunitas peduli produk lokal.",
  },
];

export function SolutionSection() {
  return (
    <section id="solution" className="container py-16 scroll-mt-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        {/* Gambar kiri */}
        <div className="relative overflow-hidden min-h-[420px] aspect-[4/3]">
          <Image
            src="/images/solution.png"
            alt="Petani memanen tomat"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-black/10" />
        </div>

        {/* Konten kanan */}
        <div>
          {/* Our Solutions -> Inter regular 16 */}
          <div className="inline-flex items-center rounded-full border px-4 py-2 bg-white text-[16px] font-normal text-slate-700">
            Our Solutions
          </div>

          {/* Title -> Inter medium 36 */}
          <h3 className="mt-4 text-[36px] font-medium tracking-tight text-slate-900">
            AgriculHub Hadir Sebagai Solusi
          </h3>

          {/* Deskripsi -> Inter regular 16 */}
          <p className="mt-3 max-w-xl text-[16px] font-normal text-slate-500">
            Menghubungkan petani dengan generasi muda lewat marketplace digital,
            storytelling, dan komunitas edukatif.
          </p>

          {/* List items */}
          <ul className="mt-8">
            {items.map((it, i) => (
              <li
                key={it.title}
                className={`flex items-start gap-4 py-6 ${
                  i > 0 ? "border-t border-slate-200" : ""
                }`}
              >
                {/* ikon bulat hijau */}
                <div className="mt-0.5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-900">
                  <DollarSign className="h-6 w-6 text-brand-100" />
                </div>

                {/* teks: title -> Inter medium 16, desc -> Inter regular 16 */}
                <div className="flex-1">
                  <div className="text-[16px] font-medium text-slate-900">
                    {it.title}
                  </div>
                  <div className="mt-1 text-[16px] font-normal text-slate-500">
                    {it.desc}
                  </div>
                </div>

                {/* panah kanan */}
                <button
                  aria-label={`Lihat ${it.title}`}
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-300 text-brand-700 hover:bg-brand-50"
                >
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
