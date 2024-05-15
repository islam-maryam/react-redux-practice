// import React from 'react'
// import {useDispatch } from "react-redux";
// import {useState} from 'react';

// function Form() {

// const [task,setTask] = useState('');
// // console.log(setTask(task));
// const dispatch = useDispatch();



//     return (
//         <div className=" p-8">
//             <input type="text"
//                 className="pl-2 border-2 m-1 border-black"
//                 placeholder="Enter Your Task Name"
//                 onChange={e => setTask(e.target.value)} />
//             <br />

//             <button
//                 className="bg-blue-500 rounded-lg px-2 py-1 m-1 hover:bg-blue-700 text-white font-bold"
//                 onClick={() => dispatch
//                     ({
//                         type: "CREATE-TASK",
//                         payload: task
//                     })}>
//                 Submit
//             </button>


//         </div>
//     )
// }

// export default Form



import React, { useState } from 'react'; // Import useState from React
import { useDispatch } from "react-redux";

function Form() {
    const [task, setTask] = useState(''); // Initialize state for task
    const dispatch = useDispatch();

    return (
        <div className="p-8">
            <input
                type="text"
                className="pl-2 border-2 m-1 border-black"
                placeholder="Enter Your Task Name"
                value={task} // Set the value of the input field to the state
                onChange={e => setTask(e.target.value)} />
            <br />

            <button
                className="bg-blue-500 rounded-lg px-2 py-1 m-1 hover:bg-blue-700 text-white font-bold"
                onClick={() => dispatch({
                    type: "CREATE-TASK",
                    payload: task
                })}>
                Submit
            </button>
        </div>
    );
}

export default Form;
