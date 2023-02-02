import { useLocation } from "react-router-dom";
import styles from './ProductDetail.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'

const ProductDetail = props => {
    const location = useLocation();

    const data = location.state;
    const modifiedPrice = `$${data.price.toFixed(2)}`;


    const removed = <div className={styles.productPage}>
    <img src={data.image} height= '500' style={{objectFit: 'cover'}}/>
    <div className={styles.productDetails}>
    <h1 className={styles.brand}>{data.title}</h1>
    
    <h2>{modifiedPrice}</h2>
    </div>
    </div>

    return(

        <Container fluid>
        <Row className="px-4 bg-white">
          <Col sm={4}>
            <Image className={styles.image} src= {data.image} fluid rounded/>
          </Col>
          <Col className="bg-success" md={{ span: 6, offset:2 }}>
          <div className={styles.details}>
            <div className={styles.title}>{data.title}</div>
          <p className={styles.desc}> {data.description}</p>
          <p className={styles.category}> Category: {data.category}</p>
          <div className={styles.rating}>
          <p> Rating: {data.rating.rate}</p>
           Reviews: {data.rating.count}</div>
           <Button className="mt-5" variant="warning">Add to Cart</Button>
          </div>
          
            </Col>
        </Row>
        </Container>
    
        )

}

export default ProductDetail;