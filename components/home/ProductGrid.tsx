"use client";

import ProductCard, { type Product } from "./ProductCard";
import Container from "@/components/ui/Container";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <section id="catalog" className="py-6">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
