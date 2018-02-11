
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Image} from 'react-bootstrap';

export default class HowIndexWorks extends Component {

  render() {
    return (
    <Row className="howIndexWorks">
        <Col xs={12} md={12}>
        How The Index Works <br/>
        <Image src='../../public/img/logo-b.png'/><br/>
        <p>NXTNifty,another free support from the house of RTT,for the Nifty based retail traders,is a trading indicator which helps to know the current trend of the financial market.</p>
        </Col>
    </Row>
    );
  }
}
