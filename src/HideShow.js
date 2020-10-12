import React from "react";
export default class HideShow extends React.Component{
    constructor(){
        super();
        this.state = {
            show : true
        }
    }
    render(){
        return(
            <div>
            {
                this.state.show ?
                    <h1> Ravindra</h1>
                :null
            }
            <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle me</button>
            </div>
        )
    }
}