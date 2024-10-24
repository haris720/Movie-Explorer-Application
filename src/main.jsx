import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MovieProvider from "./AppContext/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <MovieProvider>
    <App />
  </MovieProvider>
);
