import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import logo from '../../assets/images/uchuvalabs-logo-transp.png';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const x = mousePosition.x / window.innerWidth - 0.5;
  const y = mousePosition.y / window.innerHeight - 0.5;

  return (
    <section
      id="home"
      className="mt-4 bg-gradient-to-b from-black to-primary min-h-screen flex items-center justify-center relative overflow-hidden px-6 md:px-12"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-accent mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Transformando la agricultura con Blockchain
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Innovando la gestión de cultivos mediante la tokenización avanzada y
            la tecnología blockchain.
          </motion.p>
          <a href="#projects">
            <button className="bg-accent text-text py-3 px-6 md:px-8 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
              Saber más
            </button>
          </a>
        </div>

        <div
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          style={{
            transform: `translate3d(${x * 15}px, ${y * 15}px, 0)`,
            transition: "transform 0.5s ease-out",
          }}
        >
          <motion.img
            src={logo}
            alt="3D Image"
            className="w-full max-w-xl h-auto"
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
