"use client";

import { useState, useEffect } from "react";
import { TOURS_DATA } from "@/lib/data";
import TourCard from "@/components/TourCard";

export default function ToursPage() {
  const [date, setDate] = useState("");
  const [type, setType] = useState("Private");
  const [guests, setGuests] = useState("2");
  const [isUpdating, setIsUpdating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Set default dates
    const d = new Date();
    d.setDate(d.getDate() + 2);
    const futureDate = d.toISOString().split("T")[0];
    setDate(futureDate);

    // Save defaults to localStorage so booking page can access them
    localStorage.setItem(
      "stayease-booking-filters",
      JSON.stringify({ date: futureDate, type: "Private", g: "2" })
    );
  }, []);

  const handleApplyFilters = () => {
    setIsUpdating(true);
    
    // Save to localStorage
    localStorage.setItem(
      "stayease-booking-filters",
      JSON.stringify({ date, type, g: guests })
    );

    setTimeout(() => {
      setIsUpdating(false);
    }, 800);
  };

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto animate-fade-in-up">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-6">Tour Packages</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Discover epic destinations this month and plan your adventure
          with our professional guides.
        </p>
      </div>

      {/* Enhanced Filter Bar */}
      {mounted && (
        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 grid md:grid-cols-4 gap-6 mb-20 items-end">
          <div className="space-y-2">
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400">
              Departure Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-slate-50 border-none rounded-xl p-4 font-bold text-slate-700 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400">
              Package Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full bg-slate-50 border-none rounded-xl p-4 font-bold text-slate-700 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all appearance-none"
            >
              <option value="Private">Private Tour</option>
              <option value="Group">Group/Open Trip</option>
              <option value="Honeymoon">Honeymoon</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400">
              Number of Participants
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-slate-50 border-none rounded-xl p-4 font-bold text-slate-700 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all appearance-none"
            >
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="4">4 People</option>
              <option value="6+">6+ People</option>
            </select>
          </div>
          <button
            onClick={handleApplyFilters}
            className="bg-slate-900 text-white h-14 rounded-xl font-black hover:bg-blue-600 transition-all shadow-lg shadow-slate-200"
          >
            {isUpdating ? (
              <span className="flex items-center justify-center gap-2 animate-pulse">
                Saving...
              </span>
            ) : (
              "Update Results"
            )}
          </button>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-10">
        {TOURS_DATA.map((tour, i) => (
          <TourCard key={tour.id} tour={tour} index={i} />
        ))}
      </div>
    </div>
  );
}
