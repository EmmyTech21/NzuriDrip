import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="text-2xl font-semibold cursor-pointer hover:text-gray-300 transition"
          onClick={() => navigate("/")}
        >
          NZURI
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm uppercase tracking-wider">
          <button onClick={() => navigate("/")} className="hover:text-yellow-400 transition">
            Home
          </button>
          <button onClick={() => navigate("/products")} className="hover:text-yellow-400 transition">
            Shop
          </button>
         <button onClick={() => navigate("/about")} className="hover:text-yellow-400 transition">
    About
  </button>
  <button onClick={() => navigate("/blog")} className="hover:text-yellow-400 transition">
    Journal
  </button>
  <button onClick={() => navigate("/faq")} className="hover:text-yellow-400 transition">
    FAQ
  </button>
  <button onClick={() => navigate("/contact")} className="hover:text-yellow-400 transition"> </button>
          <button onClick={() => navigate("/style-guide")} className="hover:text-yellow-400 transition">
            Style Guide
          </button>
        </div>
      </div>
    </nav>
  );
}