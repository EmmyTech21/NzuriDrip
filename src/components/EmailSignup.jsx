import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { supabase } from "../lib/supabase";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email.");
      return;
    }
  
    setLoading(true);
  
    try {
      // 1. Save to Supabase
      const { error: dbError } = await supabase
        .from("subscribers")
        .upsert([{ email }], {
          onConflict: "email"
        });
  
      if (dbError && dbError.code !== "23505") {
        throw new Error(dbError.message);
      }
  
      // 2. Call Supabase Function
      const functionUrl = "https://cafsnzezlbofwosfhaft.supabase.co/functions/v1/send-welcome-email"; 
  
      const res = await fetch(functionUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({ email })
      });
  
      if (!res.ok) {
        console.warn("Function returned non-OK status:", res.status, res.statusText);
      }
  
      // 3. Show success message
      toast.success("Welcome! Check your inbox 📨", {
        position: "top-right",
        autoClose: 3000,
      });
  
      setEmail(""); // Clear input
    } catch (err) {
      console.error("Submission failed:", err.message);
      
      // Still show success even if email fails
      toast.info("Thanks for subscribing! Email might take a moment.", {
        position: "top-right",
        autoClose: 5000,
      });
  
      setEmail("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="custom-bg custom-text py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Tribe</h2>
        <p className="mb-6">Early access, exclusive sales, members-only drops.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-lg w-full sm:w-1/3"
          />
          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
          >
            {loading ? "Saving..." : "→"}
          </button>
        </form>
      </section>
      <ToastContainer />
    </>
  );
}