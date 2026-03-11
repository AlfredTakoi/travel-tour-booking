import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-24 mt-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <div className="bg-blue-600 p-2 rounded-xl text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span className="text-3xl font-black tracking-tighter italic">
              STAYEASE
            </span>
          </div>
          <p className="text-slate-500 text-lg max-w-sm">
            Blending modern comfort with nature's serenity. We are the ultimate destination
            for those who value quality experiences.
          </p>
        </div>
        <div>
          <h4 className="font-black text-xl mb-8">Navigation</h4>
          <ul className="space-y-5 text-slate-500 font-medium">
            <li>
              <Link href="/" className="hover:text-blue-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/tours" className="hover:text-blue-500 transition-colors">
                Tour Packages
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-blue-500 transition-colors">
                Visual Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500 transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-black text-xl mb-8">Follow Us</h4>
          <div className="flex gap-4">
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 mt-20 pt-10 text-center text-slate-600">
        <p suppressHydrationWarning>&copy; {new Date().getFullYear()} STAYEASE GROUP. Typeset in Poppins.</p>
      </div>
    </footer>
  );
}
