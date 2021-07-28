import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import './Modal.scss';
import '../../styles/transition/modal.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className="modal__backdrop" onClick={handleBackdropClick}>
      <div className="modal__content">{children}</div>
    </div>,
    modalRoot,
  );
};

Modal.defaultProps = {
  onClose: () => null,
};

Modal.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;
