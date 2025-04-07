
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Browse from "./pages/Browse";
import ContentDetail from "./pages/ContentDetail";
import HowItWorks from "./pages/HowItWorks";
import Sellers from "./pages/Sellers";
import SellerProfile from "./pages/SellerProfile";
import BuyerDashboard from "./pages/BuyerDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import PurchaseDetail from "./pages/PurchaseDetail";
import Pricing from "./pages/Pricing";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import ContentPolicy from "./pages/ContentPolicy";
import DMCA from "./pages/DMCA";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import HelpCenter from "./pages/HelpCenter";
import ReportAbuse from "./pages/ReportAbuse";
import BuyersHelp from "./pages/help/BuyersHelp";
import SellersHelp from "./pages/help/SellersHelp";
import PrivacySecurityHelp from "./pages/help/PrivacySecurityHelp";
import TroubleshootingHelp from "./pages/help/TroubleshootingHelp";
// Help content pages
import BrowsingContentHelp from "./pages/help/browsing-content";
import UploadingContentHelp from "./pages/help/uploading-content";
import TwoFactorHelp from "./pages/help/two-factor";
import LoginProblemsHelp from "./pages/help/login-problems";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/content/:id" element={<ContentDetail />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/seller/:id" element={<SellerProfile />} />
          <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
          <Route path="/seller-dashboard" element={<SellerDashboard />} />
          <Route path="/purchase/:id" element={<PurchaseDetail />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/content-policy" element={<ContentPolicy />} />
          <Route path="/dmca" element={<DMCA />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/help/buyers" element={<BuyersHelp />} />
          <Route path="/help/sellers" element={<SellersHelp />} />
          <Route path="/help/privacy-security" element={<PrivacySecurityHelp />} />
          <Route path="/help/troubleshooting" element={<TroubleshootingHelp />} />
          {/* Help content routes */}
          <Route path="/help/browsing-content" element={<BrowsingContentHelp />} />
          <Route path="/help/uploading-content" element={<UploadingContentHelp />} />
          <Route path="/help/two-factor" element={<TwoFactorHelp />} />
          <Route path="/help/login-problems" element={<LoginProblemsHelp />} />
          <Route path="/report" element={<ReportAbuse />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
