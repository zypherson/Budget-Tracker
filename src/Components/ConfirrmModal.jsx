import React from 'react';

function ConfirmModal({ isOpen, message, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div style={overlayStyles}>
      <div style={modalStyles}>
        <p>{message}</p>
        <div style={{ marginTop: '1rem', textAlign: 'right' }}>
          <button onClick={onCancel} style={buttonStyles.cancel}>
            Cancel
          </button>
          <button onClick={onConfirm} style={buttonStyles.confirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

const overlayStyles = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalStyles = {
  background: 'white',
  padding: '1.5rem',
  borderRadius: '8px',
  width: '300px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
};

const buttonStyles = {
  cancel: {
    marginRight: '1rem',
    padding: '0.5rem 1rem',
    background: '#ccc',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  confirm: {
    padding: '0.5rem 1rem',
    background: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ConfirmModal;
