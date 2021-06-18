import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/actions';
import ProductsList from '../ProductsList/ProductsList';
import SwitcherButton from '../SwitcherButton/SwitcherButton';
import FiltersList from '../FilterList/FiltersList';
import './Main.scss';

const Main = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return(
    <main className='main'>
    <section className='menu'>
    <FiltersList/>
    </section>
    <section className='products'>
      <SwitcherButton/>
      <ProductsList/>
    </section>
    </main>
  );
}

export default Main;
