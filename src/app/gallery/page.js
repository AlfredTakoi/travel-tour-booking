import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Gallery | StayEase",
  description: "Take a closer look at the luxury and amenities we offer.",
};

export default function GalleryPage() {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto animate-fade-in-up text-center">
      <h1 className="text-5xl font-black mb-12">Visuals of StayEase</h1>
      <div className="columns-1 sm:columns-2 md:columns-4 gap-4 space-y-4">
        {GALLERY_IMAGES.map((img, i) => (
          <ScrollReveal
            key={i}
            delay={i * 0.05}
            className="group overflow-hidden rounded-[2rem] relative break-inside-avoid"
          >
            <div className="relative w-full" style={{ aspectRatio: i % 2 === 0 ? '3/4' : '4/3' }}>
              <div className="absolute inset-0 bg-slate-200 shimmer"></div>
              <Image
                src={`${img}?auto=format&fit=crop&q=80&w=800`}
                alt={`Gallery ${i + 1}`}
                fill
                unoptimized
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-zoom-in group-hover:scale-105 relative z-10"
              />
            </div>
            <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none"></div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
