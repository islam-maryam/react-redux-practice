import React from 'react'
import {useSelector} from "react-redux";


function List() {
const result = useSelector(state => state.tasks);
console.log(result);
    return (
        <div className='m-8 p-2 bg-green-300'>
            <h1>List of tasks</h1>
            <ul>
                {result?.map((task, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>

        </div>
    )
}

export default List




