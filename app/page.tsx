import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, MapPinned, MessagesSquare, PackageCheck, Phone, ShieldCheck, Truck, Warehouse } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site";
import { HeroSlider } from "@/components/HeroSlider";
import { WorksGallery } from "@/components/WorksGallery";

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
      <HeroSlider />
      <div className="hero-overlay"/><div className="container hero-content"><span className="eyebrow">UK to Southern Africa</span><h1>Seamless logistics from the UK to <span>Southern Africa</span></h1><p className="hero-copy">From truck sales to collection, loading, secure storage and final delivery, Elmarsh brings every stage together from our Huntingdon logistics yard.</p><div className="hero-buttons"><Link className="button" href="/request-a-quote">Request a Quote <ArrowRight size={18}/></Link><a className="button button-outline" href="tel:+447729441623"><Phone size={18}/> Call Elmarsh Logistics</a></div><div className="trust-row"><span><Truck/> Truck Sales</span><span><PackageCheck/> Loading & Storage</span><span><ShieldCheck/> Collection & Delivery</span></div></div>
    </section>
    <section className="section"><div className="container"><Reveal className="section-heading"><span className="eyebrow">What we move</span><h2>Practical logistics support, built around your cargo</h2><p>Whether you are exporting one car or coordinating a mixed commercial load, our team helps keep every stage clear and controlled.</p></Reveal><div className="service-grid">{services.map(({title,text,icon:Icon})=><Reveal className="service-card" key={title}><div className="icon-box"><Icon/></div><h3>{title}</h3><p>{text}</p><Link className="text-link" href="/services">Explore service <ArrowRight size={14}/></Link></Reveal>)}</div></div></section>
    <section className="section section-alt"><div className="container split"><Reveal className="image-panel"><Image src="/images/customer/elmarsh-2.jpg" alt="Vehicle secured on a covered transport trailer" fill sizes="(max-width: 760px) 100vw, 50vw"/><div className="image-label">From UK collection to port delivery</div></Reveal><Reveal className="split-copy"><span className="eyebrow">Vehicle logistics</span><h2>Shipping a Vehicle Overseas?</h2><h3>We Collect It. Store It. Load It. Move It.</h3><p>Cars, vans, trucks and commercial vehicles can be handled from collection through to port delivery. We bring the steps together, with secure space and practical loading support at our Huntingdon yard.</p><div className="feature-list"><span><CheckCircle2/> Vehicle collection</span><span><CheckCircle2/> Temporary storage</span><span><CheckCircle2/> Loading preparation</span><span><CheckCircle2/> Port delivery</span></div><Link className="button" href="/request-a-quote">Request a Vehicle Quote</Link></Reveal></div></section>
    <section className="section"><div className="container split"><Reveal className="split-copy"><span className="eyebrow">Huntingdon logistics yard</span><h2>Secure Vehicle Storage & Loading Facilities</h2><p>Our yard provides the space and facilities required to safely receive, park, store and load vehicles before onward transportation. From one vehicle to multiple units awaiting shipment, speak to our team about available space.</p><div className="feature-list"><span><CheckCircle2/> Vehicle Parking</span><span><CheckCircle2/> Secure Storage</span><span><CheckCircle2/> Professional Loading</span><span><CheckCircle2/> Port Delivery</span></div><Link className="text-link" href="/vehicle-storage-loading">Explore our facilities <ArrowRight size={15}/></Link></Reveal><Reveal className="image-panel"><Image src="/images/customer/elmarsh-6.jpg" alt="Commercial trucks prepared for onward transport" fill sizes="(max-width: 760px) 100vw, 50vw"/><div className="image-label">Secure space for one vehicle or multiple units</div></Reveal></div></section>
    <section className="section section-dark"><div className="container"><Reveal className="section-heading center"><span className="eyebrow">Why Elmarsh</span><h2>Your Cargo. Handled Properly.</h2><p>Responsive service, real logistics capability and a team that keeps communication straightforward.</p></Reveal><div className="benefit-grid">{benefits.map(([Icon,title,text])=><Reveal className="benefit" key={title}><Icon/><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>
    <section className="section"><div className="container"><Reveal className="section-heading"><span className="eyebrow">A clear process</span><h2>How it works</h2><p>Five simple stages take your enquiry from initial details through to loading and onward movement.</p></Reveal><div className="process">{steps.map(([num,title,text])=><Reveal className="step" key={num}><span className="step-num">{num}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>
    <section className="section section-alt works-section"><div className="container"><Reveal className="section-heading"><span className="eyebrow">Past works</span><h2>Experience you can see in action</h2><p>From individual truck collections to mixed commercial loads, our recent work shows the care and capability behind every move.</p></Reveal><WorksGallery preview/><div className="center works-link"><Link className="button button-outline-dark" href="/past-works">View past works <ArrowRight size={17}/></Link></div></div></section>
    <section className="cta"><div className="container cta-inner"><div><span className="eyebrow">Talk to the team</span><h2>Your one-stop logistics shop.</h2><p>Truck sales, collection, delivery, loading and secure storage — tell us what you need and we will coordinate the next step.</p></div><Link className="button" href="/request-a-quote">Request a Quote Today <ArrowRight size={18}/></Link></div></section>
  </>;
}
