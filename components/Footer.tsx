"use client";

import Image from "next/image";
import { BRAND, FOOTER_LINKS } from "@/lib/data";
import {
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gold-hair/20 bg-ink">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-bright/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16">
        {/* Grid: Brand | Quick Links | Contact */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="relative h-12 w-12">
                <Image
                  src="/logo.png"
                  alt="CPJK Workspace"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </span>
              <div>
                <span className="font-display text-xl text-cream">{BRAND.name}</span>
                <p className="text-sm text-stone">
                  {BRAND.locality}, {BRAND.city}
                </p>
              </div>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-stone-light max-w-sm">
              Professional workspace solutions across two floors in Vadapalani,
              Chennai — designed for teams that are ready to grow.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Quick Links
            </h4>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-stone-light transition-colors duration-300 hover:text-gold-bright"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact & Connect */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Contact & Connect
            </h4>
            <div className="mt-4 space-y-1">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${BRAND.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-2 transition-all duration-300 group"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg text-[#25D366] group-hover:scale-110 transition-transform duration-300">
                  <img width="25" height="25" src="https://img.icons8.com/?size=100&id=BkugfgmBwtEI&format=png&color=000000" alt="" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-stone group-hover:text-[#25D366] transition-colors duration-300">WhatsApp</p>
                  <p className="text-sm text-cream">+91 {BRAND.whatsappNumber}</p>
                </div>
              </a>

              {/* Gmail */}
              <a
                href="mailto:info@cpjkworskpace.com"
                className="flex items-center gap-3 py-2 transition-all duration-300 group"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg text-[#EA4335] group-hover:scale-110 transition-transform duration-300">
                  <img width="25" height="25" src="https://img.icons8.com/fluency/48/gmail-new.png" alt="gmail-new" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-stone group-hover:text-[#EA4335] transition-colors duration-300">Gmail</p>
                  <p className="text-sm text-cream">info@cpjkworskpace.com</p>
                </div>
              </a>

              {/* Location */}
              <a
                href="#location"
                className="flex items-center gap-3 py-2 transition-all duration-300 group"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg text-red-400 group-hover:scale-110 transition-transform duration-300">
                  <img width="25" height="25" src="https://img.icons8.com/?size=100&id=DcygmpZqBEd9&format=png&color=000000" alt="" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-stone group-hover:text-red-400 transition-colors duration-300">Location</p>
                  <p className="text-sm text-cream">
                    {BRAND.locality}, {BRAND.city}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-gold-hair/15 pt-8 sm:flex-row">
          <div className="flex items-center gap-6">
            <span className="text-xs text-stone">Follow us:</span>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${BRAND.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-hair/20 bg-charcoal/30 text-stone-light transition-all duration-300 hover:border-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366] hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-hair/20 bg-charcoal/30 text-stone-light transition-all duration-300 hover:border-[#E4405F] hover:bg-[#E4405F]/10 hover:text-[#E4405F] hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-hair/20 bg-charcoal/30 text-stone-light transition-all duration-300 hover:border-[#1877F2] hover:bg-[#1877F2]/10 hover:text-[#1877F2] hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@cpjkworskpace.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-hair/20 bg-charcoal/30 text-stone-light transition-all duration-300 hover:border-[#EA4335] hover:bg-[#EA4335]/10 hover:text-[#EA4335] hover:scale-110"
                aria-label="Gmail"
              >
                <SiGmail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-stone">
            <Clock className="h-3.5 w-3.5" />
            <span>Mon–Sat: 9:00 AM – 9:00 PM</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gold-hair/10 pt-6 sm:flex-row">
          <p className="text-xs text-stone">
            &copy; {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-xs text-stone/60">
            Made with <span className="text-gold-bright">✦</span> in Chennai
          </p>
        </div>
      </div>
    </footer>
  );
}