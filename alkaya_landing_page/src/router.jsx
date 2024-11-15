import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Energy from "./routes/energy.jsx";
import Audio from "./routes/Audio.jsx";
import Gadgets from "./routes/Gadgets.jsx";
import B2B from "./routes/B2B.jsx";
import Protection from "./routes/Protection.jsx";
import Agb from "./routes/Agb.jsx";
import Impressum from "./routes/Impressum.jsx";
import Datenschutz from "./routes/Datenschutz.jsx";
import Manuals from "./components/Manuals/Manuals.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/energy", element: <Energy /> },
  { path: "protection", element: <Protection /> },
  { path: "/audio", element: <Audio /> },
  { path: "/gadgets", element: <Gadgets /> },
  { path: "/b2b", element: <B2B /> },
  { path: "/agb", element: <Agb /> },
  { path: "/impressum", element: <Impressum /> },
  { path: "/datenschutz", element: <Datenschutz /> },
  { path: "/Forgreenworld", element: <Manuals /> },
]);
