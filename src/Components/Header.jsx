function Header() {
    return (
      <header style={styles.header}>
        <h1>💸 Budget Tracker</h1>
      </header>
    );
  }
  
  const styles = {
    header: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '1rem 2rem',
      textAlign: 'center',
      fontSize: '1.5rem',
    },
  };
  
  export default Header;
  