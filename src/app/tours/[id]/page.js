import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TOURS_DATA } from "@/lib/data";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const tour = TOURS_DATA.find((r) => r.id === id);
  if (!tour) return { title: "Package Not Found" };
  return {
    title: `${tour.name} | StayEase Traveler`,
    description: `Every moment in ${tour.name} is designed to provide an unforgettable holiday experience. Capacity: ${tour.capacity}`,
  };
}

export default async function TourDetailPage({ params }) {
  const { id } = await params;
  const tour = TOURS_DATA.find((r) => r.id === id);

  if (!tour) {
    notFound();
  }

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto animate-fade-in-up">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="sticky top-32">
          <div className="relative w-full h-[600px] hover-lift">
            <div className="absolute inset-0 bg-slate-200 shimmer rounded-[3rem]"></div>
            <Image
              src={tour.image}
              alt={tour.name}
              fill
              unoptimized
              className="object-cover rounded-[3rem] shadow-2xl relative z-10"
            />
          </div>
        </div>
        <div>
          <Link
            href="/tours"
            className="text-slate-400 font-bold mb-8 hover:text-blue-600 transition-colors flex items-center gap-2 w-fit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Kembali
          </Link>
          <h1 className="text-6xl font-black mb-6">{tour.name}</h1>
          <p className="text-3xl font-black text-blue-600 mb-10">
            Rp {tour.price.toLocaleString("id-ID")}{" "}
            <span className="text-lg text-slate-400 font-medium italic">
              / pax incl. tax
            </span>
          </p>

          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm mb-10">
            <h3 className="font-black text-xl mb-6">Package Includes</h3>
            <div className="grid grid-cols-2 gap-6">
              {tour.amenities.map((a, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-slate-600 font-semibold"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full shrink-0"></span>{" "}
                  {a}
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-500 text-lg leading-relaxed mb-12">
            Every moment in {tour.name} is specially designed to
            provide an unforgettable holiday experience. Enjoy premium services,
            exclusive amenities, and authentic destination exploration with our
            expert guides.
          </p>

          <Link
            href={`/book/${tour.id}`}
            className="w-full block text-center bg-blue-600 text-white py-6 rounded-2xl font-black text-xl shadow-2xl shadow-blue-100 transform hover:-translate-y-1 transition-all"
          >
            Book Package Now
          </Link>
        </div>
      </div>
    </div>
  );
}
