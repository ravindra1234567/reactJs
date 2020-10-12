import React from "react";
export default function FunctionEvent(){
    function fun(){
        alert("Hello !");
    }
    const fun2=()=>{
        alert("Ravindra");
    }
    return(
    <div> 
        <h1>Function Events</h1>
        <button onClick={fun}>Click</button>
        <button onClick={fun2}>Click2</button>
    </div>
    )
}