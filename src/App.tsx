
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
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
import PaymentSuccess from "./pages/PaymentSuccess";
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
import Cookies from "./pages/Cookies";
// Help content pages
import BrowsingContentHelp from "./pages/help/browsing-content";
import UploadingContentHelp from "./pages/help/uploading-content";
import TwoFactorHelp from "./pages/help/two-factor";
import LoginProblemsHelp from "./pages/help/login-problems";
// New help content pages
import PurchasingHelp from "./pages/help/purchasing";
import MessagingSellersHelp from "./pages/help/messaging-sellers";
import BuyerProtectionHelp from "./pages/help/buyer-protection";
import SellerDashboardHelp from "./pages/help/seller-dashboard";
import PricingContentHelp from "./pages/help/pricing-content";
import AnalyticsHelp from "./pages/help/analytics";
import PromotionsHelp from "./pages/help/promotions";
import PrivacyFeaturesHelp from "./pages/help/privacy-features";
import SecurityTipsHelp from "./pages/help/security-tips";
import ContentProtectionHelp from "./pages/help/content-protection";
import PaymentIssuesHelp from "./pages/help/payment-issues";
import UploadTroubleshootingHelp from "./pages/help/upload-troubleshooting";
import AccountRecoveryHelp from "./pages/help/account-recovery";
import ContentGuidelinesHelp from "./pages/help/content-guidelines";
import CustomContentHelp from "./pages/help/custom-content";
import SalesHelp from "./pages/help/increase-sales";
import PaymentMethodsHelp from "./pages/help/payment-methods";
import SubscriptionManagementHelp from "./pages/help/subscription-management";
import WithdrawEarningsHelp from "./pages/help/withdraw-earnings";
import TaxInformationHelp from "./pages/help/tax-information";
import CreateAccountHelp from "./pages/help/creating-account";
import VerifyProfileHelp from "./pages/help/verify-profile";
import SellerSetupHelp from "./pages/help/setting-up-seller";
import SubscriptionPlansHelp from "./pages/help/subscription-plans";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/content/:id" element={<ContentDetail />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/sellers" element={<Sellers />} />
            <Route path="/seller/:id" element={<SellerProfile />} />
            
            {/* Protected routes with specific account type requirements */}
            <Route path="/buyer-dashboard" element={
              <ProtectedRoute requiredAccountType="buyer">
                <BuyerDashboard />
              </ProtectedRoute>
            } />
            <Route path="/seller-dashboard" element={
              <ProtectedRoute requiredAccountType="seller">
                <SellerDashboard />
              </ProtectedRoute>
            } />
            <Route path="/purchase/:id" element={
              <ProtectedRoute>
                <PurchaseDetail />
              </ProtectedRoute>
            } />
            <Route path="/payment-success" element={
              <ProtectedRoute>
                <PaymentSuccess />
              </ProtectedRoute>
            } />
            
            {/* Public routes */}
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
            <Route path="/cookies" element={<Cookies />} />
            {/* Help content routes */}
            <Route path="/help/browsing-content" element={<BrowsingContentHelp />} />
            <Route path="/help/uploading-content" element={<UploadingContentHelp />} />
            <Route path="/help/two-factor" element={<TwoFactorHelp />} />
            <Route path="/help/login-problems" element={<LoginProblemsHelp />} />
            {/* New help content routes */}
            <Route path="/help/purchasing" element={<PurchasingHelp />} />
            <Route path="/help/messaging-sellers" element={<MessagingSellersHelp />} />
            <Route path="/help/buyer-protection" element={<BuyerProtectionHelp />} />
            <Route path="/help/seller-dashboard" element={<SellerDashboardHelp />} />
            <Route path="/help/pricing-content" element={<PricingContentHelp />} />
            <Route path="/help/analytics" element={<AnalyticsHelp />} />
            <Route path="/help/promotions" element={<PromotionsHelp />} />
            <Route path="/help/privacy-features" element={<PrivacyFeaturesHelp />} />
            <Route path="/help/security-tips" element={<SecurityTipsHelp />} />
            <Route path="/help/content-protection" element={<ContentProtectionHelp />} />
            <Route path="/help/payment-issues" element={<PaymentIssuesHelp />} />
            <Route path="/help/upload-troubleshooting" element={<UploadTroubleshootingHelp />} />
            <Route path="/help/account-recovery" element={<AccountRecoveryHelp />} />
            <Route path="/help/content-guidelines" element={<ContentGuidelinesHelp />} />
            <Route path="/help/custom-content" element={<CustomContentHelp />} />
            <Route path="/help/increase-sales" element={<SalesHelp />} />
            <Route path="/help/payment-methods" element={<PaymentMethodsHelp />} />
            <Route path="/help/subscription-management" element={<SubscriptionManagementHelp />} />
            <Route path="/help/withdraw-earnings" element={<WithdrawEarningsHelp />} />
            <Route path="/help/tax-information" element={<TaxInformationHelp />} />
            <Route path="/help/creating-account" element={<CreateAccountHelp />} />
            <Route path="/help/verify-profile" element={<VerifyProfileHelp />} />
            <Route path="/help/setting-up-seller" element={<SellerSetupHelp />} />
            <Route path="/help/subscription-plans" element={<SubscriptionPlansHelp />} />
            <Route path="/report" element={<ReportAbuse />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
