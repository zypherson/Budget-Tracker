import { useState } from 'react';
import Header from '../components/Header';
import TransactionForm from '../components/TransactionForm';

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleAdd = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  return (
    <div>
      <Header />
      <TransactionForm onAdd={handleAdd} />
    </div>
  );
}

export default App;
