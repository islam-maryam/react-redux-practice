import React from 'react'
import { useSelector } from 'react-redux';

function Menu() {
const cart = useSelector(state => state.cart);
console.log(cart.length);
    return (
        <div className='flex justify-around'>
            <h1 className='text-4xl font-bold'>
                Ecommerce
            </h1>
            <hr />
            <div>
                <button className='bg-green-100 text-green-950 border border-3 border-green-950 rounded-lg px-2 py-1 m-1 hover:bg-green-950 hover:text-white font-bold'>
                    Cart
                    <span>
                        ({cart.length})
                    </span>
                </button>

            </div>
        </div>
    )
}

export default Menu