import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Eager load home page for best initial experience
import Index from "./pages/home";

// Lazy load other pages for better code splitting
const WorkPage = lazy(() => import("./pages/work"));
const AboutPage = lazy(() => import("./pages/about"));
const ServicesPage = lazy(() => import("./pages/services"));
const BlogPage = lazy(() => import("./pages/blog"));
const ContactPage = lazy(() => import("./pages/contact"));
const ProjectDetailPage = lazy(() => import("./pages/project-detail"));
const BlogDetailPage = lazy(() => import("./pages/blog-detail"));
const NotFound = lazy(() => import("./pages/404"));

const queryClient = new QueryClient();

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen bg-[#EEE9E3] flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 mx-auto">
          <div className="w-12 h-12 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin"></div>
        </div>
        <p className="text-sm font-medium text-black/50">Loading...</p>
      </div>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster richColors />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/project/:id" element={<ProjectDetailPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
