import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import OrdersReview from './components/OrdersReview/OrdersReview';
import Cart from './components/Cart/Cart'
import Grandpa from './components/Grandpa/Grandpa';

function App() {
  return (
    <div className='App' >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orderreview' element={<OrdersReview></OrdersReview>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
      </Routes>
    </div>
  );
}

export default App;
