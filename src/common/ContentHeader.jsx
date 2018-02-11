
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Row,Col} from 'react-bootstrap';
import HowIndexWorks from './HowIndexWorks.jsx';
import NxtNiftyIndex from './NxtNiftyIndex.jsx'

export default class ContentHeader extends Component {

  render() {
    return (
    <Row className="contentHeader">
        <Col xs={12} md={4}>
        <NxtNiftyIndex/>
        </Col>
        <Col xs={12} md={4}>
        Market sentiment    <br/>
        Updated at 9.25am and 3.20pm daily
        </Col>
        <Col xs={12} md={4}>
        <HowIndexWorks/>
        </Col>
    </Row>
    );
  }
}
