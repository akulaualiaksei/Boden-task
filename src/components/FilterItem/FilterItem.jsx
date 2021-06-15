import React from 'react';
import PropTypes from 'prop-types';
import './FilterItem.scss';

const FilterItem = ({categories}) => {

  return(
    <>
      <li className='catalog-filter__item'>
        <label>
          {categories}
          <input id="c2" type="checkbox" checked={false} onChange={()=>{}}/>
        </label>
      </li>
    </>
  )
};

FilterItem.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  tags: PropTypes.arrayOf(PropTypes.string)
}

export default FilterItem;
