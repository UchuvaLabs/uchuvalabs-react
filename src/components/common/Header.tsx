import { useState, useEffect } from "react";
import logo from "../../assets/images/uchuvalabs-logo-transp.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

interface HeaderProps {
  onGetStartedClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGetStartedClick }) => {
  const [scrolling, setScrolling] = useState(false);
  const [sectionOffset, setSectionOffset] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const mostPopularSection = document.getElementById("projects");
    if (mostPopularSection) {
      setSectionOffset(mostPopularSection.offsetTop);
    }

    const handleScroll = () => {
      setScrolling(window.scrollY > sectionOffset - 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionOffset]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Scroll personalizado para evitar que el header tape la sección Hero
  const handleHomeClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault(); // Evita el comportamiento predeterminado
    const heroSection = document.getElementById("home");
    if (heroSection) {
      const headerHeight = 80; // Ajusta según la altura del header
      const offsetPosition = heroSection.offsetTop - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`${
        scrolling ? "bg-black" : "bg-black"
      } text-background py-4 fixed top-0 left-0 w-full z-50 shadow-lg transition-colors duration-300`}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-12">
        <div className="flex items-center flex-1">
          <img
            src={logo}
            alt="Uchuva Labs Logo"
            className="h-12 w-auto mx-4 md:mx-8 lg:mx-12"
          />
          <a href="#home" onClick={handleHomeClick}>
            <h1 className="text-3xl md:text-4xl font-extrabold text-accent tracking-wide">
              Uchuva Labs
            </h1>
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <a
              href="#home"
              className="text-white hover:text-accent cursor-pointer"
              onClick={handleHomeClick}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white hover:text-accent cursor-pointer"
            >
              Cultivos
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="text-white hover:text-accent cursor-pointer"
            >
              Funciones
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-accent cursor-pointer"
            >
              Contáctanos
            </a>
          </li>
        </ul>
        <button
          className="hidden md:block bg-text text-white py-2 px-4 rounded hover:bg-primary transition-colors duration-300 ml-4"
          onClick={onGetStartedClick}
        >
          Comenzar
        </button>

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
          } transition-transform duration-300 ease-in-out flex flex-col items-center justify-between py-8`}
        >
          <div className="w-full flex justify-end pr-8">
            <AiOutlineClose
              className="text-3xl cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          <ul className="text-center text-2xl space-y-6">
            <li>
              <a
                href="#home"
                className="text-white hover:text-accent cursor-pointer"
                onClick={(e) => {
                  toggleMenu();
                  handleHomeClick(e);
                }}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white hover:text-accent cursor-pointer"
                onClick={toggleMenu}
              >
                Cultivos
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-white hover:text-accent cursor-pointer"
                onClick={toggleMenu}
              >
                Funciones
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-accent cursor-pointer"
                onClick={toggleMenu}
              >
                Contáctanos
              </a>
            </li>
          </ul>

          <button
            className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-text transition-colors duration-300 mt-8"
            onClick={onGetStartedClick}
          >
            Comenzar
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
