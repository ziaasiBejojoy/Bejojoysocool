import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingScreen from './components/LoadingScreen';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // ⏳ adjust loading time here

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 🔥 Loading Screen */}
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {/* 🌐 Main App */}
      {!loading && (
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      )}
    </>
  );
}

export default App;