import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions';
import REQUEST_URL from '../constant';
import ProductsList from './ProductsList/ProductsList';
import SwitcherButton from './SwitcherButton/SwitcherButton';
import FiltersList from './FilterList/FiltersList';
import { getAllProducts } from '../redux/selectors';
import './Main.scss';

const Main = () => {
  const products = useSelector(getAllProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(REQUEST_URL));
  }, []);

  return(
    <main className='main'>
    <section className='menu'>
    <FiltersList productData={products||[]}/>
    </section>
    <section className='products'>
      <SwitcherButton/>
      <ProductsList productData={products||[]}/>
    </section>
    </main>
  );
}

export default Main;
