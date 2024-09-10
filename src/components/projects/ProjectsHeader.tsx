import { useNavigate } from "react-router-dom";
import AvalancheWalletButton from "../wallet/AvalancheWalletButton";

import logo from "../../assets/images/uchuvalabs-logo-transp.png";

interface HeaderProps {
  onGetStartedClick: () => void;
}

const ProjectsHeader: React.FC<HeaderProps> = ({ onGetStartedClick }) => {
  const navigate = useNavigate();
  return (
    <header
      className={
        "bg-black text-background py-4 fixed top-0 left-0 w-full z-50 shadow-lg transition-colors duration-300"
      }
    >
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-12">
        <div className="flex items-center flex-1">
          <img
            src={logo}
            alt="Uchuva Labs Logo"
            className="h-12 w-auto mx-4 md:mx-8 lg:mx-12 cursor-pointer"
            {...{ onClick: () => navigate("/") }}
          />
          <a href="#project-list">
            <h1 className="text-3xl md:text-4xl font-extrabold text-accent tracking-wide">
              Uchuva Labs
            </h1>
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Buscar proyectos"
            className="px-4 py-2 rounded-lg text-black"
          />
          <button
            className="bg-text text-white py-2 px-4 rounded hover:bg-primary transition-colors duration-300 ml-4"
            onClick={onGetStartedClick}
          >
            Comenzar
          </button>
          <AvalancheWalletButton />
        </div>
      </nav>
    </header>
  );
};

export default ProjectsHeader;
