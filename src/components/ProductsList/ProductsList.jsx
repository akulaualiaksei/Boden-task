import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem/ProductItem';
import './ProductsList.scss';

const ProductsList = ({productData}) => {
  return(

  <div className='products-list'>
    { productData ? productData.map((product) => (
      <ProductItem
        name={product.name}
        description={product.description}
        img={product.image}
        key={product.name}
        price={product.price}
        ean={product.ean}
        upc={product.upc}
        categories={product.categories}
        tags={product.tags}
      />
    )) : <div> refresh page </div>}
  </div>
)};

ProductsList.propTypes = {
  productData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
  })),
}

export default ProductsList;