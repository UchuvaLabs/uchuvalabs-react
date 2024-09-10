import logo from "../../assets/images/uchuvalabs-logo-transp.png";
import riwi from "../../assets/images/logo-riwi.png";
import avalanche from "../../assets/images/logo-avalanche.png";
import appStores from "../../assets/images/app-stores.png";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center mb-6 pt-10">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Uchuva Labs Logo" className="h-10 mx-4" />
            <img src={riwi} alt="Riwi Logo" className="h-10 mx-4" />
            <img src={avalanche} alt="Avalanche Logo" className="h-10 mx-4" />
          </div>
          <a
            href="https://drive.google.com/drive/folders/1fsvOxiPel-JsnUT5mP1YuiZgBtXAKCsa?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={appStores} alt="App Stores" className="h-10 mx-4" />
          </a>
        </div>
        <p>&copy; 2024 Uchuva Labs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
