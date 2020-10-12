import React from "react";
export default class Home extends React.Component{
    render(){
        return(

            <div>
                <form action="abc.js" method="post" border="2px">
                    <span>Name : </span><input type="text" name = "name" /><br/>
                    <span>Email : </span><input type="email" name="email" /><br/>
                    <span>Adrress : </span><textarea name ="address"></textarea><br/>
                    <input type="submit" name ="submit" />
                </form>

            </div>
        )
    }
}