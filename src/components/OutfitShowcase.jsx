import { useNavigate } from "react-router-dom";

export default function OutfitShowcase() {
  const navigate = useNavigate();

  const outfits = [
    {
      color: "Core Black",
      male: {
        image: "/assets/black-male.png",
        desc: "Paired with tailored black cargos and minimal sneakers."
      },
      female: {
        image: "/assets/black-female.png",
        desc: "Styled with high-waisted pleated trousers and block heels."
      },
      copy: "Command attention in our timeless Core Black set. Built for versatility with a sharp edge, whether you're on the street or at a social."
    },
    {
      color: "Oatmeal Cream",
      male: {
        image: "/assets/cream-male.png",
        desc: "With stone-colored chinos and desert boots."
      },
      female: {
        image: "/assets/cream-female.png",
        desc: "Matched with wide-leg linen pants and minimalist jewelry."
      },
      copy: "A statement in subtlety. Oatmeal Cream is the go-to for those who flow between day and evening, comfort and elegance."
    },
    {
      color: "Military Olive",
      male: {
        image: "/assets/olive-male.png",
        desc: "Combined with black denim and rugged boots."
      },
      female: {
        image: "/assets/olive-female.png",
        desc: "Paired with faux leather leggings and combat boots."
      },
      copy: "A modern street-style classic. Military Olive speaks to bold self-expression with utilitarian style cues."
    }
  ];

  const handleBuyNow = () => {
    navigate("/product");
  };

  return (
    <section className="py-12 px-4 space-y-16">
      {outfits.map((outfit) => (
        <div key={outfit.color} className="max-w-6xl mx-auto">
          <h2 className="section-header text-center text-3xl font-bold mb-4">{outfit.color}</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {/* Male Outfit */}
            <div className="text-center">
              <img
                src={outfit.male.image}
                alt={`Male model in ${outfit.color} set`}
                className="rounded-lg shadow-md mb-4"
              />
              <p className="text-gray-600 italic">{outfit.male.desc}</p>
            </div>

            {/* Female Outfit */}
            <div className="text-center">
              <img
                src={outfit.female.image}
                alt={`Female model in ${outfit.color} set`}
                className="rounded-lg shadow-md mb-4"
              />
              <p className="text-gray-600 italic">{outfit.female.desc}</p>
            </div>

            {/* Copy + CTA */}
            <div className="flex flex-col justify-center space-y-6 text-center">
              <p className="text-lg leading-relaxed text-gray-800">{outfit.copy}</p>
              <button onClick={handleBuyNow} className="btn-primary w-full">
                Shop {outfit.color} Set
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
