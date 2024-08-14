import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../src/utils/i18n";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Energy from "./routes/Energy.jsx";
import Audio from "./routes/Audio.jsx";
import Gadgets from "./routes/Gadgets.jsx";
import B2B from "./routes/B2B.jsx";
import Protection from "./routes/Protection.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/energy", element: <Energy /> },
  { path: "protection", element: <Protection /> },
  { path: "/audio", element: <Audio /> },
  { path: "/gadgets", element: <Gadgets /> },
  { path: "/b2b", element: <B2B /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
