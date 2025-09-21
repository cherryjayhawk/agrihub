"use client";

import {
  Twitter,
  Linkedin,
  Facebook,
  Github,
  Dribbble,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-8 flex flex-col gap-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-16 justify-between">
          {/* Brand + Description */}
          <div className="max-w-sm flex flex-col gap-6">
            <h2 className="text-2xl font-medium">AgriculHub</h2>
            <p className="text-[#667085] text-base leading-relaxed">
              Design amazing digital experiences that create more happy in
              the world.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-10">
            <a href="#" className="text-white text-base font-medium hover:text-gray-300">
              Overview
            </a>
            <a href="#" className="text-white text-base font-medium hover:text-gray-300">
              Features
            </a>
            <a href="#" className="text-white text-base font-medium hover:text-gray-300">
              Pricing
            </a>
            <a href="#" className="text-white text-base font-medium hover:text-gray-300">
              Careers
            </a>
            <a href="#" className="text-white text-base font-medium hover:text-gray-300">
              Help
            </a>
            <a href="#" className="text-white text-base font-medium hover:text-gray-300">
              Privacy
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
          <p className="text-[#98A2B3] text-base">
            © {new Date().getFullYear()} AgriculHub. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Twitter className="h-6 w-6 text-[#98A2B3] hover:text-white" />
            <Linkedin className="h-6 w-6 text-[#98A2B3] hover:text-white" />
            <Facebook className="h-6 w-6 text-[#98A2B3] hover:text-white" />
            <Github className="h-6 w-6 text-[#98A2B3] hover:text-white" />
            <Dribbble className="h-6 w-6 text-[#98A2B3] hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
}

