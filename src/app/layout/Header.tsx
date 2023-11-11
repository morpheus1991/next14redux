"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";
const Header = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <div>
      <p className="text-center">header</p>
      <nav>
        <ul className="w-full flex justify-center gap-x-2">
          <li>
            <Link href="/" className={`${isActive("/") ? "text-red-500" : ""}`}>
              home
            </Link>
          </li>
          <li>
            <Link
              href="/testPage"
              className={`${isActive("/testPage") ? "text-red-500" : ""}`}
            >
              testPage
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
