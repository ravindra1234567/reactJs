import { render } from "@testing-library/react";
import React from "react";

export default class CallApi extends React.Component{
    constructor()
    {
        super();

        this.state = {
            users :null
        }
    }

    componentDidMount(){
        fetch('https://reqres.in/api/users').then((res)=>{
            res.json().then((result) =>{
                // console.log(result.data);
                this.setState({users:result.data})
            } )
        })
    }
    render()
    {
        return(
            <div>
                <h1>Fetch API Data </h1>
                {
                    this.state.users ? 
                    this.state.users.map((item,i)=>
                    <div>
                        <p>{i} == {item.first_name} == {item.email}</p>
                    </div>
                    )
                    :
                     null
                }
            </div>
        );
    }
}