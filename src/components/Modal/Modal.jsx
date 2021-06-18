import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import './Modal.scss';
import { getModal } from '../../redux/selectors';
import { hideModal } from '../../redux/actions';

const Modal = () => {
  const modal = useSelector(getModal);

  const dispatch = useDispatch();

  if (modal === null) {
    return null;
  }

  return (
    <div className="modal-overlay"
      onClick={() => dispatch(hideModal())}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <i className="fas fa-times modal-close"
          onClick={() => dispatch(hideModal())}
        >
        </i>
        <h2>{modal.title}</h2>
        <p>{modal.text}</p>
      </div>
    </div>
  );
}

Modal.propTypes = {
  text: PropTypes.string,
  onCloseButtonClick: PropTypes.func
}

export default Modal;