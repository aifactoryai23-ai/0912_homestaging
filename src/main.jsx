// src/main.jsx
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import i18n from "@/i18n";

import Layout from "@/components/Layout.jsx";
import ProtectedRoute from "@/routes/ProtectedRoute.jsx";

// Стили
import "@/styles/external/main.css";
import "@/index.css";

// 🔥 ЛЕНИВЫЕ СТРАНИЦЫ
const Home = lazy(() => import("@/pages/Home.jsx"));
const Transform = lazy(() => import("@/pages/Transform.jsx"));
const Gallery = lazy(() => import("@/pages/Gallery.jsx"));
const Pricing = lazy(() => import("@/pages/Pricing.jsx"));
const API = lazy(() => import("@/pages/API.jsx"));
const SignInPage = lazy(() => import("@/pages/SignInPage.jsx"));
const SignUpPage = lazy(() => import("@/pages/SignUpPage.jsx"));
const ToastTest = lazy(() => import("@/pages/ToastTest.jsx"));
const SuccessPage = lazy(() => import("@/pages/Success.jsx"));
const FailPage = lazy(() => import("@/pages/Fail.jsx"));
const AiInteriorDesign = lazy(() =>
  import("@/pages/ai-interior-design.jsx")
);

// 404
function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | HomeDesign Pro</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold mb-4">404 — Page Not Found</h1>
        <a href="/" className="text-blue-600 hover:underline">
          Go Home
        </a>
      </div>
    </>
  );
}

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!clerkPubKey) throw new Error("Missing Clerk Publishable Key");

// 🔥 Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // в Layout есть <SignedIn>/<SignedOut>, значит он ДОЛЖЕН быть под ClerkProvider
    children: [
      // Public
      { index: true, element: <Home /> },
      { path: "pricing", element: <Pricing /> },
      { path: "api", element: <API /> },
      { path: "ai-interior-design", element: <AiInteriorDesign /> },

      // Protected
      {
        path: "transform",
        element: (
          <ProtectedRoute>
            <Transform />
          </ProtectedRoute>
        ),
      },
      {
        path: "gallery",
        element: (
          <ProtectedRoute>
            <Gallery />
          </ProtectedRoute>
        ),
      },

      // Sign-in
      { path: "sign-in", element: <SignInPage /> },
      { path: "sign-in/sso-callback", element: <SignInPage /> },
      { path: "sign-in/verify-email-address", element: <SignInPage /> },

      // Sign-up
      { path: "sign-up", element: <SignUpPage /> },
      { path: "sign-up/sso-callback", element: <SignUpPage /> },
      {
        path: "sign-up/verify-email-address",
        element: <SignUpPage />,
      },
      {
        path: "sign-up/verify-email-address/sso-callback",
        element: <SignUpPage />,
      },

      // Other
      { path: "toast-test", element: <ToastTest /> },

      // Payment
      { path: "success", element: <SuccessPage /> },
      { path: "fail", element: <FailPage /> },

      // Catch-all
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider
    publishableKey={clerkPubKey}
    frontendApi="clerk.homedesignpro.ai"
    signInFallbackRedirectUrl="/"
    signUpFallbackRedirectUrl="/"
    signInForceRedirectUrl="/"
    signUpForceRedirectUrl="/"
  >
    <HelmetProvider>
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center text-lg">
            {i18n.t("loading")}
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
      <Analytics />
    </HelmetProvider>
  </ClerkProvider>
);
