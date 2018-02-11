import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Task from './task/Task.jsx';
import AppNavBar from './common/AppNavBar.jsx';
import Footer from './common/Footer.jsx';
import ContentHeader from './common/ContentHeader.jsx';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid>
      <Row>
        <Col xs={12} md={12}><AppNavBar/></Col>
      </Row>
        <ContentHeader/>
        <Row>
        <Col xs={12} md={12}>
        <Footer/></Col>
        </Row>
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("approot"));