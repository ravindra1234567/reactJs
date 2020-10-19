import React, { isValidElement } from "react";

export default class FormValidation extends React.Component{
    constructor(){
        super();
        this.state = {
            name : null,
            email : null,
            password : null,
            nameError:"",
            emailError:"",
            passwordError:""
        }
    }
    valide(){
        if( !this.state.email.includes("@") && this.state.password.length<5 ){
            this.setState(
                { emailError: "Email is not valide",passwordError: "Password length Should be greate then 5" }
                )
        }
         if(!this.state.email.includes("@")){
            this.setState({
                emailError: "Email is not valide"
            })
        }
        else if(this.state.password.length<5){
            this.setState({
                passwordError: "Passsword lenght should be greater then 5",
            })
        }
        else{ 
         return true
        }
    }
    submit(){
        this.setState({
            passwordError:"",
            emailError:""
        })
        if(this.valide()){
            alert("All validetion matched");
        }
    }
    render(){
        return(
            <div>
                <h1> *** Form FormValidation *** </h1>
                <input 
                 type="text"
                 name = "name"
                 onChange = {(e)=>{this.setState({name:e.target.value})}}
                /><br/><br/>
                <input 
                 type="email"
                 name="email"
                 required
                 onChange={(e)=>{this.setState({email:e.target.value})}} 
                /><span style={{color:"white"}}>{this.state.emailError}</span><br/><br/>
                <input 
                 type="password"
                 name="pass"
                 required
                 onChange={(e)=>{this.setState({password:e.target.value})}}
                /><span>{this.state.passwordError}</span><br/><br/>
                <input 
                 type="submit"
                 name="submit"
                 onClick={()=>{this.submit()}}
                />
            </div>
        )
    }
}