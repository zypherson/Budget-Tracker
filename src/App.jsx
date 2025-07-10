import { useState } from 'react';
import Header from '../components/Header';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleAdd = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };
  const handleDelete = (idToDelete) => {
    setTransactions(transactions.filter((t) => t.id !== idToDelete));
  };
  

  return (
    <div>
      <Header />
      <TransactionForm onAdd={handleAdd} />
      <TransactionList
  transactions={transactions}
  onDelete={handleDelete}
/>
    </div>
    
  );
}

export default App;
