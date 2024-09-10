import { useState } from "react";

declare global {
  interface Window {
    ethereum: any;
  }
}

const AvalancheWalletButton = () => {
  const [account, setAccount] = useState(null);

  const connectToCoreWallet = async () => {
    try {
      if (window.ethereum) {
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
          className="bg-text text-white py-2 px-4 rounded hover:bg-primary transition-colors duration-300"
          onClick={connectToCoreWallet}
        >
          Conectar Wallet
        </button>
      )}
    </div>
  );
};

export default AvalancheWalletButton;
