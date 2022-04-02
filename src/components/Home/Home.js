import React, { useState } from 'react';
import useTshirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const [tshirts, setTshirts] = useTshirts();
    const [cart, setCart] = useState([]);
    const handleAddtoCart = selectedItem => {
        const isExist = cart.find(tshirt => tshirt._id === selectedItem._id)
        if (!isExist) {
            const newCart = [...cart, selectedItem]
            setCart(newCart);
        } else {
            alert("Already added!!!")
        }

    }


    const handleToRemove = selectedItem => {
        const rest = cart.filter(tshirt => tshirt._id !== selectedItem._id);
        setCart(rest)
    }

    return (
        <div>
            <div className='home-container'>
                <div className="tshirts-container">
                    {
                        tshirts.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt} handleAddtoCart={handleAddtoCart}></Tshirt>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} handleToRemove={handleToRemove}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;