import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Professional from "./pages/Professional";
import India from "./pages/India";
import Technology from "./pages/Technology";
import Business from "./pages/Business";
import Questions from "./pages/Questions";
import About from "./pages/About";
import Admin from "./pages/Admin";
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
          <Route path="/professional" element={<Layout><Professional /></Layout>} />
          <Route path="/india" element={<Layout><India /></Layout>} />
          <Route path="/technology" element={<Layout><Technology /></Layout>} />
          <Route path="/business" element={<Layout><Business /></Layout>} />
          <Route path="/questions" element={<Layout><Questions /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/admin" element={<Layout><Admin /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
