import React from "react";
import {Button ,Row, Col, Container} from "react-bootstrap";

export default class Bootstrap extends React.Component{
    render(){
        return(
            <div>
                <Button onClick = {()=>alert("hi")}>Click Here </Button>

                <Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
            </div>
        )
    }
}