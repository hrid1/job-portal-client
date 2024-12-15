import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router.jsx";
import AuthProvider from "./provider/AuthProvider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <RouterProvider router={router} />
      {/* </Suspense> */}
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
