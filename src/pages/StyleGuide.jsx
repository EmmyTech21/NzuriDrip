import React from "react";
import { Link } from "react-router-dom";
import logo from '/assets/logo.png'
export default function StyleGuide() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">

      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold mb-12 border-b border-gray-700 pb-4">NZURI Brand Guidelines</h1>

      {/* Colors */}
      <div id="colors" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-semibold mb-6">🎨 Color Palette</h2>
        <p className="text-gray-400 mb-6">Our color system reflects simplicity, elegance, and urban culture.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded shadow-lg" style={{ backgroundColor: "#000", color: "#fff" }}>
            <h3 className="font-medium">Core Black</h3>
            <p className="text-sm mt-2 opacity-80">#000000</p>
          </div>
          <div className="p-6 rounded shadow-lg" style={{ backgroundColor: "#F8F1E4", color: "#000" }}>
            <h3 className="font-medium">Oatmeal Cream</h3>
            <p className="text-sm mt-2 opacity-80">#F8F1E4</p>
          </div>
          <div className="p-6 rounded shadow-lg" style={{ backgroundColor: "#5C715E", color: "#fff" }}>
            <h3 className="font-medium">Military Olive</h3>
            <p className="text-sm mt-2 opacity-80">#5C715E</p>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div id="typography" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-semibold mb-6">🔤 Typography</h2>
        <p className="text-gray-400 mb-6">Font styles used across website, packaging, and marketing materials.</p>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-yellow-400">Primary Font – Helvetica Neue</h3>
            <p className="mt-2 text-xl">This is a sample sentence in Helvetica Neue.</p>
          </div>

          <div>
            <h3 className="font-medium text-yellow-400">Secondary Font – Bebas Neue</h3>
            <p className="mt-2 text-xl font-bold tracking-wider uppercase">Bebas Neue for bold headers</p>
          </div>

          <div>
            <h3 className="font-medium text-yellow-400">Email & UI Font – Montserrat</h3>
            <p className="mt-2 text-base font-normal" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Montserrat is our go-to for email copy, buttons, and UI elements.
            </p>
          </div>
        </div>
      </div>

      {/* Logo Usage */}
      <div id="logo" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-semibold mb-6">🖼️ Logo Usage</h2>
        <p className="text-gray-400 mb-6">Our logo should appear consistently across all platforms.</p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-medium text-yellow-400 mb-4">Placement</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Front chest or sleeve</li>
              <li>Back neck (for premium drops)</li>
              <li>Branded hang tags and packaging</li>
              <li>Inner waistband tag</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-yellow-400 mb-4">Examples</h3>
            <img src={logo} alt="Logo Placement Examples" className="w-full rounded-md shadow-md" />
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div id="sizes" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-semibold mb-6">📏 Size Chart</h2>
        <p className="text-gray-400 mb-6">All hoodies and joggers follow standard unisex sizing.</p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden">
            <thead className="bg-black text-yellow-400">
              <tr>
                <th className="px-6 py-3 text-left">Size</th>
                <th className="px-6 py-3 text-left">Chest (in)</th>
                <th className="px-6 py-3 text-left">Length (in)</th>
                <th className="px-6 py-3 text-left">Sleeve (in)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="px-6 py-4">S</td>
                <td className="px-6 py-4">36</td>
                <td className="px-6 py-4">27</td>
                <td className="px-6 py-4">33</td>
              </tr>
              <tr>
                <td className="px-6 py-4">M</td>
                <td className="px-6 py-4">38</td>
                <td className="px-6 py-4">28</td>
                <td className="px-6 py-4">34</td>
              </tr>
              <tr>
                <td className="px-6 py-4">L</td>
                <td className="px-6 py-4">40</td>
                <td className="px-6 py-4">29</td>
                <td className="px-6 py-4">35</td>
              </tr>
              <tr>
                <td className="px-6 py-4">XL</td>
                <td className="px-6 py-4">42</td>
                <td className="px-6 py-4">30</td>
                <td className="px-6 py-4">36</td>
              </tr>
              <tr>
                <td className="px-6 py-4">XXL</td>
                <td className="px-6 py-4">44</td>
                <td className="px-6 py-4">31</td>
                <td className="px-6 py-4">37</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          All measurements are approximate. Hoodies have a relaxed fit and stretch.
        </p>
      </div>

      {/* Brand Voice & Tone */}
      <div id="voice" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-semibold mb-6">🗣️ Brand Voice & Tone</h2>
        <p className="text-gray-400 mb-6">How we speak to our audience — both online and offline.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium text-yellow-400 mb-2">Tone</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clean</li>
              <li>Minimal</li>
              <li>Confident</li>
              <li>Urban</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-yellow-400 mb-2">Example</h3>
            <p className="italic text-sm">
              “Crafted in limited batches. For Lagos creatives who value intentional design.”
            </p>
          </div>
        </div>
      </div>

      {/* Visual Identity */}
      <div id="visual-identity" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-semibold mb-6">🖼️ Visual Identity</h2>
        <p className="text-gray-400 mb-6">How we show up visually — from photography to product layout.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium text-yellow-400 mb-4">Photography Style</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Flat lay or studio lighting</li>
              <li>Neutral backgrounds</li>
              <li>No clutter — focus on texture</li>
              <li>Urban settings for lifestyle shots</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-yellow-400 mb-4">Imagery Examples</h3>
            <div className="grid grid-cols-2 gap-4">
              <img src="/assets/hoodie-oatmeal.png" alt="Oatmeal Cream Hoodie" className="rounded w-full" />
              <img src="/assets/jogger-set1.png" alt="Complete Set" className="rounded w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Packaging */}
      <div id="packaging" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-semibold mb-6">📦 Packaging Design</h2>
        <p className="text-gray-400 mb-6">Packaging should reflect our minimalist brand language.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium text-yellow-400 mb-4">Boxes</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Matt black finish</li>
              <li>No loud branding</li>
              <li>Gold foil logo (centered)</li>
              <li>Signature inner sticker with launch date</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-yellow-400 mb-4">Tags</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Black cardstock material</li>
              <li>Simple typography</li>
              <li>Included in every hoodie</li>
              <li>Include care instructions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo(0, 0)}
        className="px-6 py-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full transition"
      >
        Back to Top ↑
      </button>
    </section>
  );
}