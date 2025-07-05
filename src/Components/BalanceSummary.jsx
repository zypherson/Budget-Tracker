function BalanceSummary({ transactions }) {
    const income = transactions
      .filter((t) => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
  
    const expenses = transactions
      .filter((t) => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
  
    const balance = income - expenses;
  
    return (
      <div style={styles.container}>
        <h2>Balance: ${balance.toFixed(2)}</h2>
        <div style={styles.breakdown}>
          <span style={{ color: 'green' }}>Income: ${income.toFixed(2)}</span>
          <span style={{ color: 'red' }}>Expenses: ${expenses.toFixed(2)}</span>
        </div>
      </div>
    );
  }
  
  const styles = {
    container: {
      textAlign: 'center',
      padding: '1rem 2rem',
    },
    breakdown: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      fontSize: '1rem',
      marginTop: '0.5rem',
    },
  };
  
  export default BalanceSummary;
  