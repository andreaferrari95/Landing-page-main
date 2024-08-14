import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../src/utils/i18n";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OurProducts from "./routes/OurProducts.jsx";
import B2B from "./routes/B2B.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/our-products", element: <OurProducts /> },
  { path: "/b2b", element: <B2B /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
