import { createBrowserRouter } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsPage />,
  },
  {
    path: "/product/:category/:name",
    element: <ProductDetailPage />,
  },
]);

export default router;