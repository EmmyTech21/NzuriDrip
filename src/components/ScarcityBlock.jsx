import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function ScarcityBlock() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [stats, setStats] = useState({
    hoodieCount: 0,
    joggerCount: 0,
    womenCropTopCount: 0,
    completeSetCount: 0,
  });

  const [loading, setLoading] = useState(true);

  // Load stats from Supabase
  async function fetchSalesData() {
    try {
      const { data, error } = await supabase.from("orders").select("product, quantity, paid");

      if (error) throw error;

      const hoodieCount = data
        .filter((order) => order.paid && order.product.includes("Hoodie"))
        .reduce((sum, order) => sum + order.quantity, 0);

      const joggerCount = data
        .filter((order) => order.paid && order.product.includes("Joggers"))
        .reduce((sum, order) => sum + order.quantity, 0);

      const womenCropTopCount = data
        .filter((order) => order.paid && order.product.includes("Crop Top"))
        .reduce((sum, order) => sum + order.quantity, 0);

      const completeSetCount = data
        .filter((order) => order.paid && order.product.includes("Set"))
        .reduce((sum, order) => sum + order.quantity, 0);

      setStats({
        hoodieCount,
        joggerCount,
        womenCropTopCount,
        completeSetCount,
      });
    } catch (err) {
      console.error("Failed to load stats:", err.message);
    } finally {
      setLoading(false);
    }
  }

  // Fetch once on mount + poll every minute
  useEffect(() => {
    fetchSalesData();
    const interval = setInterval(fetchSalesData, 60000);
    return () => clearInterval(interval);
  }, []);

  // Setup Realtime Listener
  useEffect(() => {
    const channel = supabase
      .channel("orders-realtime")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "orders" },
        (payload) => fetchSalesData()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Countdown logic
  const endDate = new Date("July 6, 2025 11:59:59").getTime(); // ← Change to your actual end date

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const totalSeconds = Math.floor((endDate - now) / 1000);

      if (totalSeconds <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (num) => String(num).padStart(2, "0");

  if (loading) {
    return <div className="text-center py-12">Loading availability...</div>;
  }

  return (
    <section
      className="custom-bg custom-text py-12 px-6 text-center relative overflow-hidden h-[400px] flex items-center justify-center"
      style={{
        backgroundImage: 'url("/assets/flame-background.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-yellow-400 uppercase tracking-wider mb-2"
        >
          Hoodies Sold: {stats.hoodieCount}/400 | Joggers: {stats.joggerCount}/400 | Crop Tops: {stats.womenCropTopCount}/400 | Sets: {stats.completeSetCount}/400
        </motion.p>

        <motion.h3
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Drop closes in{" "}
          <span className="text-yellow-400">
            {timeLeft.days}d {formatTime(timeLeft.hours)}h {formatTime(timeLeft.minutes)}m {formatTime(timeLeft.seconds)}s
          </span>
        </motion.h3>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
        >
          Secure Yours →
        </motion.button>
      </div>
    </section>
  );
}