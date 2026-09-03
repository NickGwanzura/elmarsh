import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { WorksGallery } from "@/components/WorksGallery";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("Past Works", "A track record of truck sales, collections, loading, storage and commercial vehicle delivery by Elmarsh Logistics.");

export default function PastWorksPage() {
  return <>
    <PageHero eyebrow="Past works" title="A track record of moving what matters" description="See examples of the trucks, machinery and commercial cargo our team has collected, loaded, stored and delivered." image="/images/works/loaded-dump-truck.jpg" />
    <section className="section works-section"><div className="container">
      <Reveal className="section-heading"><span className="eyebrow">Our track record</span><h2>Practical work, handled from yard to destination</h2><p>Every job is different. The common thread is careful preparation, secure loading and clear communication at every stage.</p></Reveal>
      <WorksGallery />
    </div></section>
    <section className="cta"><div className="container cta-inner"><div><span className="eyebrow">Have a similar requirement?</span><h2>Let’s plan the next move.</h2><p>Tell us what needs collecting, storing, loading or delivering and we’ll recommend the right route.</p></div><Link className="button" href="/request-a-quote">Request a Quote <ArrowRight size={18}/></Link></div></section>
  </>;
}
