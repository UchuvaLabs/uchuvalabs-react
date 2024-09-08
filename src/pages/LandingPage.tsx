import { useState } from "react";
import Header from "../components/common/Header";
import HeroSection from "../components/common/HeroSection";
import MostPopularProjects from "../components/common/MostPopularProjects";
import FeaturesSection from "../components/common/FeaturesSection";
import ContactSection from "../components/common/ContactSection";
import Footer from "../components/common/Footer";

import AuthModal from "../components/modals/AuthModal";
import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import VerifyCodeModal from "../components/modals/VerifyCodeModal";
import FarmerRegisterModal from "../components/modals/FarmerRegisterModal";
import InvestorRegisterModal from "../components/modals/InvestorRegisterModal";
import AgronomistRegisterModal from "../components/modals/AgronomistRegisterModal";

const LandingPage = () => {
  const [activeModal, setActiveModal] = useState<
    | "auth"
    | "login"
    | "register"
    | "verifyCode"
    | "farmerRegister"
    | "investorRegister"
    | "agronomistRegister"
    | null
  >(null);

  const openAuthModal = () => setActiveModal("auth");
  const openLoginModal = () => setActiveModal("login");
  const openRegisterModal = () => setActiveModal("register");
  const openVerifyCodeModal = () => setActiveModal("verifyCode");

  const openFarmerRegisterModal = () => setActiveModal("farmerRegister");
  const openInvestorRegisterModal = () => setActiveModal("investorRegister");
  const openAgronomistRegisterModal = () =>
    setActiveModal("agronomistRegister");

  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen">
      <Header onGetStartedClick={openAuthModal} />
      <div className="pt-16">
        <HeroSection />
        <MostPopularProjects />
        <FeaturesSection />
        <ContactSection />
      </div>
      <Footer />

      {activeModal === "auth" && (
        <AuthModal
          onLogin={openLoginModal}
          onRegister={openRegisterModal}
          onClose={closeModal}
        />
      )}
      {activeModal === "login" && (
        <LoginModal
          onVerifyIdentity={openVerifyCodeModal}
          onClose={closeModal}
          onBack={openAuthModal}
        />
      )}
      {activeModal === "register" && (
        <RegisterModal
          onFarmerRegister={openFarmerRegisterModal}
          onInvestorRegister={openInvestorRegisterModal}
          onAgronomistRegister={openAgronomistRegisterModal}
          onClose={closeModal}
          onBack={openAuthModal}
        />
      )}
      {activeModal === "verifyCode" && (
        <VerifyCodeModal onClose={closeModal} onBack={openLoginModal} />
      )}
      {activeModal === "farmerRegister" && (
        <FarmerRegisterModal onClose={closeModal} onBack={openRegisterModal} />
      )}
      {activeModal === "investorRegister" && (
        <InvestorRegisterModal
          onClose={closeModal}
          onBack={openRegisterModal}
        />
      )}
      {activeModal === "agronomistRegister" && (
        <AgronomistRegisterModal
          onClose={closeModal}
          onBack={openRegisterModal}
        />
      )}
    </div>
  );
};

export default LandingPage;
