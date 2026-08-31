import Image from "next/image";
import Link from "next/link";

const works = [
  ["/images/works/loaded-dump-truck.jpg", "Commercial truck collection"],
  ["/images/works/crane-loading.jpg", "Crane and machinery loading"],
  ["/images/works/heavy-machinery.jpg", "Heavy equipment transport"],
  ["/images/works/flatbed-collection.jpg", "Flatbed vehicle collection"],
  ["/images/works/fleet-move.jpg", "Fleet movement and delivery"],
  ["/images/works/renault-collection.jpg", "Truck and trailer logistics"],
] as const;

export function WorksGallery({ preview = false }: { preview?: boolean }) {
  const items = preview ? works.slice(0, 4) : works;
  return <div className={`works-grid${preview ? " works-grid-preview" : ""}`}>
    {items.map(([src, label]) => <Link className="works-card" href="/past-works" key={src}>
      <Image src={src} alt={label} fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" />
      <span className="works-card-overlay"><span>{label}</span></span>
    </Link>)}
  </div>;
}
