import { useLocation, useNavigate } from "react-router-dom";
import PaystackButton from "./PaystackButton";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function CheckoutForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Get product info from URL
  const product = decodeURIComponent(searchParams.get("product") || "Hoodie");
  const quantity = parseInt(searchParams.get("quantity")) || 1;
  const price = parseFloat(searchParams.get("price")) || 65000;
  const size = decodeURIComponent(searchParams.get("size")) || "L";

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.zip) newErrors.zip = "ZIP code is required";
    if (!formData.country) newErrors.country = "Country is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validate()) return;
  
    setLoading(true);
  
    const finalPrice = price * quantity;
  
    try {
      const { data, error } = await supabase.from("orders").insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          zip: formData.zip,
          country: formData.country,
          product,
          quantity,
          total_price: finalPrice,
          size,
          notes: formData.notes,
          paid: false,
        },
      ]).select(); // Get inserted row including ID
  
      if (error) {
        console.error("Supabase Error:", error.message);
        alert("Failed to save order. Please try again.");
        throw new Error(error.message);
      }
  
      setOrderId(data[0].id);
      setShowPayment(true);
    } catch (err) {
      console.error("Order creation failed:", err.message);
      alert("We couldn't process your order right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSuccess = async (response) => {
    if (!orderId) {
      // If orderId is missing, just redirect with ref
      navigate(`/confirmation?ref=${response.reference}`);
      return;
    }

    // Update order with payment reference
    const { error } = await supabase
      .from("orders")
      .update({ paystack_ref: response.reference, paid: true })
      .eq("id", orderId);

    if (error) {
      console.warn("Failed to update order:", error.message);
    }

    // Redirect with reference
    navigate(`/confirmation?ref=${response.reference}`);
  };

  if (showPayment) {
    const formattedTotal = price * quantity;

    return (
      <section className="py-12 px-6 max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Complete Your Payment</h2>

        <p className="mb-4">
          Product: <strong>{product}</strong>, Quantity: <strong>{quantity}</strong>, Size:{" "}
          <strong>{size}</strong>, Total: <strong>₦{formattedTotal.toLocaleString()}</strong>
        </p>

        <PaystackButton
          amount={formattedTotal}
          email={formData.email}
          onSuccess={handlePaymentSuccess}
          onClose={() => {
            alert("Payment was canceled.");
            setShowPayment(false);
          }}
        />
      </section>
    );
  }

  return (
    <section className="py-12 px-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Shipping Details</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="John Doe"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+2348012345678"
            className="w-full p-2 border rounded"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="block font-medium mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="123 Lagos Mainland"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
          )}
        </div>

        {/* City & ZIP */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Lagos"
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">ZIP Code</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="10001"
            />
            {errors.zip && (
              <p className="text-red-500 text-sm mt-1">{errors.zip}</p>
            )}
          </div>
        </div>

        {/* State & Country */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Lagos"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Nigeria"
            />
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">{errors.country}</p>
            )}
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block font-medium mb-1">Notes (optional)</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="3"
            className="w-full p-2 border rounded"
            placeholder="Special instructions for delivery"
          />
        </div>
        <div class="flex justify-center gap-4 mt-6">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShqlEP0qWHv6nFrvoiGj1SSyyVuKhVr1-VwA&s" alt="Paystack" class="h-6" />
  <h2 class="text-lg font-semibold mt-8">Shipping & Returns</h2>
  <ul class="text-sm text-gray-600">
  <li>• Ships from Lagos within 1–2 days</li>
  <li>• Delivered nationwide via GIG Logistics</li>
  <li>• 7-Day Exchange Available</li>
</ul>
</div>

{/* Secure Checkout Info */}
<div className="flex flex-wrap justify-center items-center gap-4 mt-6 text-sm text-gray-700">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyr437qI2tB-wc6360hAovPKJml_4AUalJMQ&s" alt="Paystack" className="h-6" />
 

</div>

{/* Submit Button */}
<button
  type="submit"
  disabled={loading}
  className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
>
  {loading ? "Processing..." : "Proceed to Payment →"}
</button>

      </form>
    </section>
  );
}