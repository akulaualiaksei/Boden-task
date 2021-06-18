import React from 'react';
import { useSelector } from 'react-redux';
import { getSwitcherValue, getAllProducts } from '../../redux/selectors';
import ListProductItem from '../ListProductItem/ListProductItem';
import GridProductItem from '../GridProductItem/GridProductItem';
import './ProductsList.scss';

const ProductsList = () => {

  const isGridView = useSelector(getSwitcherValue);
  const productData = useSelector(getAllProducts);

  return(
      <div className='products-list'>
        { productData.length > 0 ? productData.map((product, index) => {
          if (isGridView) {
            return(
              <article
                className='product-item-grid'
                key={`${product.name}${index}`}
              >
                <GridProductItem
                  name={product.name}
                  image={product.image}
                  key={`${product.name}${index}`}
                  id={index}
                  price={product.price}
                />
              </article>
            )
          }
          return(
            <article
              className='product-item'
              key={`${product.name}${index}`}
            >
              <ListProductItem
                name={product.name}
                description={product.description}
                image={product.image}
                price={product.price}
                ean={product.ean}
                upc={product.upc}
                categories={product.categories}
                tags={product.tags}
              />
            </article>
          )
        })
        :
          <div className='loading'> Loading... </div>
        }
      </div>
)};

export default ProductsList;