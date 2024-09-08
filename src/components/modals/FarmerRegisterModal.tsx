import React, { useState } from "react";
import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";

interface FarmerRegisterModalProps {
  onClose: () => void;
  onBack: () => void;
}

const FarmerRegisterModal: React.FC<FarmerRegisterModalProps> = ({
  onClose,
  onBack,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    wallet_address: "",
    experiencia: "",
    certificaciones: [] as string[],
    areaTotalCultivable: "",
    ubicacionesTierras: [] as string[],
    historialCultivos: [] as {
      cultivoId: string;
      tipoCultivo: string;
      fechaInicio: Date;
      fechaFin: Date;
      resumen: string;
      rendimiento: number;
    }[],
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
    console.log("Farmer registration data:", formData);
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
          Register as Farmer
        </h2>

        {/* Campos del formulario */}
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => handleInputChange(e, "name")}
          className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleInputChange(e, "email")}
          className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <input
          type="text"
          placeholder="Wallet Address"
          value={formData.wallet_address}
          onChange={(e) => handleInputChange(e, "wallet_address")}
          className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <input
          type="text"
          placeholder="Experience"
          value={formData.experiencia}
          onChange={(e) => handleInputChange(e, "experiencia")}
          className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <input
          type="text"
          placeholder="Certifications (separated by commas)"
          value={formData.certificaciones.join(",")}
          onChange={(e) => handleArrayChange(e, "certificaciones")}
          className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <input
          type="number"
          placeholder="Total Cultivable Area (in hectares)"
          value={formData.areaTotalCultivable}
          onChange={(e) => handleInputChange(e, "areaTotalCultivable")}
          className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <input
          type="text"
          placeholder="Land Locations (separated by commas)"
          value={formData.ubicacionesTierras.join(",")}
          onChange={(e) => handleArrayChange(e, "ubicacionesTierras")}
          className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />

        {/* Botones */}
        <div className="flex justify-center">
          <button
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-text transition-colors duration-300 w-full max-w-full"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmerRegisterModal;
