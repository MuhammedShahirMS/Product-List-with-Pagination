import { useNavigate } from 'react-router-dom';
import classes from './Product.module.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Product = props => {
 

    const navigate = useNavigate();

    const showProductHandler = () => {
        navigate(`/Product/${props.id}` , {state: props}); 
    }

    const modifiedPrice = `$${props.price.toFixed(2)}`;

    
    return (
        

        <Card className='mt-3' style={{ width: '100%', height:'32rem' }}>
      <Card.Img className={classes.image} variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text> 
            Price: {modifiedPrice}
        </Card.Text>
        <Button onClick={showProductHandler} variant="primary">Buy</Button>
      </Card.Body>
    </Card>
    
    )
}

export default Product;