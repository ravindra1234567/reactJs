import React from "react";
export default class Events extends React.Component{
    eventFun(){
        alert("hi")
    }
    render(){
        return(
            <div>
            <h2>Events</h2>
            <button onClick={()=>this.eventFun()}>Click Event</button>
        </div>
        )
    }
}