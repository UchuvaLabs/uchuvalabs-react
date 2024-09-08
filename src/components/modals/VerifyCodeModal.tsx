import { useState } from "react";
import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";

interface VerifyCodeModalProps {
  onClose: () => void;
  onBack: () => void;
}

const VerifyCodeModal: React.FC<VerifyCodeModalProps> = ({
  onClose,
  onBack,
}) => {
  const [code, setCode] = useState("");

  const handleVerify = () => {
    // Aquí iría la lógica para verificar el código
    console.log("Verifying code:", code);
    onClose();
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
          Enter the verification code
        </h2>

        {/* Contenido del modal */}
        <input
          type="text"
          placeholder="Enter the code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full mb-4 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <button
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-text transition-colors duration-300 w-full"
          onClick={handleVerify}
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default VerifyCodeModal;
