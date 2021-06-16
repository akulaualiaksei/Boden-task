import React from 'react';
import PropTypes from 'prop-types';
import './GridProductItem.scss';
import { useDispatch } from 'react-redux';
import { setModal } from '../../redux/actions';

const GridProductItem = ({name,
  img, price, key}) => {

    const dispatch = useDispatch();

  return(
    <article
      className='product-item-grid'
      key={key}
      >
        <div className='product-item-grid__image-container'>
          <img
            className='product-item-grid__image'
            src={img}
            alt={name}
          />
        </div>
          <h2 className='product-item-grid__name'>{name}</h2>
          <p className='product-item-grid__price'>
            {price}
            <span className='currency'>&#8381;</span>
            </p>
          <button className='product-item-grid__button' onClick={() => dispatch(setModal({title: `${name} added to cart`, text: `cost ${price}`}))}>
            <i className="fas fa-shopping-cart"></i>
            <span> В корзину </span>
          </button>
      </article>
  )
}

GridProductItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  key: PropTypes.number,
  img: PropTypes.string,
  price: PropTypes.string,
  ean: PropTypes.string,
  upc: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  tags: PropTypes.arrayOf(PropTypes.string)
}

export default GridProductItem;
