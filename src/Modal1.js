import React from "react";
import {Button , Modal, ModalBody, ModalFooter} from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

export default class Modal1 extends React.Component{

    constructor()
    {
        super();

        this.state = {
            show:false
        }
    }

    handleModal(){
        this.setState({show: !this.state.show});
    }

    render(){
        return(

            <div>

            <Button onClick={()=>this.handleModal()}>Click Modal</Button>
            <Modal show={this.state.show} onHide={()=>this.handleModal()}>
                <ModalHeader closeButton > Modal Header</ModalHeader>
                <ModalBody>Hellow World !</ModalBody>
                <ModalFooter>
                    <Button onClick={()=>this.handleModal()}>Close</Button>
                    <Button onClick={()=>this.handleModal()}>Save</Button>
                </ModalFooter>
            </Modal>
            </div>
        )
    }
}