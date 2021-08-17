import React from "react";
import {useDispatch , useSelector} from 'react-redux';
import { increment , decrement, reset } from "../redux/counter-redux/counter_event.js";



export const Counter = ()=>{

    const countval = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>
                Counter App
            </h1>
            

           
                <button onClick={()=>dispatch(increment(3))}>Increment</button>
                <span >{countval}</span>
                <button onClick={()=>dispatch(decrement(2))}>Decrement</button>
                <button onClick={()=>dispatch(reset())}>Reset</button>



        </div>
    );
}