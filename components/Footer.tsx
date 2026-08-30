import Link from "next/link";
import Image from "next/image";
import { Camera, Globe2, MapPin, Network, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() { return <footer className="footer">
  <div className="container footer-grid">
    <div><Link className="footer-logo" href="/" aria-label="Elmarsh Logistics home"><Image src="/images/elmarsh-logo.png" alt="Elmarsh Logistics Ltd" width={1684} height={706} sizes="(max-width: 760px) 260px, 300px"/></Link><p>{site.tagline}</p><p className="address"><MapPin size={18}/><span>{site.address.map(x => <span key={x}>{x}<br/></span>)}</span></p></div>
    <div><h3>Quick links</h3><Link href="/about">About us</Link><Link href="/services">Services</Link><Link href="/contact">Contact</Link><Link href="/request-a-quote">Request a quote</Link></div>
    <div><h3>Core services</h3><Link href="/vehicle-shipping">Vehicle shipping</Link><Link href="/vehicle-storage-loading">Storage & loading</Link><Link href="/cargo-handling">Cargo handling</Link></div>
    <div><h3>Speak to our team</h3>{site.phones.map(p => <a key={p.name} href={p.href}><Phone size={16}/>{p.name}: {p.display}</a>)}<a href={`mailto:${site.email}`}>{site.email}</a><div className="socials"><a href="#" aria-label="Facebook placeholder"><Globe2/></a><a href="#" aria-label="Instagram placeholder"><Camera/></a><a href="#" aria-label="LinkedIn placeholder"><Network/></a></div></div>
  </div>
  <div className="container footer-bottom"><span>© {new Date().getFullYear()} Elmarsh Logistics Ltd. All rights reserved.</span><span><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms & Conditions</Link></span></div>
  </footer> }
