import { useState } from 'react';

function TransactionForm({ onAdd }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
      type,
    };

    onAdd(newTransaction);

    
    setText('');
    setAmount('');
    setType('income');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Description"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={styles.input}
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={styles.select}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit" style={styles.button}>Add</button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    padding: '1rem 2rem',
    maxWidth: '400px',
    margin: '0 auto',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
  },
  select: {
    padding: '0.5rem',
    fontSize: '1rem',
  },
  button: {
    padding: '0.5rem',
    backgroundColor: '#28a745',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
  },
};

export default TransactionForm;
