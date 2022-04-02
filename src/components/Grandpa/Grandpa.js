import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

export const Ringcontext = createContext('ring');

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const handleToHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse)
    }
    return (
        <Ringcontext.Provider value='Ring Diamond'>
            <div className='grandpa'>
                <h1>Grandpa <button onClick={handleToHouse}>Buy a House</button></h1>
                <p>House: {house}</p>
                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>


            </div>
        </Ringcontext.Provider>


    );
};

export default Grandpa;