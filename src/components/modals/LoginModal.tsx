import React, { useState } from "react";
import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";
import { generateOtp } from "../../services/authService";
import Cookies from "js-cookie";

interface LoginModalProps {
  onVerifyIdentity: () => void;
  onClose: () => void;
  onBack: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  onVerifyIdentity,
  onClose,
  onBack,
}) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [loading, setLoading] = useState(false); // Para manejar el estado de carga
  const [error, setError] = useState(""); // Para manejar los errores

  const handleSendCode = async () => {
    setLoading(true); // Iniciar la carga
    setError(""); // Limpiar errores anteriores
    try {
      // Llamar al servicio para generar el OTP
      await generateOtp(walletAddress);
      Cookies.set("wallet", walletAddress); // Guardar la dirección del wallet en una cookie
      // Aquí puedes mostrar una notificación o mensaje de éxito si es necesario
      console.log("OTP enviado al wallet:", walletAddress);

      // Llamar a la función de verificación cuando el OTP se haya enviado correctamente
      onVerifyIdentity();
    } catch (err) {
      console.error("Error al enviar el OTP:", err);
      setError("Failed to send code. Please try again.");
    } finally {
      setLoading(false); // Finalizar la carga
    }
  };

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
          Verifica tu identidad
        </h2>

        {/* Contenido del modal */}
        <input
          type="text"
          placeholder="Ingresa tu wallet"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full mb-4 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p> // Mostrar error si existe
        )}
        <button
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-text transition-colors duration-300 w-full"
          onClick={handleSendCode}
          disabled={loading} // Desactivar el botón mientras se está enviando la petición
        >
          {loading ? "Enviando..." : "Enviar código"}
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
