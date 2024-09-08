import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface AuthModalProps {
  onLogin: () => void;
  onRegister: () => void;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({
  onLogin,
  onRegister,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-black rounded-lg p-8 w-full max-w-md shadow-2xl relative">
        {/* Ícono de cerrar */}
        <button
          className="absolute top-4 right-4 text-darkGray hover:text-red-600 transition duration-300"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>

        {/* Título centrado */}
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Get Started
        </h2>

        {/* Botones de acción, uno debajo del otro */}
        <div className="flex flex-col gap-4">
          <button
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-text transition-colors duration-300"
            onClick={onLogin}
          >
            Login
          </button>
          <button
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-text transition-colors duration-300"
            onClick={onRegister}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
