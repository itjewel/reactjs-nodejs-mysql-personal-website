import React, { Component } from "react";
import { Container, Row, Col, Card,  Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import '../assets/css/CardComponent.css';

class CardComponent extends Component {
  constructor(props) {
    super(props);
    //console.log(dataFromParent);
   
  }
  render() {
    //console.log(this.props.cardtitle)
    return (      
      <div className="cardBorder"> 
         <Col xs="12" lg="12" className="colTopBorder"> 
                  <h3>This is a test</h3>
         </Col>
      </div>
    )
  }
}



export default CardComponent;