"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

export default function Navbar() {
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.qty, 0)
  );

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="flex items-center justify-between px-[75px] py-2">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-1 px-6 py-2 rounded-full shadow-sm">
          <span className="text-black text-[24px] font-semibold leading-6 font-sans">
            AgriculHub
          </span>
          <span className="text-black text-[16px] font-semibold leading-6 font-sans">©</span>
        </Link>

        {/* Search + Cart + Avatar */}
        <div className="flex items-center gap-6">
          {/* Search input pakai shadcn/ui */}
          <div className="relative w-[270px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Cari produk segar..."
              className="pl-10 rounded-full border-gray-300 text-sm"
            />
          </div>

          {/* Cart button */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-black hover:text-brand-600" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-500 text-[#0A4734] text-xs font-semibold rounded-full px-1.5 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Avatar */}
          <button className="w-6 h-6 rounded-full border border-black/10 overflow-hidden">
            <Image
              src="/images/avatar.png"
              alt="Avatar"
              width={24}
              height={24}
              className="object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
