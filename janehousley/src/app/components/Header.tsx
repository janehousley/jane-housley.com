"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "text-red-900 font-semibold border-b-2 border-red9700 pb-1"
      : "text-gray-700 hover:text-red-900";

  return (
    <header className="absolute top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image src="/house.png" alt="Home Icon" width={24} height={24} />
            <h1 className="text-xl font-bold text-gray-800">Jane Housley</h1>
          </div>
        </Link>
        <ul className="flex flex-wrap justify-end space-x-4 text-base font-medium">
          <li><Link href="/" className={linkClass("/")}>Home</Link></li>
          <li><Link href="/resume" className={linkClass("/resume")}>Resume</Link></li>
          <li><Link href="/blog" className={linkClass("/blog")}>Blog</Link></li>
          <li><Link href="/music" className={linkClass("/music")}>Music</Link></li>
          <li><Link href="/contact" className={linkClass("/contact")}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

