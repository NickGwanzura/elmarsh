"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  { type: "video", src: "/videos/truck-loading-1.mp4", poster: "/images/works/loaded-dump-truck.jpg", alt: "Commercial truck being prepared for transport", label: "Commercial vehicle loading" },
  { type: "video", src: "/videos/truck-loading-2.mp4", poster: "/images/works/crane-loading.jpg", alt: "Heavy vehicle loading in a logistics yard", label: "Heavy equipment handling" },
  { type: "video", src: "/videos/truck-loading-3.mp4", poster: "/images/works/fleet-move.jpg", alt: "Fleet vehicles secured for onward movement", label: "Fleet collection and delivery" },
  { type: "image", src: "/images/customer/elmarsh-7.jpg", poster: undefined, alt: "Multiple trucks lined up for logistics movement", label: "Fleet and commercial cargo" },
  { type: "image", src: "/images/customer/elmarsh-16.jpg", poster: undefined, alt: "Agricultural machinery secured on a transport vehicle", label: "Machinery logistics" },
  { src: "/images/customer/elmarsh-7.jpg", alt: "Multiple trucks lined up for logistics movement", label: "Fleet and commercial cargo" },
  { src: "/images/customer/elmarsh-16.jpg", alt: "Agricultural machinery secured on a transport vehicle", label: "Machinery logistics" },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const go = (direction: number) => setActive((current) => (current + direction + slides.length) % slides.length);

  return <div className="hero-gallery" role="region" aria-roledescription="carousel" aria-label="Elmarsh logistics operations">
    <div className="hero-gallery-image" aria-live="polite">
      {slides[active].type === "video" ? <video key={slides[active].src} src={slides[active].src} poster={slides[active].poster} autoPlay muted loop playsInline preload="metadata" aria-label={slides[active].alt} /> : <Image key={slides[active].src} src={slides[active].src} alt={slides[active].alt} fill priority={active === 0} sizes="100vw" />}
    </div>
    <div className="hero-gallery-caption">{slides[active].label}</div>
    <div className="hero-gallery-controls">
      <button type="button" onClick={() => go(-1)} aria-label="Previous image"><ChevronLeft size={20} /></button>
      <button type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Play image slider" : "Pause image slider"}>{paused ? <Play size={17} /> : <Pause size={17} />}</button>
      <button type="button" onClick={() => go(1)} aria-label="Next image"><ChevronRight size={20} /></button>
    </div>
    <div className="hero-gallery-dots" aria-label="Choose a slide">
      {slides.map((slide, index) => <button key={slide.src} type="button" className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-label={`Show slide ${index + 1}`} aria-current={index === active ? "true" : undefined} />)}
    </div>
  </div>;
}
