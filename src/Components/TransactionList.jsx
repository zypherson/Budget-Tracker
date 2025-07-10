function TransactionList({ transactions, onDelete }) {
    return (
      <div style={styles.container}>
        <h3>Transactions</h3>
        <ul style={styles.list}>
          {transactions.map((t) => (
            <li key={t.id} style={styles.item}>
              <span>
                {t.text} - ${t.amount.toFixed(2)}
                <span style={{ color: t.type === 'income' ? 'green' : 'red' }}>
                  {' '}({t.type})
                </span>
              </span>
            <button
                    onClick={() => {
                     const confirmDelete = window.confirm(`Delete "${t.text}" for $${t.amount}?`);
                     if (confirmDelete) {
                     onDelete(t.id);
                     }
                     }}
                    style={styles.delete}
                        >
                     ❌
            </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  const styles = {
    container: {
      maxWidth: '500px',
      margin: '2rem auto',
      padding: '0 1rem',
    },
    list: {
      listStyle: 'none',
      padding: 0,
    },
    item: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '0.5rem',
      borderBottom: '1px solid #ccc',
      paddingBottom: '0.5rem',
    },
    delete: {
      background: 'transparent',
      border: 'none',
      color: 'red',
      fontSize: '1.2rem',
      cursor: 'pointer',
    },
  };
  
  export default TransactionList;
  