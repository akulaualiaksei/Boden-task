import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getSwitcherValue } from '../../redux/selectors';
import ListProductItem from '../ListProductItem/ListProductItem';
import GridProductItem from '../GridProductItem/GridProductItem';
import jsonData from '../../responce.json';
import './ProductsList.scss';

const ProductsList = ({productData}) => {

  const isGridView = useSelector(getSwitcherValue);
  const isFetchFailed = useSelector(state => state.products.error);
  const { data } = jsonData;

  if (productData.length === 0 && isFetchFailed !== null) console.log('failed get data from API, use data from saved json');

  return(
      <div className='products-list'>
        { (productData.length>0 && isFetchFailed !== null) ? productData.map((product, index) => {
          if (isGridView) {
            return(
              <GridProductItem
                name={product.name}
                img={product.image}
                key={index}
                id={index}
                price={product.price}
              />
            )
          }
          return(
            <ListProductItem
              name={product.name}
              description={product.description}
              img={product.image}
              key={index}
              id={index}
              price={product.price}
              ean={product.ean}
              upc={product.upc}
              categories={product.categories}
              tags={product.tags}
            />
          )
        })
        :
        // <div> error from API </div>
        data.map((product, index) => {
          if (isGridView) {
            return(
              <GridProductItem
                name={product.name}
                img={product.image}
                key={index}
                id={index}
                price={product.price}
              />
            )
          }
          return(
            <ListProductItem
              name={product.name}
              description={product.description}
              img={product.image}
              key={index}
              id={index}
              price={product.price}
              ean={product.ean}
              upc={product.upc}
              categories={product.categories}
              tags={product.tags}
            />
          )
        })
        }
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