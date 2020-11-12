import React from "react";

export default class Form extends React.Component {

    render() {
        return ( 
        <div>

            Name: < input type = "text"
            name = "name" />
            Password: < input type = "password"
            name = "password" />
            <input type = "submit"
            name = "submit" />
        </div>
        )
    }
}