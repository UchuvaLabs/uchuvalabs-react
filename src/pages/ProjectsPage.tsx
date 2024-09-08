import { useState } from "react";

import Header from "../components/projects/ProjectsHeader";
import ProjectList from "../components/projects/ProjectList";
import ContactSection from "../components/common/ContactSection";
import Footer from "../components/common/Footer";

import AuthModal from "../components/modals/AuthModal";
import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import VerifyCodeModal from "../components/modals/VerifyCodeModal";
import FarmerRegisterModal from "../components/modals/FarmerRegisterModal";
import InvestorRegisterModal from "../components/modals/InvestorRegisterModal";
import AgronomistRegisterModal from "../components/modals/AgronomistRegisterModal";

const ProjectsPage = () => {
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
    <div>
      <Header onGetStartedClick={openAuthModal} />
      <ProjectList />
      <ContactSection />
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

export default ProjectsPage;
