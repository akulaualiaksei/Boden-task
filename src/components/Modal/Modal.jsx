import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import './Modal.scss';
import { getModal } from '../../redux/selectors';
import { hideModal } from '../../redux/actions';

const Modal = () => {
  const modal = useSelector(getModal);

  if (modal === null) {
    return null;
  }
  const dispatch = useDispatch();

  return (
    <div className="modal-overlay"
      onClick={() => dispatch(hideModal())}>
      <div className="modal">
      <i className="fas fa-times modal-close"
        onClick={() => dispatch(hideModal())}></i>
        title: {modal.title}
        text: {modal.text}
      </div>
    </div>
  );
}

Modal.propTypes = {
  text: PropTypes.string,
  onCloseButtonClick: PropTypes.func
}

export default Modal;