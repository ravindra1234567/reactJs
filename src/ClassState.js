import React from "react";
export default class ClassState extends React.Component{
    constructor(){
        super();
        this.state={
            name : "Ravidnra",
            email : "ravindrakushwahanwg@gamil.com",
            address : "Dist. Chhatarpur",
            count:0
        }
    }
    updateState() {
        this.setState({
            name : "Kumar",
            count : this.state.count+1
        })
    }
    render(){
        return(
            <div>
                <h2>Name : {this.state.name}</h2>
                <h2>Email : {this.state.email}</h2>
                <h2>Address : {this.state.address}</h2>
                <h2>Count : {this.state.count}</h2>
                <button onClick={()=>{this.updateState()}}>Update Name</button>
            </div>
        )
    }
}