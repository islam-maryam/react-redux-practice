import React from 'react'
import Chocolate from '../images/cake-1.png'
import Vanilla from '../images/cake-2.png'
import Strawberry from '../images/cake-3.png'
import { useDispatch } from 'react-redux'


function List() {
    const dispatch = useDispatch();
    const cakes = [
        {
            id: 1,
            name: 'Chocolate',
            price: 1000,
            image: Chocolate
        },
        {
            id: 2,
            name: 'Vanilla',
            price: 2000,
            image: Vanilla
        },
        {
            id: 3,
            name: 'Strawberry',
            price: 3000,
            image: Strawberry
        }
    ];
    return (
        <div className='flex justify-around mt-[50px]'>
            {
                cakes.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className='flex justify-center '>
                            <div className=' m-[20px] border rounded-lg border-3 border-black bg-green-100 h-[300px] w-[250px]  flex flex-col justify-center items-center'>
                                <img className='h-[180px]  w-[180px] m-[10px]' src={item.image} alt={item.name} />
                                <h1>{item.name}</h1>
                                <h1>Price:{item.price}</h1>
                                <button
                                    className='bg-green-100 text-green-950 border border-3 border-green-950 rounded-lg px-2 py-1 m-1 hover:bg-green-950 hover:text-white font-bold'
                                    onClick=
                        
                                    // {() => console.log(item)}


                                    {() => dispatch({

                                            type: 'ADD_TO_CART',
                                            payload: item
                                        })
                                    }
                                >
                                    Buy
                                </button>
                            </div>
                        </div>


                    )
                })
            }
        </div>
    )
}

export default List