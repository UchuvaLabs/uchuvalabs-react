import { useState } from "react";
import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";
import Cookies from "js-cookie";
import { login } from "../../services/authService";

interface VerifyCodeModalProps {
  onClose: () => void;
  onBack: () => void;
}

const VerifyCodeModal: React.FC<VerifyCodeModalProps> = ({
  onClose,
  onBack,
}) => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = async () => {
    setLoading(true);
    setError(""); // Limpiar errores anteriores
    try {
      const wallet = Cookies.get("wallet") || ""; // Obtener la dirección del wallet de la cookie, or use an empty string as default
      // Llamar al servicio para verificar el código OTP
      const response = await login(code, wallet);

      // Guardar el token en una cookie (con tiempo de expiración)
      Cookies.set("token", response.token.token, {
        expires: new Date(response.expiresAt), // Establecer expiración según el backend
        secure: true, // Para asegurar la cookie si está en HTTPS
        sameSite: "strict", // Evitar envío de la cookie en peticiones cross-site
      });
      console.log(response.token.token);
      console.log("Token guardado en la cookie:", response.token);

      // Cerrar el modal después de la verificación exitosa
      onClose();
    } catch (err) {
      console.error("Error al verificar el código:", err);
      setError("Failed to verify code. Please try again.");
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
          Ingresa el código de verificación
        </h2>

        {/* Input para ingresar el código OTP */}
        <input
          type="text"
          placeholder="Código de verificación"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full mb-4 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p> // Mostrar error si ocurre
        )}
        <button
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-text transition-colors duration-300 w-full"
          onClick={handleVerify}
          disabled={loading} // Desactivar el botón mientras se está procesando
        >
          {loading ? "Verificando..." : "Verificar"}
        </button>
      </div>
    </div>
  );
};

export default VerifyCodeModal;
