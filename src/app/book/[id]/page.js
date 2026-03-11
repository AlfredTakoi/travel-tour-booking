"use client";

import { useState, useEffect, use } from "react";
import { notFound } from "next/navigation";
import { TOURS_DATA } from "@/lib/data";

export default function BookPage({ params }) {
  const { id } = use(params);
  const tour = TOURS_DATA.find((r) => r.id === id);

  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [filters, setFilters] = useState({ date: "-", type: "-", g: "-" });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read from localStorage that was saved by ToursPage
    const savedFilter = localStorage.getItem("stayease-booking-filters");
    if (savedFilter) {
      try {
        setFilters(JSON.parse(savedFilter));
      } catch (e) {
        // Ignore JSON error
      }
    }
  }, []);

  if (!tour) {
    notFound();
  }

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    const msg = `Hello StayEase Traveler!\nI would like to book a tour package: *${tour.name}*\n--------------------\nDate: ${filters.date}\nPackage Type: ${filters.type}\nParticipants: ${filters.g} People\n\nBooked by: *${name}*\nNotes: ${notes || "-"}\n--------------------\nPlease provide further instructions.`;
    window.open(
      `https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div className="py-16 px-6 max-w-4xl mx-auto animate-fade-in-up">
      <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden">
        <div className="bg-slate-900 p-12 text-white relative">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
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
          <h2 className="text-4xl font-black mb-4">Finalize Booking</h2>
          <p className="text-slate-400 text-lg">
            This information will connect you directly to our reservation team via
            WhatsApp.
          </p>
        </div>

        {mounted && (
          <div className="p-12">
            <form className="grid md:grid-cols-2 gap-10 mb-12">
              <div className="space-y-6">
                <label className="block text-sm font-black uppercase tracking-widest text-slate-400">
                  Your Details
                </label>
                <input
                  type="text"
                  placeholder="Full Name as per ID"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-slate-50 border-none rounded-2xl p-5 font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                />
                <textarea
                  rows="4"
                  placeholder="Special requests (optional)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-50 border-none rounded-2xl p-5 font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                ></textarea>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-3xl h-fit">
                <h3 className="font-black text-slate-800 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-600 rounded-lg shrink-0"></span>
                  Package Summary
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-blue-100 pb-3">
                    <span className="text-slate-500 font-medium text-sm">
                      Tour Selection
                    </span>
                    <span className="font-bold text-slate-800 text-right">
                      {tour.name}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-blue-100 pb-3">
                    <span className="text-slate-500 font-medium text-sm">
                      Departure
                    </span>
                    <span className="font-bold text-slate-800 text-right">
                      {filters.date !== "-" ? filters.date : "-"}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-blue-100 pb-3">
                    <span className="text-slate-500 font-medium text-sm">
                      Participants
                    </span>
                    <span className="font-bold text-slate-800 text-right">
                      {filters.g !== "-" ? `${filters.g} People` : "-"}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg pt-4">
                    <span className="font-black text-slate-800">Total (Est.)</span>
                    <span className="font-black text-blue-600">
                      Rp {tour.price.toLocaleString("id-ID")} <span className="text-sm">/ pax</span>
                    </span>
                  </div>
                </div>
              </div>
            </form>

            <button
              onClick={handleWhatsAppRedirect}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-6 rounded-2xl shadow-xl shadow-green-100 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-4 text-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7c.9 0 1.8.1 2.6.4l4.1-1.3-1.3 4.1c.3.8.4 1.7.4 2.6Z" />
                <path d="M8 11.5s1.5 2 3.5 2 3.5-2 3.5-2" />
                <line x1="12" x2="12" y1="8" y2="8.01" />
                <line x1="12" x2="12" y1="15" y2="15.01" />
              </svg>
              Complete on WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
