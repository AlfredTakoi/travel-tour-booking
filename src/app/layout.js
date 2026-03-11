import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "StayEase | Luxury Travel Booking",
  description: "A new definition of luxury and comfort in the heart of your dream destination.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className={`${poppins.variable} font-sans antialiased bg-slate-50 text-slate-900`}
        cz-shortcut-listen="true"
      >
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
