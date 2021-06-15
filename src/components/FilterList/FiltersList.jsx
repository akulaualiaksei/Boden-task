import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './FilterList.scss';
import FilterItem from '../FilterItem/FilterItem';
import {
  getFilteredProducts
} from '../../redux/selectors';

const FiltersList = () => {
  const products = useSelector(getFilteredProducts);
  const productsArray = useSelector(state => state.products.length)

  useEffect(() => {
  }, [products, productsArray])

  return(
    <div className='catalog-filters'>
      <div className='catalog-filter'>
        <div className='catalog-filter-name'>
          <h3 className='category-filter__name'> category filter name</h3>
        </div>
        <div className='catalog-filter-checkboxes'>
          <ul className='catalog-filter__items'>
            { products ? products.map((product) => (
              <FilterItem
                key={product.categories}
                categories={product.categories.join(' ; ')}
              />
            )) : <div> refresh page </div>}
          </ul>
        </div>
      </div>
    </div>
  )
};

FiltersList.propTypes = {
  productData: PropTypes.arrayOf(
    PropTypes.shape({
      categories: PropTypes.arrayOf(PropTypes.string),
      tags: PropTypes.arrayOf(PropTypes.string),
  })),
}

export default FiltersList;
