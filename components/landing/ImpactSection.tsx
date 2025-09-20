import Image from "next/image";
import { Package, Users, HeartHandshake } from "lucide-react";
import { DollarSign } from "lucide-react";

export function ImpactSection() {
  return (
    <section id="impact" className="py-16 bg-[#CEF17B] scroll-mt-20">
      <div className="container">
        <div className="text-center">
          <h3 className="text-[36px] font-medium tracking-tight text-slate-900">
            Setiap Belanja Anda, <br className="hidden md:block" />
            Punya Dampak Nyata
          </h3>
          <p className="mt-2 text-[16px] font-normal text-slate-700">
            Belanja Anda bukan hanya transaksi, tapi kontribusi untuk masa depan.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <SdgCard
            label="2  ZERO HUNGER"
            imgSrc="/images/impact/sdg2.png"
            title="Zero Hunger (SDG 2)"
            desc="Memastikan pangan sehat dan terjangkau untuk semua,"
          />
          <SdgCard
            label="1  NO POVERTY"
            imgSrc="/images/impact/sdg1.png"
            title="No Poverty (SDG 1)"
            desc="Mengenal lebih dekat petani dan kisah di balik setiap produk"
          />

          <StatCard
            className="md:col-span-2"
            Icon={Package}
            value="24.500+"
            caption="Pesanan produk lokal tersalurkan sejak peluncuran"
          />
          <StatCard
            Icon={Users}
            value="3.200+"
            caption="Petani & UMKM yang mendapat akses pasar digital"
          />
          <StatCard
            Icon={HeartHandshake}
            value="120+"
            caption="Komunitas/mitra yang mendukung distribusi & edukasi"
          />
        </div>
      </div>
    </section>
  );
}

function SdgCard({
  label,
  imgSrc,
  title,
  desc,
}: {
  label?: string;
  imgSrc: string;
  title: string;
  desc: string;
}) {
  return (
    <article className="rounded-md bg-brand-900 text-brand-50 p-6">
      <div className="relative mt-2 h-16 w-16 md:h-20 md:w-20">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-contain"
          sizes="(min-width:768px) 80px, 64px"
          priority
        />
      </div>

      <div className="mt-5 text-[20px] font-medium">{title}</div>
      <p className="mt-2 text-[16px] font-normal text-brand-100/95">{desc}</p>
    </article>
  );
}

function StatCard({
  value,
  caption,
  Icon,
  className = "",
}: {
  value: string;
  caption: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // +++
  className?: string;
}) {
  return (
    <article
      className={
        "rounded-md bg-brand-900 text-white p-6 flex flex-col justify-center " + className
      }
    >
      {/* ikon kecil kiri-atas */}
      <div className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-brand-200/40">
        <Icon className="h-4 w-4 text-brand-100" /> {/* +++ pakai ikon dari props */}
      </div>

      {/* angka & caption */}
      <div className="mt-4 text-3xl font-semibold leading-none">{value}</div>
      <div className="mt-2 text-[14px] font-normal text-brand-100/90">{caption}</div>
    </article>
  );
}

