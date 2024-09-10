import React from "react";
import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";

interface RegisterModalProps {
  onFarmerRegister: () => void;
  onInvestorRegister: () => void;
  onAgronomistRegister: () => void;
  onClose: () => void;
  onBack: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  onFarmerRegister,
  onInvestorRegister,
  onAgronomistRegister,
  onClose,
  onBack,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-black rounded-lg p-8 w-full max-w-md shadow-2xl relative">
        {/* Ícono de volver */}
        <button
          className="absolute top-4 left-4 text-white hover:text-text transition duration-300"
          onClick={onBack}
        >
          <AiOutlineArrowLeft size={24} />
        </button>
        {/* Ícono de cerrar */}
        <button
          className="absolute top-4 right-4 text-darkGray hover:text-red-600 transition duration-300"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>

        {/* Título */}
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Registrarme cómo
        </h2>

        {/* Botones de registro */}
        <div className="flex flex-col gap-4">
          <button
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-text transition-colors duration-300"
            onClick={onFarmerRegister}
          >
            Agricultor
          </button>
          <button
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-text transition-colors duration-300"
            onClick={onInvestorRegister}
          >
            Inversionista
          </button>
          <button
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-text transition-colors duration-300"
            onClick={onAgronomistRegister}
          >
            Agrónomo
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
