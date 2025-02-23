import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./default.scss";
import App from "./pages/Products.jsx";

import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
