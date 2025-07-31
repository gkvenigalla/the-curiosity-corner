import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Technology from "./pages/Technology";
import Philosophy from "./pages/Philosophy";
import Psychology from "./pages/Psychology";
import Business from "./pages/Business";
import Health from "./pages/Health";
import Productivity from "./pages/Productivity";
import Learning from "./pages/Learning";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/technology" element={<Layout><Technology /></Layout>} />
          <Route path="/philosophy" element={<Layout><Philosophy /></Layout>} />
          <Route path="/psychology" element={<Layout><Psychology /></Layout>} />
          <Route path="/business" element={<Layout><Business /></Layout>} />
          <Route path="/health" element={<Layout><Health /></Layout>} />
          <Route path="/productivity" element={<Layout><Productivity /></Layout>} />
          <Route path="/learning" element={<Layout><Learning /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
