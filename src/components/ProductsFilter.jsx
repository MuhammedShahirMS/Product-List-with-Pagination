import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { productActions } from '../Redux/products-slice';
import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const ProductsFilter = () => {

  const dispatch   = useDispatch();
  const searchItem = useRef();
  const isFiltered = useSelector(state => state.filter.isFiltered);

  const searchHandler = () => {
    dispatch(productActions.searchProduct(searchItem.current.value));
  }

  const selectHandler = (e) => {
    dispatch(productActions.filterProducts(e.target.value));
  }

  const resetHandler = () => {
    dispatch(productActions.clearFilters());
  }


  return (
    <Row>
      <Col xs={12} md={4}>
        <label> Filter by Category- </label>
        <select onChange={selectHandler} >
          <option value="none">none</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value='jewelery'>Jewellery</option>
          <option value='electronics'>Electronics</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
        </Col>

    <Col xs={12} md={4}>
    <label htmlFor='searchItem'> Search- </label>
    <input id="inputID" name='searchItem' type='text' ref={searchItem} />
    <Button variant='dark' onClick={searchHandler}>Go</Button>
    </Col>
    <Col>
    { isFiltered && <Button variant='dark' onClick={resetHandler}>Clear Filters</Button>}
    </Col>
      
    </Row>
  );
};

export default ProductsFilter;