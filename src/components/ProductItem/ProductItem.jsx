import React from 'react';
import PropTypes from 'prop-types';
import './ProductItem.scss';
import { useDispatch } from 'react-redux';
import { setModal } from '../../redux/actions';

const ProductItem = ({
  name,
  img,
  price,
  ean,
  upc,
  categories,
  tags
}) => {

    const dispatch = useDispatch();

  return(
    <article className='product-item'>
      <div className='product-item__image-container'>
        <img
          className='product-item__image'
          src={img}
          alt={name}
        />
      </div>
      <div className='product-item__text'>
        <h2 className='product-item__name'>{name}</h2>
        <ul className='product-item__description'>
          <li className='description__item'>
            ean:
            <span> {ean}</span>
          </li>
          <li className='description__item'>
            upc:
            <span> {upc}</span>
          </li>
          <li className='description__item'>
            categories:
            <span> {categories.join('; ')}</span>
          </li>
          <li className='description__item'>
            tags:
            <span> {tags.join('; ')}</span>
          </li>
          </ul>
        </div>
        <div className='product-item__cart'>
          <p className='product-item__price'>
            {price}
            <span className='currency'>&#8381;</span>
          </p>
          <button className='product-item__button' onClick={() => dispatch(setModal({title: name, text: 'some text'}))}>
            <i className="fas fa-shopping-cart"></i>
            <span> В корзину </span>
          </button>
      </div>
    </article>
  )
}

ProductItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.string,
  ean: PropTypes.string,
  upc: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  tags: PropTypes.arrayOf(PropTypes.string)
}

export default ProductItem;
