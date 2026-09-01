import Image from "next/image";
import Link from "next/link";

const works = [
  ["/images/works/loaded-dump-truck.jpg", "Commercial truck collection"],
  ["/images/works/crane-loading.jpg", "Crane and machinery loading"],
  ["/images/works/heavy-machinery.jpg", "Heavy equipment transport"],
  ["/images/works/flatbed-collection.jpg", "Flatbed vehicle collection"],
  ["/images/works/fleet-move.jpg", "Fleet movement and delivery"],
  ["/images/works/renault-collection.jpg", "Truck and trailer logistics"],
  ["/images/works/scania-machinery.jpg", "Scania machinery move"],
  ["/images/works/daf-flatbed.jpg", "DAF flatbed collection"],
  ["/images/works/tractor-unit.jpg", "Tractor unit transport"],
  ["/images/works/red-daf.jpg", "Red DAF fleet movement"],
  ["/images/works/machinery-load.jpg", "Construction machinery loading"],
  ["/images/works/iveco-collection.jpg", "Iveco commercial collection"],
  ["/images/works/loaded-truck.jpg", "Loaded truck delivery"],
  ["/images/works/blue-scania.jpg", "Blue Scania recovery"],
  ["/images/works/renault-trailer.jpg", "Renault trailer movement"],
  ["/images/works/truck-yard.jpg", "Commercial vehicles in the yard"],
  ["/images/works/work-17.jpg", "Vehicle loading operation"],
  ["/images/works/work-18.jpg", "Heavy haulage preparation"],
  ["/images/works/work-19.jpg", "Commercial truck collection"],
  ["/images/works/work-20.jpg", "Secure fleet loading"],
  ["/images/works/work-21.jpg", "Machinery transport support"],
  ["/images/works/work-22.jpg", "Truck recovery and delivery"],
  ["/images/works/work-23.jpg", "Yard-to-port logistics"],
  ["/images/works/work-24.jpg", "Mixed commercial cargo"],
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
