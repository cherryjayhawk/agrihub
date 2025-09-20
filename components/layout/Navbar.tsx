import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/80 text-brand-900 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/#hero" className="font-semibold text-brand-900">AgriculHub</Link>

        <nav className="hidden items-center gap-6 text-sm text-brand-900 md:flex">
          <Link href="/#hero" className="hover:text-brand-700">Beranda</Link>
          <Link href="/#problem" className="hover:text-brand-700">Masalah</Link>
          <Link href="/#solution" className="hover:text-brand-700">Solusi</Link>
          <Link href="/#features" className="hover:text-brand-700">Fitur</Link>
          <Link href="/#impact" className="hover:text-brand-700">Dampak</Link>
          <Link href="/#testimonials" className="hover:text-brand-700">Testimoni</Link>
          <Link href="/#cta" className="hover:text-brand-700">Dukung Petani</Link>
          <Link href="/#contact" className="hover:text-brand-700">Kontak</Link>
        </nav>

        <Button asChild className="rounded-none bg-brand-600">
          <Link href="/register">Register</Link>
        </Button>
      </div>
    </header>
  );
}

