// import { useState } from "react";

// const TransferAVAX = () => {
//   const [account, setAccount] = useState(null);
//   const [transactionHash, setTransactionHash] = useState(null);

//   // Dirección quemada
//   const burnAddress = "0x0000000000000000000000000000000000000000";

//   const connectWallet = async () => {
//     try {
//       // Solicitar la cuenta conectada
//       const accounts = await window.ethereum.request({
//         method: "eth_requestAccounts",
//       });
//       setAccount(accounts[0]);
//       console.log("Connected account:", accounts[0]);
//     } catch (error) {
//       console.error("Error connecting to wallet:", error);
//     }
//   };

//   const sendAVAX = async () => {
//     try {
//       const transactionParameters = {
//         to: burnAddress, // Dirección de quemado
//         from: account, // Dirección desde la cual se enviarán los fondos
//         value: window.ethereum.utils.toHex(
//           window.ethereum.utils.toWei("0.01", "ether")
//         ), // Monto en AVAX (aquí 0.01 AVAX)
//         gasPrice: window.ethereum.utils.toHex(
//           window.ethereum.utils.toWei("30", "gwei")
//         ), // Gas price en gwei
//         gas: window.ethereum.utils.toHex(21000), // Gas limit para una transferencia básica
//       };

//       // Enviar la transacción
//       const txHash = await window.ethereum.request({
//         method: "eth_sendTransaction",
//         params: [transactionParameters],
//       });

//       setTransactionHash(txHash);
//       console.log("Transaction hash:", txHash);
//     } catch (error) {
//       console.error("Error sending AVAX:", error);
//     }
//   };

//   return (
//     <div>
//       {account ? (
//         <div>
//           <p>Connected Account: {account}</p>
//           <button onClick={sendAVAX}>Send 0.01 AVAX to Burn Address</button>
//           {transactionHash && <p>Transaction sent! Hash: {transactionHash}</p>}
//         </div>
//       ) : (
//         <button onClick={connectWallet}>Invertir</button>
//       )}
//     </div>
//   );
// };

// export default TransferAVAX;

import { useState } from "react";

const TransferAVAX = () => {
  const [account, setAccount] = useState(null);
  const [transactionHash, setTransactionHash] = useState(null);

  // Dirección quemada
  const burnAddress = "0x0000000000000000000000000000000000000000";

  const connectWallet = async () => {
    try {
      // Solicitar la cuenta conectada
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      console.log("Connected account:", accounts[0]);
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  const sendAVAX = async () => {
    try {
      const transactionParameters = {
        to: burnAddress, // Dirección de quemado
        from: account, // Dirección desde la cual se enviarán los fondos
        value: window.ethereum.utils.toHex(
          window.ethereum.utils.toWei("0.01", "ether")
        ), // Monto en AVAX (aquí 0.01 AVAX)
        gasPrice: window.ethereum.utils.toHex(
          window.ethereum.utils.toWei("30", "gwei")
        ), // Gas price en gwei
        gas: window.ethereum.utils.toHex(21000), // Gas limit para una transferencia básica
      };

      // Enviar la transacción
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });

      setTransactionHash(txHash);
      console.log("Transaction hash:", txHash);
    } catch (error) {
      console.error("Error sending AVAX:", error);
    }
  };

  return (
    <div>
      {account ? (
        <div>
          <p>Connected Account: {account}</p>
          <button onClick={sendAVAX}>Send 0.01 AVAX to Burn Address</button>
          {transactionHash && <p>Transaction sent! Hash: {transactionHash}</p>}
        </div>
      ) : (
        <div>
          <button onClick={connectWallet}>Invertir</button>
        </div>
      )}
    </div>
  );
};

export default TransferAVAX;
