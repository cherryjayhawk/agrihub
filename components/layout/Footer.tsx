export function Footer() {
  return (
    <footer id="contact" className="border-t">
      <div className="container grid gap-6 py-10 text-sm md:grid-cols-4">
        <div>
          <div className="font-semibold">AgriculHub</div>
          <p className="mt-2 text-slate-600">
            Solusi digital untuk produk lokal: marketplace, storytelling, edukasi.
          </p>
        </div>
        <div>
          <div className="mb-2 font-medium">Company</div>
          <ul className="space-y-1 text-slate-600">
            <li><a href="/about">About</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/press">Press</a></li>
          </ul>
        </div>
        <div>
          <div className="mb-2 font-medium">Product</div>
          <ul className="space-y-1 text-slate-600">
            <li><a href="/products">Catalog</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/pricing">Pricing</a></li>
          </ul>
        </div>
        <div>
          <div className="mb-2 font-medium">Support</div>
          <ul className="space-y-1 text-slate-600">
            <li><a href="/help">Help Center</a></li>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/terms">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-xs text-slate-500">
          © {new Date().getFullYear()} AgriculHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
