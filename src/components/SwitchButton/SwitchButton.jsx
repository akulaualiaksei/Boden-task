import React from 'react';
import './SwitchButton.scss';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getSwitcherValue } from '../../redux/selectors';
import { changeListView } from '../../redux/actions';

const SwitchButton = () => {

  const isOn = useSelector(getSwitcherValue);

  const dispatch = useDispatch();

  const onChange = () => {
    dispatch(changeListView(!isOn));
  }

  return(
    <div className='switch-container'>
      <input
        checked={isOn}
        onChange={onChange}
        className='switch-checkbox'
        id='switch-view'
        type='checkbox'
      />
      <label
        className='switch-label'
        htmlFor='switch-view'
      >
        <i className="fas fa-list-ul"></i>
        <span className='switch-button'></span>
        <i className="fas fa-th-large"></i>
      </label>
    </div>
  )};

  SwitchButton.propTypes = {
    isOn: PropTypes.bool,
    handleToggle: PropTypes.func
  }

export default SwitchButton;