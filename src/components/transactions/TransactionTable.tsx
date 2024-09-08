// // src/components/transactions/TransactionTable.tsx
// import React from 'react';

// const transactions = [
//   { id: 1, description: 'Compra de laptop', amount: '$1200', date: '2023-09-01' },
//   { id: 2, description: 'Venta de smartphone', amount: '$800', date: '2023-09-05' },
// ];

// const TransactionTable: React.FC = () => {
//   return (
//     <table className="min-w-full bg-white">
//       <thead>
//         <tr>
//           <th className="py-2 text-gray-500">Descripción</th>
//           <th className="py-2 text-gray-500">Monto</th>
//           <th className="py-2 text-gray-500">Fecha</th>
//         </tr>
//       </thead>
//       <tbody>
//         {transactions.map((transaction) => (
//           <tr key={transaction.id}>
//             <td className="py-2 border-b border-gray-200">{transaction.description}</td>
//             <td className="py-2 border-b border-gray-200">{transaction.amount}</td>
//             <td className="py-2 border-b border-gray-200">{transaction.date}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default TransactionTable;
