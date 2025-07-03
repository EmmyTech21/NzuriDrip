import React from "react";
import { useNavigate } from "react-router-dom";

export default function FooterSection() {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand Column */}
        <div>
          <h3 className="text-xl font-bold mb-4">NZURI</h3>
          <p className="text-gray-400 mb-4">
            Premium streetwear crafted in limited batches. For Lagos creatives who value simplicity, quality, and urban culture.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/nzuri_drip"  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              Instagram
            </a>
            <a href="https://x.com/nzuri_drip"  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              Twitter
            </a>
            <a href="https://www.tiktok.com/@nzuri_drip1"  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              TikTok
            </a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Shop</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <button onClick={() => navigate("/product")} className="hover:text-white transition">
                Hoodies
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/product")} className="hover:text-white transition">
                Crop Tops
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/product")} className="hover:text-white transition">
                Complete Sets
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/style-guide")} className="hover:text-white transition">
                Size Guide
              </button>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <button onClick={() => navigate("/about")} className="hover:text-white transition">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/blog")} className="hover:text-white transition">
                Journal
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/faq")} className="hover:text-white transition">
                FAQ
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/mail")} className="hover:text-white transition">
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Subscribe / Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Stay Connected</h4>
          {/* <p className="text-gray-400 mb-4">
            Be first to know about drops, exclusive sales, and new collections.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              required
              className="px-4 py-2 rounded bg-gray-900 text-white border-none focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition"
            >
              Subscribe
            </button>
          </form> */}

          <p className="mt-6 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} NZURI. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}