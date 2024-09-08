import { useState, useEffect } from "react";

interface HeaderProps {
  onGetStartedClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGetStartedClick }) => {
  const [scrolling, setScrolling] = useState(false);
  const [sectionOffset, setSectionOffset] = useState(0);

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

  return (
    <header
      className={`${
        scrolling ? "bg-black" : "bg-black"
      } text-background py-4 fixed top-0 left-0 w-full z-50 shadow-lg transition-colors duration-300`}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-12">
        <div className="flex items-center flex-1">
          <img
            src="/src/assets/images/uchuvalabs-logo-transp.png"
            alt="Uchuva Labs Logo"
            className="h-12 w-auto mx-4 md:mx-8 lg:mx-12"
          />
          <a href="#home">
            <h1 className="text-3xl md:text-4xl font-extrabold text-accent tracking-wide">
              Uchuva Labs
            </h1>
          </a>
        </div>

        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <a
              href="#home"
              className="text-white hover:text-accent cursor-pointer"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white hover:text-accent cursor-pointer"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="text-white hover:text-accent cursor-pointer"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-accent cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>
        <button
          className="bg-text text-white py-2 px-4 rounded hover:bg-primary transition-colors duration-300 ml-4"
          onClick={onGetStartedClick}
        >
          Get Started
        </button>
      </nav>
    </header>
  );
};

export default Header;
