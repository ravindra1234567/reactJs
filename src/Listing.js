import React from "react";

export default class Listing extends React.Component {

    constructor() {
        super();

        this.state = {
            list: [{
                    name: "Ravindra",
                    email: "ravindra@gmail.com",
                    mobile: "7047178936"
                },
                {
                    name: "Sumit",
                    email: "sumit@gmail.com",
                    mobile: "7047178936"
                },
                {
                    name: "Prateek",
                    email: "prateek@gmail.com",
                    mobile: "7047178936"
                }
            ]
        }
    }

    render() {
        return ( 
        <div>
            <h1 > List Elements </h1>
            {

            this.state.list.map((item) =>

                <div> 
                    Name : <span>{item.name}</span>      Email : <span>{item.email}</span> 
                    
                </div>

            ) 
          }
            </div>
        )
    }
}