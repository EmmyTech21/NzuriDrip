import React from "react";
import { useLocation } from "react-router-dom";

export default function ConfirmationPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const ref = searchParams.get("ref");

  return (
    <section className="py-16 px-6 text-center max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">🎉 Thank You!</h2>

      <p className="text-lg mb-6">Your payment was successful.</p>

      {ref && (
        <div className="mb-6 p-4 border border-yellow-400 rounded bg-black/5">
          <p><strong>Reference:</strong> {ref}</p>
          <p>We'll notify you once your order begins shipping.</p>
        </div>
      )}

      <a
        href="/"
        className="inline-block py-2 px-6 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        ← Back to Home
      </a>
    </section>
  );
}