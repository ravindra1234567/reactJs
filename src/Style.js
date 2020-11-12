import React from "react";
import './custom.css';
export default function(prop){

    const h2={
        color : 'green',
        fontSize : '30px'

    }

    const h1 = {
        color : 'red',
        fontSize : '40px'
    }
        return(

            <div>
                <h2 className='header'>Global CSS</h2>
                <h2 style={h2}>Inline CSS</h2>
                <h2 style={prop.data=="apply" ? h2 : h1 }>Conditional CSS </h2>
            </div>

        )
}