import Header from "../components/common/Header";
import HeroSection from "../components/common/HeroSection";
import MostPopularProjects from "../components/common/MostPopularProjects";
import FeaturesSection from "../components/common/FeaturesSection";
import ContactSection from "../components/common/ContactSection";
import Footer from "../components/common/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <MostPopularProjects />
        <FeaturesSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
