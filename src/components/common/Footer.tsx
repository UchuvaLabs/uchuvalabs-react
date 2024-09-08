const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center mb-6 pt-10">
          <img
            src="/src/assets/images/uchuvalabs-logo-transp.png"
            alt="Riwi Logo"
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
        <p>&copy; 2024 Uchuva Labs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
