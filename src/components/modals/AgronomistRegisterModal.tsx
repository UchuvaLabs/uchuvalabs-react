import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";

interface AgronomistRegisterModalProps {
  onClose: () => void;
  onBack: () => void;
}

const AgronomistRegisterModal: React.FC<AgronomistRegisterModalProps> = ({
  onClose,
  onBack,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    wallet_address: "",
    tituloUniversitario: "",
    especializacion: "",
    areasExpertise: [] as string[],
    certificaciones: [] as string[],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleArrayChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData({ ...formData, [field]: e.target.value.split(",") });
  };

  const handleSubmit = () => {
    console.log("Agronomist registration data:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-black rounded-lg p-8 w-full max-w-lg shadow-2xl relative">
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
          Registro de Agrónomo
        </h2>

        {/* Campos del formulario */}
        <input
          type="text"
          placeholder="Nombre completo"
          value={formData.name}
          onChange={(e) => handleInputChange(e, "name")}
          className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={(e) => handleInputChange(e, "email")}
          className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <input
          type="text"
          placeholder="Dirección de Wallet"
          value={formData.wallet_address}
          onChange={(e) => handleInputChange(e, "wallet_address")}
          className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <input
          type="text"
          placeholder="Título Universitario"
          value={formData.tituloUniversitario}
          onChange={(e) => handleInputChange(e, "tituloUniversitario")}
          className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <input
          type="text"
          placeholder="Especialización"
          value={formData.especializacion}
          onChange={(e) => handleInputChange(e, "especializacion")}
          className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <input
          type="text"
          placeholder="Áreas de Expertise"
          value={formData.areasExpertise.join(",")}
          onChange={(e) => handleArrayChange(e, "areasExpertise")}
          className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <input
          type="text"
          placeholder="Certificaciones"
          value={formData.certificaciones.join(",")}
          onChange={(e) => handleArrayChange(e, "certificaciones")}
          className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />

        {/* Botones */}
        <div className="flex justify-center">
          <button
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-text transition-colors duration-300 w-full max-w-full"
            onClick={handleSubmit}
          >
            Crear cuenta
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgronomistRegisterModal;
