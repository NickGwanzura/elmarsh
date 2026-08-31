"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"],
  ["Vehicle Shipping", "/vehicle-shipping"], ["Storage & Loading", "/vehicle-storage-loading"],
  ["Cargo Handling", "/cargo-handling"], ["Past Works", "/past-works"], ["Contact", "/contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  return <header className="site-header">
    <div className="topline"><div className="container top-inner"><span>Operating from Huntingdon, United Kingdom</span><a href="tel:+447729441623"><Phone size={14}/> +44 7729 441623</a></div></div>
    <nav className="container nav" aria-label="Primary navigation">
      <Link className="brand brand-logo" href="/" aria-label="Elmarsh Logistics home"><Image src="/images/elmarsh-logo.png" alt="" width={1684} height={706} priority sizes="(max-width: 760px) 130px, 160px"/></Link>
      <div className="desktop-links">{links.map(([label, href]) => <Link key={href} className={pathname === href ? "active" : ""} href={href}>{label}</Link>)}</div>
      <Link className="button nav-cta" href="/request-a-quote">Request a Quote</Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X/> : <Menu/>}</button>
    </nav>
    {open && <div id="mobile-menu" className="mobile-menu">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<Link className="button" href="/request-a-quote">Request a Quote</Link><a className="button button-outline" href="tel:+447729441623"><Phone size={18}/> Call Elmarsh</a></div>}
  </header>;
}
