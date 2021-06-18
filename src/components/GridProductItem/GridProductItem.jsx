import React from 'react';
import PropTypes from 'prop-types';
import './GridProductItem.scss';
import { useDispatch } from 'react-redux';
import { setModal } from '../../redux/actions';

const GridProductItem = ({
  name,
  image,
  price
}) => {

    const dispatch = useDispatch();

  return(
    <>
      <div className='product-item-grid__image-container'>
        <img
          className='product-item-grid__image'
          src={image}
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
    </>
  )
}

GridProductItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
}

export default GridProductItem;
