"use client";

import { Hero } from "@/components/home/Hero";
import Catalog from "@/components/home/Catalog";
import { PromoBanner } from "@/components/home/PromoBanner";

export default function HomeContent() {
  return (
    <main className="pb-0">
      <Hero />
      <Catalog />
      <PromoBanner />
    </main>
  );
}

