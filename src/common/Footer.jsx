
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Navbar} from 'react-bootstrap';

export default class Footer extends Component {

  render() {
    return (<Navbar className="footer">
        <div className="footer-content">© 2018 All rights reserved by NXTNIFTY </div>
        <div>Powered By Matizmo</div>
    </Navbar>);
  }
}
