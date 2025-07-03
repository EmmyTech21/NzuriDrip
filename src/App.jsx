import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import BrandMission from './components/BrandMission';
import ScarcityBlock from './components/ScarcityBlock';
import ReviewsSection from './components/ReviewsSection';
import EmailSignup from './components/EmailSignup';
import OutfitShowcase from './components/OutfitShowcase';
import './index.css';
import CheckoutForm from "./components/CheckoutForm";
import ConfirmationPage from "./pages/ConfrimationPage";
import Blog from "./pages/Blog";
import StyleGuide from "./pages/StyleGuide";
import FooterSection from "./components/Footer";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";



function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <OutfitShowcase />
      <BrandMission />
      <ScarcityBlock />
      <ReviewsSection />
      <EmailSignup />
      <FooterSection/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<HeroSection />} />
        <Route path="/product" element={<StandaloneProductShowcase />} />
        <Route path="/mail" element={<EmailSignup />} />
         {/* Optional: Checkout & Payment Routes */}
         <Route path="/checkout" element={<CheckoutForm/>} />
        {/* <Route path="/payment" element={<PaymentPage/>} /> */}
        <Route path="/confirmation" element={<ConfirmationPage/>} />
        <Route path="/about" element={<AboutUs />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/faq" element={<FAQ />} />
        <Route path="/style-guide" element={<StyleGuide />} />
                {/* Fallback for unknown routes */}
                {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
function StandaloneProductShowcase() {
  return <ProductShowcase isStandalone={true} />;
}
function Navigation() {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div onClick={() => navigate("/")} className="text-2xl font-semibold cursor-pointer hover:text-gray-300 transition">
          NZURI
        </div>

        <div className="flex gap-8 text-sm uppercase tracking-wider">
          <button onClick={() => navigate("/products")} className="hover:text-yellow-400 transition">
            Shop
          </button>
          <button onClick={() => navigate("/blog")} className="hover:text-yellow-400 transition">
            Blog
          </button>
          <button onClick={() => navigate("/style-guide")} className="hover:text-yellow-400 transition">
            Style Guide
          </button>
        </div>
      </div>
    </nav>
  );
}
export default App;
