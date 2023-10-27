import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomToast = ({ showToast, onClose, variant, message }) => {
  return (
    <Toast show={showToast} onClose={onClose} className={`custom-toast ${variant}`}>
      <Toast.Header>
        <strong className="me-auto">{variant === 'success' ? 'Success!' : 'Error'}</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default CustomToast;

