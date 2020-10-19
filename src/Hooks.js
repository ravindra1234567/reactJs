// const { useState } = require("react")
// const { useEffect } = require("react")

import React,{useEffect,useState} from "react";

 const Hooks =()=>{
    const[count, setCount] = useState(1);
    useEffect(()=>{
        console.warn(count);
    },[count == 5])
    return(

        <div>
            <h1> useEffect hook in Reak ..{count}</h1>
            <button onClick = { ()=> setCount(count+1) }> Update State </button>
        </div>
    )
}
export default Hooks;

