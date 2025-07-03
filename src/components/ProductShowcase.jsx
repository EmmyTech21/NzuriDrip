import { useState, useEffect } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ImagePreloader from "./ImagePreloader";
import { useNavigate } from "react-router-dom";

// Product data
const products = {
  hoodies: {
    "Core Black": "/assets/hoodie-black.webp",
    "Military Olive": "/assets/hoodie-olive.webp",
    "Oatmeal Cream": "/assets/hoodie-oatmeal.webp",
  },
  crops: {
    "Crop Top – Core Black": "/assets/crop-black.webp",
    "Crop Top – Military Olive": "/assets/crop-olive.webp",
    "Crop Top – Oatmeal Cream": "/assets/crop-oatmeal.webp",
  },
  sets: {
    men: {
      "Power Move Hoodie Set": "/assets/jogger-set3.webp",
      "Urban Camo Hoodie Set": "/assets/jogger-set2.webp",
      "Luxe Loungewear Hoodie Set": "/assets/jogger-set1.webp"
    },
    women: {
      "Power Move Crop Set": "/assets/set-crop-joggers-cap.webp",
      "Urban Camo Crop Set": "/assets/set-crop-camo.webp",
      "Luxe Loungewear Crop Set": "/assets/set-crop-cap.webp"
    }
  },
};

// Sizes available
const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];

export default function ProductShowcase() {
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [activeTab, setActiveTab] = useState("hoodies");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedGender, setSelectedGender] = useState("men");

  // Load first product & size based on active tab
  useEffect(() => {
    let firstColor;

    if (activeTab === "sets") {
      firstColor = Object.keys(products.sets[selectedGender])[0];
    } else {
      firstColor = Object.keys(products[activeTab])[0];
    }

    if (firstColor && selectedColor !== firstColor) {
      setSelectedColor(firstColor);
    }

    if (!selectedSize && sizes.length > 0) {
      setSelectedSize(sizes[0]);
    }

    // Reset gender when leaving sets tab
    if (activeTab !== "sets") {
      setSelectedGender("men");
    }
  }, [activeTab, selectedGender]);

  const currentProductsGroup = products[activeTab] || {};
  const currentProducts =
    activeTab === "sets"
      ? products.sets[selectedGender]
      : currentProductsGroup;

  const availableColors = Object.keys(currentProducts);
  const displayedImage = currentProducts[selectedColor];

  const allImageUrls = Object.values(products).flatMap(category =>
    typeof category === "object" && !Array.isArray(category)
      ? Object.values(category)
      : []
  );

  const price = activeTab === "hoodies"
    ? 45000
    : activeTab === "crops"
      ? 38000
      : 150000;

  const handleBuyNow = () => {
    navigate(
      `/checkout?product=${encodeURIComponent(selectedColor)}&quantity=${quantity}&price=${price}&size=${encodeURIComponent(selectedSize)}`
    );
  };

  return (
    <>
      {/* Preload all product images */}
      <ImagePreloader imageUrls={allImageUrls} />

      {/* Product Showcase UI */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex border-b mb-8 space-x-6">
          <button
            onClick={() => setActiveTab("hoodies")}
            className={`px-4 py-2 font-medium ${
              activeTab === "hoodies"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            Premium Hoodies
          </button>
          <button
            onClick={() => setActiveTab("crops")}
            className={`px-4 py-2 font-medium ${
              activeTab === "crops"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            Crop Tops
          </button>
          <button
            onClick={() => setActiveTab("sets")}
            className={`px-4 py-2 font-medium ${
              activeTab === "sets"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            Complete Sets
          </button>
        </div>

        {/* Gender Selector (only on Sets tab) */}
        {activeTab === "sets" && (
          <div className="mb-6">
            <label className="block font-medium mb-2">Select Gender:</label>
            <div className="flex gap-3">
              {["men", "women"].map((genderOption) => (
                <button
                  key={genderOption}
                  onClick={() => setSelectedGender(genderOption)}
                  className={`px-4 py-1 rounded border ${
                    selectedGender === genderOption
                      ? "border-black font-semibold bg-gray-50"
                      : "border-gray-300"
                  }`}
                >
                  {genderOption === "men" ? "Men" : "Women"}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Display */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image Zoom */}
          <Zoom>
            <img
              src={displayedImage || "/assets/placeholder.png"}
              alt={`Nzuri ${selectedColor}`}
              className="w-full object-cover rounded-lg shadow-md"
              onError={(e) => {
                e.target.src = "/assets/placeholder.png"; // Fallback
              }}
            />
          </Zoom>

          {/* Product Info */}
          <div>
            <h2 className="text-3xl font-semibold mb-2">
              {activeTab === "hoodies"
                ? "Nzuri Premium Hoodie"
                : activeTab === "crops"
                  ? "Nzuri Crop Top"
                  : selectedGender === "men"
                    ? `Nzuri ${selectedColor.split(" ")[0]} Set (Men)`
                    : `Nzuri ${selectedColor.split(" ")[0]} Set (Women)`
              }
            </h2>

            <p className="text-gray-600 mb-4">
              {activeTab === "hoodies"
                ? "Crafted in limited batches — structured shoulders, double-stitched seams"
                : activeTab === "crops"
                  ? "Lightweight fit — perfect for Lagos weather"
                  : selectedGender === "men"
                    ? "Coordinated hoodie set with joggers and cap"
                    : "Crop top set with matching joggers and cap"
              }
            </p>

            <p className="text-xl mb-4">
              ₦{price.toLocaleString()}
            </p>

            <ul className="list-disc pl-5 space-y-1 mb-6">
              {activeTab === "hoodies" ? (
                <>
                  <li>450gsm heavyweight cotton</li>
                  <li>Double-stitched seams</li>
                  <li>Structured shoulders</li>
                </>
              ) : activeTab === "crops" ? (
                <>
                  <li>Lightweight cotton blend</li>
                  <li>Perfect for summer styling</li>
                  <li>Signature waistband tags</li>
                </>
              ) : (
                <>
                  <li>Full 3-piece coordinated set</li>
                  <li>Signature inner waistband tags</li>
                  <li>Limited edition packaging</li>
                </>
              )}
            </ul>

            {/* Color Selector */}
            <div className="mb-6">
              <label className="block font-medium mb-2">
                {activeTab === "hoodies"
                  ? "Hoodie"
                  : activeTab === "crops"
                    ? "Crop Top"
                    : selectedGender === "men"
                      ? "Hoodie"
                      : "Crop Top"} Color
              </label>
              <div className="flex flex-wrap gap-3">
                {availableColors.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedColor(option)}
                    className={`px-3 py-1 rounded border ${
                      selectedColor === option
                        ? "border-black font-semibold bg-gray-50"
                        : "border-gray-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <label className="block font-medium mb-2">Select Size:</label>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 rounded border ${
                      selectedSize === size
                        ? "border-black font-semibold bg-gray-50"
                        : "border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <label className="font-medium">Quantity:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-16 p-1 border rounded text-center"
              />
            </div>

            {/* Buy Button */}
            <button
              onClick={handleBuyNow}
              className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              {activeTab === "hoodies"
                ? "Buy Hoodie →"
                : activeTab === "crops"
                  ? "Buy Crop Top →"
                  : "Complete Your Look →"}
            </button>

            {/* Bonus Text */}
            {activeTab === "sets" && (
              <p className="mt-3 text-sm text-gray-500">
                ⚡ <strong>Set Bonus:</strong> Free monogramming on all sets
              </p>
            )}
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2">Why NZURI?</h2>
<ul className="space-y-2">
  <li>✅ Designed for streetwear lovers, by real Nigerians</li>
  <li>✅ High-quality French Terry and Cotton Fleece</li>
  <li>✅ Built for Lagos heat + global drip</li>
  <li>✅ Pay securely with Paystack</li>
</ul>

      </section>
    </>
  );
}