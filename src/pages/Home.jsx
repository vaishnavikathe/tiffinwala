// pages/Home.jsx
// The main landing page for TiffinWala.
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home-page">
      <Navbar />

      {/* Inside the Hero Section of Home.jsx */}
      <section className="bg-gradient-to-b from-[#FFF8F3] via-[#FFF4EC] to-[#FDE8D8] py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">

          <p className="font-sans text-xs font-medium text-orange-600 bg-orange-50 inline-block px-4 py-1 rounded-full border border-orange-200 mb-6 tracking-wide">
            Fresh Tiffin Delivered Daily
          </p>

          <h1 className="font-heading text-[clamp(2rem,5vw,3.2rem)] font-semibold text-[#1A1208] leading-tight mb-4">
            Homestyle Food, <span className="text-[#E8630A]">Delivered</span>
            <br />to Your Doorstep
          </h1>

          <p className="font-sans text-base text-[#7A6A5A] leading-relaxed mb-8">
            Connect with trusted local tiffin vendors and enjoy freshly cooked meals every day — just like home.
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            <Link to="/vendor" className="font-sans text-sm font-medium px-6 py-3 bg-[#E8630A] text-white rounded-lg hover:bg-[#c9540a] transition">
              Register Your Mess
            </Link>

            <Link to="/about" className="font-sans text-sm font-medium px-6 py-3 border border-[#E8630A] text-[#E8630A] rounded-lg hover:bg-orange-50 transition">
              Learn More
            </Link>
          </div>

        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="flex justify-center gap-12 py-10 bg-white border-t border-b border-orange-100 flex-wrap text-center">

        <div>
          <h2 className="font-heading text-2xl text-[#E8630A] font-semibold">500+</h2>
          <p className="font-sans text-xs text-[#7A6A5A]">Registered Vendors</p>
        </div>

        <div>
          <h2 className="font-heading text-2xl text-[#E8630A] font-semibold">10,000+</h2>
          <p className="font-sans text-xs text-[#7A6A5A]">Meals Served Daily</p>
        </div>

        <div>
          <h2 className="font-heading text-2xl text-[#E8630A] font-semibold">30+</h2>
          <p className="font-sans text-xs text-[#7A6A5A]">Cities Covered</p>
        </div>

        <div>
          <h2 className="font-heading text-2xl text-[#E8630A] font-semibold">4.8 ★</h2>
          <p className="font-sans text-xs text-[#7A6A5A]">Average Rating</p>
        </div>

      </section>

      {/* ── FEATURES SECTION ── */}
      <section className="py-16 px-4 max-w-5xl mx-auto">

        <h2 className="font-heading text-2xl font-semibold text-[#1A1208] mb-10 text-center">
          Why Choose TiffinWala?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white border border-orange-100 rounded-xl p-6 text-center hover:shadow-sm transition">
            <div className="text-2xl mb-3">🚀</div>
            <h3 className="font-sans text-[15px] font-medium text-[#1A1208] mb-1">On-time Delivery</h3>
            <p className="font-sans text-[13px] text-[#7A6A5A] leading-relaxed">
              Meals delivered hot and on time to your home or office every day.
            </p>
          </div>

          <div className="bg-white border border-orange-100 rounded-xl p-6 text-center">
            <div className="text-2xl mb-3">🛡️</div>
            <h3 className="font-sans text-[15px] font-medium text-[#1A1208] mb-1">Verified Vendors</h3>
            <p className="font-sans text-[13px] text-[#7A6A5A]">
              Every vendor is checked for quality and hygiene before joining.
            </p>
          </div>

          <div className="bg-white border border-orange-100 rounded-xl p-6 text-center">
            <div className="text-2xl mb-3">💰</div>
            <h3 className="font-sans text-[15px] font-medium text-[#1A1208] mb-1">Affordable Price</h3>
            <p className="font-sans text-[13px] text-[#7A6A5A]">
              Plans starting from ₹60 per meal.
            </p>
          </div>

          <div className="bg-white border border-orange-100 rounded-xl p-6 text-center">
            <div className="text-2xl mb-3">🥗</div>
            <h3 className="font-sans text-[15px] font-medium text-[#1A1208] mb-1">Healthy & Diverse</h3>
            <p className="font-sans text-[13px] text-[#7A6A5A]">
              Balanced meals with multiple diet options.
            </p>
          </div>

        </div>
      </section>
      {/* ── VENDOR CTA SECTION ── */}
      <section className="bg-[#1A1208] text-center py-16 px-4">

        <h2 className="font-heading text-2xl text-white font-medium mb-3">
          Ready to grow your tiffin business?
        </h2>

        <p className="font-sans text-sm text-gray-400 mb-6">
          Join hundreds of vendors already earning with TiffinWala.
        </p>

        <Link to="/vendor" className="font-sans text-sm font-medium px-6 py-3 bg-[#E8630A] text-white rounded-lg">
          Register as Vendor →
        </Link>

      </section>

      <Footer />
    </div>
  );
}

export default Home;