import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate} from 'react-router-dom';
import { productActions } from './Redux/products-slice';
import Products from './Pages/Products';
import ProductDetail from './Pages/ProductDetail';
import NavBar from './components/NavBar';



function App() {

  const dispatch = useDispatch();

  const fetchProductsHandler = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      dispatch(productActions.setProducts(data));
    } catch (error) {
      alert('Failed to fetch Products...Please check your Internet Connection and Reload');
    }
  };

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  return (
    <div>
      <NavBar/>
      <Routes>
      <Route path='/*' element = {<Navigate to = '/'/>} />
      <Route path='/' element={<Products/>}/>
      <Route path='/Product/:productId' element={<ProductDetail/>}/>
      </Routes>
    </div>
  )
}

export default App
