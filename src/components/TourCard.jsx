import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function TourCard({ tour, index }) {
  return (
    <ScrollReveal
      className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 hover-lift group h-full"
      delay={index * 0.1}
    >
      <div className="relative overflow-hidden h-72">
        <div className="absolute inset-0 bg-slate-200 shimmer"></div>
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-110 relative z-10"
        />
        <div className="absolute top-6 left-6 z-20">
          <span className="bg-blue-600 text-white px-4 py-2 rounded-xl font-black text-sm shadow-xl">
            Rp {tour.price.toLocaleString("id-ID")}/pax
          </span>
        </div>
      </div>
      <div className="p-10">
        <div className="flex items-center gap-2 mb-3">
          <svg
            className="text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4-4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" x2="19" y1="8" y2="14" />
            <line x1="22" x2="16" y1="11" y2="11" />
          </svg>
          <span className="text-xs font-black uppercase tracking-widest text-slate-400">
            {tour.capacity}
          </span>
        </div>
        <h3 className="text-2xl font-black mb-4 group-hover:text-blue-600 transition-colors">
          {tour.name}
        </h3>
        <div className="flex gap-4 mt-8">
          <Link
            href={`/tours/${tour.id}`}
            className="flex-1 flex justify-center items-center border-2 border-slate-100 py-4 rounded-2xl font-black hover:bg-slate-50 transition-all text-slate-600"
          >
            Details
          </Link>
          <Link
            href={`/book/${tour.id}`}
            className="flex-1 flex justify-center items-center bg-slate-900 text-white py-4 rounded-2xl font-black hover:bg-blue-600 transition-all shadow-xl shadow-slate-100"
          >
            Book
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );
}
