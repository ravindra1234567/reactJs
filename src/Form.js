import React from "react";
export default class Form extends React.Component{
    constructor(){
        super()
        this.state={
            name : null,
            email : null,
            password : null
        }

    }
    submit(){
        console.warn(this.state);
    }
        render(){
            return(
                <div>
                    <h1>Sing Up Form </h1>
                    <input 
                     type="text"
                     name="name"
                     onChange={(e)=>{this.setState({name:e.target.value})}} 
                    /><br/><br/>
                    <input 
                     type="email" 
                     name="email"
                     onChange = {(e)=>{this.setState({email:e.target.value})}}
                    /><br/><br/>
                    <input 
                     type="password"
                     name="pass"
                     onChange = {(e)=>{this.setState({password:e.target.value})}}
                     /><br/><br/>
                    <input 
                     type="submit" 
                     name="submit"
                     onClick={()=>{this.submit()}}
                    />
                </div>
            )
        }
}