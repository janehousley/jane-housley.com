"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@components/navLinks";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full">
      <nav className="max-w-5xl mx-auto px-6 pt-8 pb-6 flex flex-wrap gap-x-8 gap-y-4 justify-between items-center">
        <Link
          href="/"
          className="rainbow-text font-semibold uppercase tracking-[0.25em] text-sm"
        >
          Jane Housley
        </Link>
        <ul className="flex gap-6 text-sm uppercase tracking-[0.15em]">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={href}>
                <Link href={href} className={`rainbow-link ${active ? "is-active" : ""}`}>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
