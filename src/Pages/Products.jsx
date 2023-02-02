import { useSelector } from "react-redux";
import { useState } from "react";
import styles from './Products.module.css';
import Product from "../components/Product";
import Pagination from "../components/Pagination";
import ProductsFilter from "../components/ProductsFilter";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Products = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const products = useSelector(state => state.products);
    const filterData = useSelector(state => state.filter);
    const lastIndex   = (currentPage * 6);     // let products per page be 6;
    const firstIndex  = lastIndex - 6;
    const fullList = products.slice(firstIndex, lastIndex);
   

    const setPageHandler = page => {
        setCurrentPage(page);
    }


    const isFiltered = filterData.isFiltered;

    let productsCount = products.length;

    if(isFiltered) {
        productsCount = filterData.filteredItems.length;
    }

    return(
        <Container className="mx-auto mt-5 bg-success">
            <Row className={styles.text}>
            <h1>Products</h1>
            <ProductsFilter onDefault= 'none' />
            </Row>
            
        <Row>
        { !isFiltered && fullList.map(item => <Col xs={12} md={4} key={item.id}><Product {...item}/></Col>)}
        { isFiltered &&  filterData.filteredItems.map(item => <Col key={item.id}><Product {...item}/></Col>)}
        </Row>
        
        <Pagination productCount = {productsCount} setPage = {setPageHandler}/>
      </Container>
            
        
    )

}

export default Products;