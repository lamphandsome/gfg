import React from "react";
import { useState } from "react";
export default function MyApp(){
    const [count,setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Counters that update together</h1>
            <MyButton2 count={count} onClick={handleClick}/>
            <MyButton2 count={count} onClick={handleClick}/>
        </div>
    );
}
function MyButton2({count,onClick}){
    return(
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}