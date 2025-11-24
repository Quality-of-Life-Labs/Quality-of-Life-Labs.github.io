"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Home" },
  { href: "/experiments", label: "Experiments" },
  { href: "/about", label: "About" },
];

export default function NavTabs() {
  const pathname = usePathname();

  return (
    <nav className="px-4 py-1.5 text-sm font-medium text-slate-800 backdrop-blur">
      <ul className="flex items-center gap-1">
        {tabs.map((tab) => {
          const isActive =
            tab.href === "/"
              ? pathname === "/"
              : pathname === tab.href || pathname.startsWith(`${tab.href}/`);
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                data-active={isActive}
                className="rounded-full px-4 py-1.5 capitalize text-slate-500 transition hover:text-slate-700 data-[active=true]:bg-slate-200 data-[active=true]:text-slate-900"
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

