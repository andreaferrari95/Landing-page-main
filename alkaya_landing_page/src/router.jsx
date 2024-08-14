import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Energy from "./routes/Energy.jsx";
import Audio from "./routes/Audio.jsx";
import Gadgets from "./routes/Gadgets.jsx";
import B2B from "./routes/B2B.jsx";
import Protection from "./routes/Protection.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/energy", element: <Energy /> },
  { path: "protection", element: <Protection /> },
  { path: "/audio", element: <Audio /> },
  { path: "/gadgets", element: <Gadgets /> },
  { path: "/b2b", element: <B2B /> },
]);
