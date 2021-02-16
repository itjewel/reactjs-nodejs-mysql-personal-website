
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './client/components/Layout';
import CardComponent from './client/components/CardComponent';
import { Container, Row, Col, Card,  Button, ListGroup, ListGroupItem } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';
const objectData = [{
  "name": "Md.Jewel samiha  farazi",
  "age": 30,
  "location": "Soudi Alabia, OR"
}, {
  "name": "Md.Al nothing to do this amin Farazi",
  "age": 28,
  "location": "Pakistan, tjos is a test OR"
}, {
  "name": "Md. Zahid Ul Islam",
  "age": 18,
  "location": "Bangladesh Dhaka, OR"
}, {
  "name": "Kyle Shevlin",
  "age": 34,
  "location": "Portland, OR"
}]
class App extends Component {
  render() {
    return (
      <Layout>      
      <Col lg="12">
        <Row> {
          objectData.map((obj, index) => {
          // let { valData } = obj
            //console.log(obj)
              return (
              <CardComponent key={obj.age} cardtitle={obj.name} cardage={obj.age} cardlocation={obj.location} /> 
            )})
          }
        </Row>
      </Col>
        
      </Layout>
    );
  }
}



export default App;
