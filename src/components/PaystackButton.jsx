import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function PaystackButton({ amount, email, product, quantity, price }) {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const urlEmail = searchParams.get("email");
  const urlProduct = decodeURIComponent(searchParams.get("product")) || product || "Hoodie";
  const urlPrice = parseFloat(searchParams.get("price")) || price || 65000;
  const urlQuantity = parseInt(searchParams.get("quantity")) || quantity || 1;

  const finalEmail = email || urlEmail;
  const finalAmount = amount || urlPrice * urlQuantity;
  const koboAmount = Math.floor(finalAmount * 100); // NGN → kobo

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  // Load Paystack script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js ";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    if (!publicKey) {
      alert("❌ Paystack key missing. Check .env file.");
      return;
    }

    if (!finalEmail || !/\S+@\S+\.\S+/.test(finalEmail)) {
      alert("❌ Please enter a valid email before proceeding.");
      return;
    }

    if (koboAmount <= 0) {
      alert("❌ Invalid amount. Product price must be greater than ₦0.");
      return;
    }

    if (typeof window.PaystackPop === "undefined") {
      alert("❌ Paystack failed to load. Please check your internet connection.");
      return;
    }

    const ref = "" + Math.floor(Math.random() * 1000000);

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email: finalEmail,
      amount: koboAmount,
      currency: "NGN",
      ref,
      metadata: {
        custom_fields: [
          {
            display_name: "Product",
            variable_name: "product",
            value: urlProduct,
          },
          {
            display_name: "Quantity",
            variable_name: "quantity",
            value: String(urlQuantity),
          }
        ],
      },
      // ✅ Ensure this is a valid function
      callback: function(response) {
        console.log("✅ Payment successful:", response.reference);

        updateOrderStatus(response);
        navigate(`/confirmation?ref=${response.reference}`);
      },
      onClose: function() {
        alert("❌ Payment was canceled.");
        navigate(-1); // Go back
      }
    });

    handler.openIframe();
  };

  const updateOrderStatus = async (response) => {
    try {
      const { error } = await supabase
        .from("orders")
        .update({ paid: true, paystack_ref: response.reference })
        .eq("email", finalEmail)
        .eq("product", urlProduct)
        .eq("quantity", urlQuantity);

      if (error) {
        console.warn("⚠️ Failed to update order:", error.message);
        // Still redirect with reference
        navigate(`/confirmation?ref=${response.reference}`);
      }
    } catch (err) {
      console.error("🚨 DB Update failed:", err.message);
      navigate(`/confirmation?ref=${response.reference}`);
    }
  };

  return (
    <button
      type="button"
      onClick={handlePayment}
      className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
    >
      Complete Purchase →
    </button>
  );
}