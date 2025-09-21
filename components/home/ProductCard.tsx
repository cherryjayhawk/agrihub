"use client";

import Image from "next/image";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number; // in IDR
  image: string;
};

export default function ProductCard({ p }: { p: Product }) {
  return (
    <div className="card card-hover p-4">
      <div className="relative aspect-[4/3] w-full">
        <Image src={p.image} alt={p.name} fill className="object-contain" />
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-medium text-gray-900 line-clamp-1">{p.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{p.description}</p>
        <p className="pt-2 font-semibold">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
          }).format(p.price)}
        </p>
      </div>
    </div>
  );
}
