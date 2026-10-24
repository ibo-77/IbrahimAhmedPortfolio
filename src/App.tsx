import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/features/WhatsAppButton";
import Home from "@/pages/Home";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-bg">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-brand-primary font-cairo mb-4">404</h1>
        <p className="text-brand-text-light font-cairo mb-6">الصفحة غير موجودة</p>
        <a href="/" className="px-6 py-3 rounded-xl bg-primary-gradient text-white font-semibold font-cairo shadow-btn hover:shadow-btn-hover transition-all duration-200">
          العودة للرئيسية
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </BrowserRouter>
  );
}
