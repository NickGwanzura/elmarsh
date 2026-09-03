import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Elmarsh Logistics Ltd | Vehicle Shipping, Storage & Cargo Handling",
  description: "Elmarsh Logistics Ltd provides vehicle shipping support, secure vehicle storage, loading, collection, cargo handling and port delivery from Huntingdon, UK.",
  openGraph: {
    title: "Elmarsh Logistics Ltd",
    description: site.tagline,
    siteName: site.name,
    type: "website",
    locale: "en_GB",
    url: site.url,
    images: [{ url: `${site.url}/images/elmarsh-logo.png`, width: 1684, height: 706, alt: site.name }],
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.tagline, images: [`${site.url}/images/elmarsh-logo.png`] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { "@context":"https://schema.org", "@type":"LocalBusiness", name:site.name, description:site.tagline, address:{ "@type":"PostalAddress", streetAddress:"3 Old Thrapston Road", addressLocality:"Huntingdon", postalCode:"PE28 5AD", addressCountry:"GB" }, telephone:["+447729441623","+447908564773"], url:site.url };
  return <html lang="en"><body className={sourceSans.variable}><Header/><main>{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/></body></html>;
}
