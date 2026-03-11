import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Contact | StayEase",
  description: "Contact our specialist team to make your travel plans a reality.",
};

export default function ContactPage() {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto animate-fade-in-up">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            Let's Talk<br />Holidays.
          </h1>
          <p className="text-slate-500 text-xl mb-12">
            Our team of specialists is ready to turn your travel plans into a
            beautiful reality.
          </p>
          <div className="space-y-10">
            <div className="flex gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">
                  Instant Message
                </p>
                <p className="text-2xl font-bold text-slate-800">+62 812 3456 7890</p>
              </div>
            </div>
            <div className="flex gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">
                  Head Office
                </p>
                <p className="text-2xl font-bold text-slate-800">
                  Uluwatu Luxury District, Bali
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal
          delay={0.2}
          className="h-[500px] bg-slate-200 rounded-[3rem] overflow-hidden relative shadow-2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=2070"
            alt="Location Map"
            fill
            unoptimized
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-blue-600/10 pointer-events-none"></div>
        </ScrollReveal>
      </div>
    </div>
  );
}
