"use client";

import React from "react";
import Image from "next/image";
import type { Product } from "@/components/home/ProductCard";
import ProductCard from "@/components/home/ProductCard";
import { ChevronDown, Filter as FilterIcon } from "lucide-react";

type Cat = { id: string; name: string; img: string };

const CATS: Cat[] = [
  { id: "sayur",  name: "Sayuran Segar",        img: "/images/cat-veg.png" },
  { id: "buah",   name: "Buah Lokal",           img: "/images/cat-fruit.png" },
  { id: "beras",  name: "Beras & Biji-Bijian",  img: "/images/cat-rice.png" },
  { id: "olahan", name: "Produk Olahan",        img: "/images/cat-processed.png" },
  { id: "rempah", name: "Rempah & Bumbu",       img: "/images/cat-spice.png" },
  { id: "hewani", name: "Produk Hewani",        img: "/images/cat-animal.png" },
];

export default function Catalog() {
  const [activeCat, setActiveCat] = React.useState<string>(""); // "" = semua
  const [sort, setSort] = React.useState<"termurah" | "termahal">("termurah");
  const [products, setProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [err, setErr] = React.useState<string>("");

  // Fetch dari API — coba pakai query ?category= kalau backend sudah siap.
  React.useEffect(() => {
    let url = "/api/products";
    if (activeCat) url += `?category=${encodeURIComponent(activeCat)}`;

    (async () => {
      try {
        setLoading(true);
        setErr("");
        const res = await fetch(url, { cache: "no-store" });
        const data = (await res.json()) as Product[];
        setProducts(data);
      } catch (e) {
        console.error(e);
        setErr("Gagal memuat produk");
        // fallback: kalau API belum support ?category=, ambil semua lalu filter di client
        try {
          const resAll = await fetch("/api/products", { cache: "no-store" });
          const all = (await resAll.json()) as Product[];
          setProducts(
            activeCat ? all.filter(p => (p as any).category === activeCat) : all
          );
        } catch {}
      } finally {
        setLoading(false);
      }
    })();
  }, [activeCat]);

  const sorted = React.useMemo(() => {
    const arr = [...products];
    arr.sort((a, b) => (sort === "termurah" ? a.price - b.price : b.price - a.price));
    return arr;
  }, [products, sort]);

  return (
    <section id="catalog" className="bg-white">
      {/* Padding sesuai Figma (100px) dan kanvas 1440 */}
      <div className="mx-auto max-w-[1440px] px-[100px] py-[100px]">

        {/* ===== KATEGORI (match Figma) ===== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-12 items-start justify-items-center">
          {CATS.map((c) => {
            const active = activeCat === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCat(active ? "" : c.id)}
                className="group flex h-full w-full max-w-[200px] flex-col items-center gap-4"
              >
                {/* wrapper tinggi 147px */}
                <div className="h-[147px] w-full relative">
                  {/* gambar 150x150, offset 8px/-2px + shadow seperti figma */}
                  <div
                    className={[
                      "absolute left-2 top-[-2px] h-[150px] w-[150px] rounded-md overflow-hidden bg-white p-3",
                      "shadow-[0_3px_4px_rgba(0,0,0,0.25)]",
                      active ? "ring-2 ring-brand-500" : "",
                    ].join(" ")}
                  >
                    <Image
                      src={c.img}
                      alt={c.name}
                      fill
                      sizes="150px"
                      className="object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
                <p
                  className={[
                    "text-center text-[18px] leading-[27px] font-medium",
                    active ? "text-brand-700" : "text-[#101828]",
                  ].join(" ")}
                >
                  {c.name}
                </p>
              </button>
            );
          })}
        </div>

        {/* ===== FILTER / SORT BAR (match Figma) ===== */}
        <div className="mt-16 border-b border-black/10 pb-6 flex items-center justify-between">
          <button
            className="opacity-80 inline-flex items-center gap-2 text-[18px] leading-[27px] font-medium text-black"
            // TODO: buka drawer filter kalau nanti ada
            onClick={() => undefined}
          >
            <FilterIcon className="h-[18px] w-[18px]" strokeWidth={1.5} />
            Filter
          </button>

          <div className="opacity-80 inline-flex items-center gap-2">
            <span className="text-[#838383] text-[18px] leading-[27px] font-normal">
              Sort By :
            </span>
            <button
              onClick={() => setSort(prev => (prev === "termurah" ? "termahal" : "termurah"))}
              className="inline-flex items-center gap-2 text-black text-[18px] leading-[27px] font-medium"
            >
              {sort === "termurah" ? "Termurah" : "Termahal"}
              <ChevronDown className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* ===== GRID PRODUK ===== */}
        {loading ? (
          <p className="text-center py-10">Loading produk...</p>
        ) : err ? (
          <p className="text-center py-10 text-red-600">{err}</p>
        ) : sorted.length === 0 ? (
          <p className="text-center py-10">Produk tidak ditemukan.</p>
        ) : (
          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sorted.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

