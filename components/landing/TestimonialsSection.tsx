import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Testimonial = {
  imgSrc: string;
  quote: string;
  author: string;
  role: string;
};

const items: Testimonial[] = [
  {
    imgSrc: "/images/testimonial-1.png",
    quote: "Sekarang saya bisa jual hasil panen dengan harga lebih adil.",
    author: "Ali Topan",
    role: "Petani Beras",
  },
  {
    imgSrc: "/images/testimonial-2.png",
    quote: "Saya bisa beli beras segar langsung dari petani dengan mudah.",
    author: "Olivia Rhye",
    role: "Konsumen",
  },
  {
    imgSrc: "/images/testimonial-3.png",
    quote: "Usaha kecil saya terbantu dengan bahan baku yang stabil dan terjamin.",
    author: "Nabila Hadid",
    role: "Pelaku UMKM",
  },
  {
    imgSrc: "/images/testimonial-4.png",
    quote: "Hasil kerja keras kami akhirnya dihargai dengan harga yang layak.",
    author: "Fajar Nugroho",
    role: "Petani Beras",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="container py-16 scroll-mt-20">
      <SectionHeader
        eyebrow="Testimonials"
        title="Apa Kata Mereka tentang Kami?"
        desc="Testimoni dari petani, konsumen, dan pelaku UMKM yang telah merasakan manfaat AgriculHub."
        align="center"
        // tipografi sesuai pola kamu: Inter 16 / 36 / 16
        eyebrowClass="text-[16px] font-normal"
        titleClass="text-[36px] font-medium tracking-tight"
        descClass="mt-2 text-[16px] font-normal text-slate-500 max-w-2xl mx-auto"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ imgSrc, quote, author, role }: Testimonial) {
  return (
    <article className="relative overflow-hidden rounded-md">
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={imgSrc}
          alt={author}
          fill
          className="object-cover"
          sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw"
          priority
        />

        {/* ikon bulat di kiri-atas */}
        <div className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 ring-1 ring-black/10 backdrop-blur">
          <Quote className="h-5 w-5 text-slate-700" />
        </div>

        {/* kartu putih berisi quote + author */}
        <div className="absolute left-6 right-6 bottom-6 rounded-md bg-white p-4 shadow-xl">
          <p className="text-[16px] font-normal text-slate-900">
            "{quote}"
          </p>
          <div className="mt-3 text-[14px]">
            <span className="font-medium text-slate-900">{author}</span>
            <span className="text-slate-400"> - {role}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
