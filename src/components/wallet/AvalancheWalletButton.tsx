import React, { useState } from "react";
import { Avalanche, BinTools, Buffer, AVMAPI } from "avalanche";

const AvalancheWalletButton = () => {
  const [account, setAccount] = useState(null);

  const connectToCoreWallet = async () => {
    try {
      if (window.ethereum) {
        const chainId = "X"; // Cambiar al ID de cadena adecuado
        const address = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(address[0]);
        console.log("Connected to Core Wallet:", address[0]);
      } else {
        alert("Core Wallet extension is not installed.");
      }
    } catch (error) {
      console.error("Error connecting to Core Wallet:", error);
    }
  };

  return (
    <div>
      {account ? (
        <div>
          <p>Connected Account: {account}</p>
        </div>
      ) : (
        <button
          className="bg-text text-white py-2 px-4 rounded hover:bg-primary transition-colors duration-300 ml-4"
          onClick={connectToCoreWallet}
        >
          Connect to Core Wallet
        </button>
      )}
    </div>
  );
};

export default AvalancheWalletButton;
