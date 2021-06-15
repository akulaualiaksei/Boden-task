import React from 'react';
import './SwitcherButton.scss';
import PropTypes from 'prop-types';

const SwitcherButton = ({isOn, handleToggle}) => {

  return(
    <div className='switch-container'>
    <input
    checked={isOn}
    onChange={handleToggle}
    className='switch-checkbox'
    id='switch-view'
    type='checkbox'
    />
    <label
    className='switch-label'
    htmlFor='switch-view'>
      <i className="fas fa-list-ul"></i>
      <span className='switch-button'>

      </span>
      <i className="fas fa-th-large"></i>
    </label>
    </div>
  )};

  SwitcherButton.propTypes = {
    isOn: PropTypes.bool,
    handleToggle: PropTypes.func
  }

export default SwitcherButton;