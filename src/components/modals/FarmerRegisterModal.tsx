import React, { useState } from "react";
import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";
import apiClient from "../../services/apiClient";

interface FarmerRegisterModalProps {
  onClose: () => void;
  onBack: () => void;
}

const FarmerRegisterModal: React.FC<FarmerRegisterModalProps> = ({
  onClose,
  onBack,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    wallet: "",
    experiencia: "",
    certificaciones: [] as string[],
    areaTotalCultivable: 0,
    ubicacionesTierras: [] as string[],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const value =
      field === "areaTotalCultivable" ? Number(e.target.value) : e.target.value;
    setFormData({ ...formData, [field]: value });
  };

  const handleArrayChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData({ ...formData, [field]: e.target.value.split(",") });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await apiClient.post(
        "/secure/user/register/farmer",
        formData
      );

      if (response.status !== 200) {
        throw new Error("Failed to register. Please try again.");
      }

      const data = response.data;
      console.log("Farmer registered:", data);

      onClose();
    } catch (error) {
      setError((error as Error).message);
      console.error("Error during registration:", error);
    } finally {
      setLoading(false);
    }
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
          Registro de Agricultor
        </h2>

        {/* Mostrar error si ocurre */}
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        {/* Campos del formulario */}
        <input
          type="text"
          placeholder="Nombre completo"
          value={formData.fullName}
          onChange={(e) => handleInputChange(e, "fullName")}
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
          value={formData.wallet}
          onChange={(e) => handleInputChange(e, "wallet")}
          className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <input
          type="text"
          placeholder="Experiencia"
          value={formData.experiencia}
          onChange={(e) => handleInputChange(e, "experiencia")}
          className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <input
          type="text"
          placeholder="Certificaciones"
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
          placeholder="Ubicación del terreno"
          value={formData.ubicacionesTierras.join(",")}
          onChange={(e) => handleArrayChange(e, "ubicacionesTierras")}
          className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />

        {/* Botones */}
        <div className="flex justify-center">
          <button
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-text transition-colors duration-300 w-full max-w-full"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Creando cuenta..." : "Crear cuenta"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmerRegisterModal;
