import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StudyInDenmark from "./pages/StudyInDenmark";
import StudyInAustria from "./pages/StudyInAustria";
import StudyInUSA from "./pages/StudyInUSA";
import StudyInUK from "./pages/StudyInUK";
import StudyInCanada from "./pages/StudyInCanada";
import StudyInFinland from "./pages/StudyInFinland";
import Programs from "./pages/Programs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/study-in-denmark" element={<StudyInDenmark />} />
          <Route path="/study-in-austria" element={<StudyInAustria />} />
          <Route path="/study-in-usa" element={<StudyInUSA />} />
          <Route path="/study-in-uk" element={<StudyInUK />} />
          <Route path="/study-in-canada" element={<StudyInCanada />} />
          <Route path="/study-in-finland" element={<StudyInFinland />} />
          <Route path="/programs" element={<Programs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
