import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}



export default Layout;