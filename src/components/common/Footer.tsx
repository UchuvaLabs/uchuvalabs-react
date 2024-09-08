const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center mb-6 pt-10">
          <div className="flex justify-center mb-4">
            <img
              src="/src/assets/images/uchuvalabs-logo-transp.png"
              alt="Uchuva Labs Logo"
              className="h-10 mx-4"
            />
            <img
              src="/src/assets/images/logo-riwi.png"
              alt="Riwi Logo"
              className="h-10 mx-4"
            />
            <img
              src="/src/assets/images/logo-avalanche.png"
              alt="Avalanche Logo"
              className="h-10 mx-4"
            />
          </div>
          <a
            href="https://drive.google.com/drive/folders/1fsvOxiPel-JsnUT5mP1YuiZgBtXAKCsa?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/src/assets/images/app-stores.png"
              alt="App Stores"
              className="h-10 mx-4"
            />
          </a>
        </div>
        <p>&copy; 2024 Uchuva Labs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
