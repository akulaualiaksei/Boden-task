import React from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../redux/actions';
import './FilterList.scss';

const dataFilterCategory = [
  {
    name: 'Смартфоны',
    count: 774,
  },
  {
    name: 'iPhone',
    count: 124,
  }
]
const dataBrandCategory = [
  {
    name: 'Samsung',
    count: 168,
  },
  {
    name: 'Apple',
    count: 124,
  },
  {
    name: 'Xiaomi',
    count: 102,
  },
  {
    name: 'Honor',
    count: 88,
  },
  {
    name: 'Huawei',
    count: 62,
  }
]

const FiltersList = () => {

  const dispatch = useDispatch();
  const onClick = (product) => dispatch(setModal({title: `checkbox click`, text: `${product}`}))

  return(
    <div className='filters'>
      <div className='filter'>
      <div className='filter__name-container'>
        <h3 className='filter__name'> категория </h3>
        <span className='filter__name-icon'>
          <i className="fas fa-chevron-up"></i>
        </span>
      </div>
        <ul className='filter__items'>
          { dataFilterCategory.length > 0 && dataFilterCategory.map(({name, count}, index) => (
            <li className='filter__item' key={name} onClick={()=> onClick(name)}>
              <input type='checkbox' id={`${name}-${index}`}/>
              <label className='checkbox-label' htmlFor={`${name}-${index}`}>
                {name} <span className='product-count'>{`${count}`}</span>
              </label>
            </li>
          ))}

        </ul>
      </div>
      <div className='filter'>
        <div className='filter__name-container'>
          <h3 className='filter__name'> бренд </h3>
          <span className='filter__name-icon'>
            <i className="fas fa-chevron-up"></i>
          </span>
        </div>
        <ul className='filter__items'>
            { dataBrandCategory.length > 0 && dataBrandCategory.map(({name, count}, index) => (
              <li className='filter__item' key={name} onClick={()=> onClick(name)}>
                <input type='checkbox' id={`${name}-${index}`}/>
                <label className='checkbox-label' htmlFor={`${name}-${index}`}>
                  {name} <span className='product-count'>{`${count}`}</span>
                </label>
              </li>
            ))
            }
          </ul>
          <button className='show-more__button'>Показать еще</button>
      </div>
      <div className='filter-price'>
        <div className='filter__name-container'>
          <h3 className='filter__name'> цена </h3>
          <span className='filter__name-icon'>
            <i className="fas fa-chevron-up"></i>
          </span>
        </div>
        <div className='filter-list_container'>
          <input type="text" className="input-price first" defaultValue='343'/>
          <span className='input-price__separator'>-</span>
          <input type="text" className="input-price second" defaultValue='199 990'/>
        </div>
      </div>
    </div>
  )
};

export default FiltersList;
