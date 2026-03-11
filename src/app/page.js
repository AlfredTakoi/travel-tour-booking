import Image from "next/image";
import Link from "next/link";
import { TOURS_DATA } from "@/lib/data";
import TourCard from "@/components/TourCard";
import ScrollReveal from "@/components/ScrollReveal";
import SmoothScrollLink from "@/components/SmoothScrollLink";

export default function Home() {
  const featuredTours = TOURS_DATA.filter((r) => r.featured).slice(0, 3);

  return (
    <div className="animate-fade-in-up">
      {/* Hero with Ken Burns Effect */}
      <div className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 scale-110 animate-kenburns">
          <Image
            src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=2070"
            alt="Bali Travel Concept"
            fill
            unoptimized
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-white w-full">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight animate-fade-in-up">
            Limitless<br />
            <span className="text-blue-500">Adventures.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-xl text-slate-200 leading-relaxed animate-fade-in-up animate-delay-1000">
            Explore authentic beauty and create unforgettable memories in
            your dream destinations.
          </p>
          <div className="flex flex-wrap gap-5 animate-fade-in-up animate-delay-1000">
            <Link
              href="/tours"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-blue-900/20 transform hover:-translate-y-1"
            >
              View Packages
            </Link>
            <SmoothScrollLink
              targetId="about"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all border border-white/30"
            >
              Learn More
            </SmoothScrollLink>
          </div>
        </div>
      </div>

      {/* Scroll Reveal Content */}
      <ScrollReveal className="py-32 bg-white" id="about">
        <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
            <div className="relative h-[500px] w-full hover-lift">
              <Image
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=2070"
                alt="Bali Culture"
                fill
                unoptimized
                className="rounded-[2rem] shadow-2xl z-10 object-cover"
              />
            </div>
          </div>
          <div>
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-bold text-sm tracking-widest uppercase mb-6">
              Our Mission
            </span>
            <h2 className="text-5xl font-extrabold mb-8 leading-tight">
              Experiences<br />
              Tailored For You.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              We don't just offer trips; we design adventures for your story. 
              With professional local guides and premium amenities, StayEase Traveler 
              delivers the best service for explorers worldwide.
            </p>
            <div className="grid grid-cols-2 gap-10">
              <div className="group cursor-default">
                <h4 className="font-black text-4xl text-blue-600 group-hover:scale-110 transition-transform inline-block">
                  15+
                </h4>
                <p className="text-slate-400 font-medium uppercase text-xs tracking-widest mt-2">
                  Tourism Awards
                </p>
              </div>
              <div className="group cursor-default">
                <h4 className="font-black text-4xl text-blue-600 group-hover:scale-110 transition-transform inline-block">
                  100%
                </h4>
                <p className="text-slate-400 font-medium uppercase text-xs tracking-widest mt-2">
                  Customer Satisfaction
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Features */}
      <div className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-black mb-6">World-Class Services</h2>
              <p className="text-slate-500 text-lg">
                Designed to provide peace of mind and an unparalleled 
                holiday experience.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <ScrollReveal delay={0}>
              <div className="bg-white p-10 h-full rounded-[2.5rem] shadow-sm hover-lift border border-slate-100">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4-4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Professional Guides</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Dedicated, licensed local tour guides ready to accompany 
                  every step of your adventure.
                </p>
              </div>
            </ScrollReveal>
            {/* Card 2 */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-10 h-full rounded-[2.5rem] shadow-sm hover-lift border border-slate-100">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                    <circle cx="7" cy="17" r="2" />
                    <path d="M9 17h6" />
                    <circle cx="17" cy="17" r="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Comfortable Transport</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Clean, modern private fleet always ready to take you safely 
                  and comfortably.
                </p>
              </div>
            </ScrollReveal>
            {/* Card 3 */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white p-10 h-full rounded-[2.5rem] shadow-sm hover-lift border border-slate-100">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Authentic Culinary</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Relish the delights of select local delicacies prepared 
                  specially during your journey.
                </p>
              </div>
            </ScrollReveal>
            {/* Card 4 */}
            <ScrollReveal delay={0.3}>
              <div className="bg-white p-10 h-full rounded-[2.5rem] shadow-sm hover-lift border border-slate-100">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20M2 12h20" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our expert team is ready to assist with all your queries 
                  and needs whenever required.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Featured Highlight */}
      <div className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-5xl font-black mb-4">Exclusive Picks</h2>
                <p className="text-slate-500 text-lg">
                  Highest rated tour packages by our guests this month.
                </p>
              </div>
              <Link
                href="/tours"
                className="group flex items-center gap-3 font-bold text-blue-600"
              >
                View All
                <span className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-10">
            {featuredTours.map((tour, i) => (
              <TourCard key={tour.id} tour={tour} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
