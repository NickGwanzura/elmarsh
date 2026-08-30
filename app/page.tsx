import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, MapPinned, MessagesSquare, PackageCheck, Phone, ShieldCheck, Truck, Warehouse } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site";

export default function Home() {
  const benefits = [
    [ShieldCheck,"Secure Yard Facilities","A dependable Huntingdon base for receiving, parking and preparing cargo."],
    [PackageCheck,"Vehicle Loading Expertise","Practical facilities and an experienced approach to varied vehicles and machinery."],
    [Truck,"Collection & Delivery Support","Coordinated movement from collection point to our yard and onward to port."],
    [Warehouse,"Flexible Cargo Handling","Support for vehicles, spares, household goods, equipment and packaged cargo."],
    [MessagesSquare,"Reliable Communication","Straightforward updates and a named team you can speak to directly."],
    [MapPinned,"Convenient UK Location","Operating from Huntingdon with access to major road and port routes."],
  ] as const;
  const steps = [
    ["01","Send Us Your Details","Tell us the item, collection location, dimensions and destination."],
    ["02","Receive Your Quote","We assess the requirement and recommend the right logistics solution."],
    ["03","Collection or Yard Delivery","Deliver to our Huntingdon yard or ask us to arrange collection."],
    ["04","Storage & Preparation","Cargo can be stored while onward arrangements are finalised."],
    ["05","Loading & Port Delivery","We prepare and load cargo for the relevant port or logistics partner."],
  ];
  return <>
    <section className="hero">
      <Image src="https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&w=2000&q=85" alt="Logistics trucks and cargo operations at a transport yard" fill priority sizes="100vw"/>
      <div className="hero-overlay"/><div className="container hero-content"><span className="eyebrow">Safe. Reliable. Secure Logistics.</span><h1>Safe, Reliable & <span>Secure</span> Logistics</h1><p className="hero-copy">Vehicle storage, loading, collection and shipping support across the UK — from our Huntingdon logistics yard to ports and onward partners.</p><div className="hero-buttons"><Link className="button" href="/request-a-quote">Request a Quote <ArrowRight size={18}/></Link><a className="button button-outline" href="tel:+447729441623"><Phone size={18}/> Call Elmarsh Logistics</a></div><div className="trust-row"><span><ShieldCheck/> Secure Yard Facilities</span><span><PackageCheck/> Vehicle Loading</span><span><Truck/> UK Collection Support</span></div></div>
    </section>
    <section className="section"><div className="container"><Reveal className="section-heading"><span className="eyebrow">What we move</span><h2>Practical logistics support, built around your cargo</h2><p>Whether you are exporting one car or coordinating a mixed commercial load, our team helps keep every stage clear and controlled.</p></Reveal><div className="service-grid">{services.map(({title,text,icon:Icon})=><Reveal className="service-card" key={title}><div className="icon-box"><Icon/></div><h3>{title}</h3><p>{text}</p><Link className="text-link" href="/services">Explore service <ArrowRight size={14}/></Link></Reveal>)}</div></div></section>
    <section className="section section-alt"><div className="container split"><Reveal className="image-panel"><Image src="https://images.unsplash.com/photo-1566288623394-377af472d81b?auto=format&fit=crop&w=1400&q=85" alt="Vehicles prepared for international logistics and shipping" fill sizes="(max-width: 760px) 100vw, 50vw"/><div className="image-label">From UK collection to port delivery</div></Reveal><Reveal className="split-copy"><span className="eyebrow">Vehicle logistics</span><h2>Shipping a Vehicle Overseas?</h2><h3>We Collect It. Store It. Load It. Move It.</h3><p>Cars, vans, trucks and commercial vehicles can be handled from collection through to port delivery. We bring the steps together, with secure space and practical loading support at our Huntingdon yard.</p><div className="feature-list"><span><CheckCircle2/> Vehicle collection</span><span><CheckCircle2/> Temporary storage</span><span><CheckCircle2/> Loading preparation</span><span><CheckCircle2/> Port delivery</span></div><Link className="button" href="/request-a-quote">Request a Vehicle Quote</Link></Reveal></div></section>
    <section className="section"><div className="container split"><Reveal className="split-copy"><span className="eyebrow">Huntingdon logistics yard</span><h2>Secure Vehicle Storage & Loading Facilities</h2><p>Our yard provides the space and facilities required to safely receive, park, store and load vehicles before onward transportation. From one vehicle to multiple units awaiting shipment, speak to our team about available space.</p><div className="feature-list"><span><CheckCircle2/> Vehicle Parking</span><span><CheckCircle2/> Secure Storage</span><span><CheckCircle2/> Professional Loading</span><span><CheckCircle2/> Port Delivery</span></div><Link className="text-link" href="/vehicle-storage-loading">Explore our facilities <ArrowRight size={15}/></Link></Reveal><Reveal className="image-panel"><Image src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1400&q=85" alt="Secure vehicle and commercial logistics storage facility" fill sizes="(max-width: 760px) 100vw, 50vw"/><div className="image-label">Secure space for one vehicle or multiple units</div></Reveal></div></section>
    <section className="section section-dark"><div className="container"><Reveal className="section-heading center"><span className="eyebrow">Why Elmarsh</span><h2>Your Cargo. Handled Properly.</h2><p>Responsive service, real logistics capability and a team that keeps communication straightforward.</p></Reveal><div className="benefit-grid">{benefits.map(([Icon,title,text])=><Reveal className="benefit" key={title}><Icon/><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>
    <section className="section"><div className="container"><Reveal className="section-heading"><span className="eyebrow">A clear process</span><h2>How it works</h2><p>Five simple stages take your enquiry from initial details through to loading and onward movement.</p></Reveal><div className="process">{steps.map(([num,title,text])=><Reveal className="step" key={num}><span className="step-num">{num}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>
    <section className="cta"><div className="container cta-inner"><div><span className="eyebrow">Talk to the team</span><h2>Need to Move a Vehicle or Cargo?</h2><p>Send us the collection location, cargo details and destination and our team will advise you on the best way to move it.</p></div><Link className="button" href="/request-a-quote">Request a Quote Today <ArrowRight size={18}/></Link></div></section>
  </>;
}
