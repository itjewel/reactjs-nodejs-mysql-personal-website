
import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import CardComponent from './components/CardComponent';
import { Container, Row, Col, Card,  Button, ListGroup, ListGroupItem, Image } from 'react-bootstrap';

import logo from './logo.svg';
import images from './assets/images/IMG_3800.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>      
      <Col lg="12">
        <Row className="firstSection">
            <Container><br/><br/>
                 <Row>            
                  <Col xs="12" md="7" lg="7"><br/>
                      <h1 className="secFirTit">Hello,</h1>
                      <h2 className="secFir2ndTit">a bit about me:</h2>
                      <p className="secFirDesc">
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story and let your users get to know you.
                      </p>
                  </Col>
                    <Col xs="12" md="5" lg="5">
                    <Image width="90%"  src={images} alt={"Jewel Picture"} roundedCircle />
                  </Col>                  
                </Row>
                <br/><br/>
            </Container>            
        </Row>
        <Row className="secondSection">
            <div lg="12">
              <h1 className="text-center">I am Jewel</h1>
            </div>
        </Row>
        <Row className="thirdSection">
            <div lg="12">
              <h1 className="text-center">I am Jewel</h1>
            </div>
        </Row>
      </Col>
        
      </Layout>
    );
  }
}



export default App;
