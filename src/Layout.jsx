import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <FloatingContact />
      <Footer />
      <SpeedInsights />
    </>
  );
}
