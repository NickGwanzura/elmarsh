import type { Metadata } from "next";
import {
  Car, Container, Forklift, House, Package, Tractor, Truck, Warehouse,
  Wrench, Building2, Armchair, Cog
} from "lucide-react";

export const site = {
  name: "Elmarsh Logistics Ltd",
  tagline: "Safe. Reliable. Secure Logistics.",
  address: ["3 Old Thrapston Road", "Huntingdon", "PE28 5AD", "United Kingdom"],
  phones: [
    { name: "Marshall", display: "0044 7729 441623", href: "tel:+447729441623" },
    { name: "Kay", display: "0044 7908 564773", href: "tel:+447908564773" },
  ],
  email: "enquiries@elmarshlogistics.co.uk",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://elmarshlogistics.co.uk",
};

export const services = [
  { title: "Vehicle Shipping", text: "Collection, storage, loading and port delivery support for cars, vans and trucks.", icon: Car },
  { title: "Vehicle Loading Facilities", text: "Professional loading for vehicles, machinery and other wheeled cargo.", icon: Forklift },
  { title: "Vehicle Storage & Parking", text: "Secure temporary parking at our Huntingdon logistics yard.", icon: Warehouse },
  { title: "Collection & Port Delivery", text: "Coordinated UK collection and onward movement to the relevant shipping port.", icon: Truck },
  { title: "Engine & Car Spares", text: "Careful handling for engines, gearboxes, tyres and packaged vehicle components.", icon: Wrench },
  { title: "Household Goods", text: "Furniture, appliances, personal belongings, boxes and consolidated cargo.", icon: House },
  { title: "Mining Equipment", text: "Selected specialised equipment and components, subject to size and weight.", icon: Cog },
  { title: "Farm Equipment", text: "Tractors, implements, irrigation equipment and agricultural supplies.", icon: Tractor },
  { title: "Building Materials", text: "Packaged or palletised construction materials and related equipment.", icon: Building2 },
  { title: "Drums & Packaged Cargo", text: "Declared, correctly labelled drums and general packaged cargo.", icon: Package },
  { title: "Commercial Appliances", text: "Equipment for kitchens, hotels, offices, workshops and retail businesses.", icon: Container },
  { title: "Furniture", text: "Sofas, beds, tables, chairs, cabinets and office furniture.", icon: Armchair },
];

export function pageMetadata(title: string, description: string): Metadata {
  return {
    title: `${title} | Elmarsh Logistics Ltd`,
    description,
    alternates: { canonical: `${site.url}${title === "Home" ? "" : `/${title.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-")}`}` },
    openGraph: { title: `${title} | Elmarsh Logistics Ltd`, description, type: "website", url: site.url, siteName: site.name },
    twitter: { card: "summary_large_image", title: `${title} | Elmarsh Logistics Ltd`, description },
  };
}
