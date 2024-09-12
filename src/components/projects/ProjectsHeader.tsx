import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import AvalancheWalletButton from "../wallet/AvalancheWalletButton";
import logo from "../../assets/images/uchuvalabs-logo-transp.png";

interface HeaderProps {
  onGetStartedClick: () => void;
}

const ProjectsHeader: React.FC<HeaderProps> = ({ onGetStartedClick }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-black text-background py-4 fixed top-0 left-0 w-full z-50 shadow-lg transition-colors duration-300">
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-12">
        <div className="flex items-center flex-1">
          <img
            src={logo}
            alt="Uchuva Labs Logo"
            className="h-12 w-auto mx-4 md:mx-8 lg:mx-12 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <a href="#project-list">
            <h1 className="text-3xl md:text-4xl font-extrabold text-accent tracking-wide">
              Uchuva Labs
            </h1>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Buscar proyectos"
            className="px-4 py-2 rounded-lg text-black flex-1 max-w-xs"
          />
          <button
            className="bg-text text-white py-2 px-4 rounded hover:bg-primary transition-colors duration-300 flex-1 max-w-xs"
            onClick={onGetStartedClick}
          >
            Comenzar
          </button>
          <AvalancheWalletButton />
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black text-white transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out flex flex-col items-center justify-center py-8`}
        >
          <div className="absolute top-4 right-4">
            <AiOutlineClose
              className="text-3xl cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          <div className="w-full flex flex-col items-center space-y-4 px-4">
            <input
              type="text"
              placeholder="Buscar proyectos"
              className="px-4 py-2 rounded-lg text-black w-full max-w-xs"
            />
            <button
              className="bg-text text-white py-2 px-4 rounded hover:bg-primary transition-colors duration-300 w-full max-w-xs"
              onClick={onGetStartedClick}
            >
              Comenzar
            </button>
            {/* <AvalancheWalletButton /> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default ProjectsHeader;
