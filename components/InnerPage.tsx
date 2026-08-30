import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "./PageHero";

export function InnerPage({ eyebrow, title, description, image, heading, children, bullets }: { eyebrow:string; title:string; description:string; image:string; heading:string; children:React.ReactNode; bullets:string[] }) {
  return <><PageHero eyebrow={eyebrow} title={title} description={description} image={image}/><section className="section"><div className="container split"><div className="split-copy"><span className="eyebrow">Elmarsh capability</span><h2>{heading}</h2>{children}<div className="feature-list">{bullets.map(x=><span key={x}><CheckCircle2/>{x}</span>)}</div><Link className="button" href="/request-a-quote">Request a Quote <ArrowRight size={17}/></Link></div><div className="image-panel"><Image src={image} alt={`${title} handled by Elmarsh Logistics`} fill sizes="(max-width: 760px) 100vw, 50vw"/><div className="image-label">Safe. Reliable. Secure Logistics.</div></div></div></section><section className="cta"><div className="container cta-inner"><div><h2>Tell us what you need to move</h2><p>Share the collection point, destination and cargo details. We will advise on the right next step.</p></div><Link className="button" href="/request-a-quote">Start your enquiry</Link></div></section></>;
}
