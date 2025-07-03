import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-8">About NZURI</h1>

      <p className="text-lg text-gray-300 mb-6">
        At NZURI, we believe fashion should be intentional.
      </p>

      <p className="text-gray-400 leading-relaxed mb-8">
        Our story began in Lagos — with a vision to craft streetwear that speaks to creatives, entrepreneurs, and culture-shapers. No logos shouting from afar. Just clean lines, premium fabrics, and subtle details that only those who know will notice.
      </p>

      <div className="grid md:grid-cols-2 gap-8 text-left">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Our Mission</h2>
          <p className="text-gray-400">
            To redefine Nigerian streetwear by focusing on minimalism, quality, and exclusivity. Every piece is made in limited batches — no mass production, no fast fashion.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">The Details Matter</h2>
          <p className="text-gray-400">
            From structured shoulders to inner waistband tags — every detail is designed with purpose. We don’t follow trends. We invest in timelessness.
          </p>
        </div>
      </div>

      <Link to="/product" className="inline-block mt-10 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
        Shop the Collection →
      </Link>
    </section>
  );
}