
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Image,ListGroup,ListGroupItem} from 'react-bootstrap';

export default class NxtNiftyIndex extends Component {

  constructor(){
    super();
    this.state={};
    this.state.lastValue='10500';
    this.state.high=11500;
    this.state.low=9500;
  }

  render() {
    return (
    <Row className="nxtNiftyIndex">
        <Col xs={12} md={12}>
        <ListGroup>
          <ListGroupItem>NXTNIFTY Index beta</ListGroupItem>
          <ListGroupItem>{ new Date().toLocaleDateString()}</ListGroupItem>
          <ListGroupItem>Last {this.state.lastValue}</ListGroupItem>
          <ListGroupItem>High {this.state.high}</ListGroupItem>
          <ListGroupItem>Low {this.state.low}</ListGroupItem>
          <ListGroupItem><p>NXTNifty,another free support from the house of RTT,for the Nifty based retail traders,is a trading indicator which helps to know the current trend of the financial market.</p>
          </ListGroupItem>
        </ListGroup>
        </Col>
    </Row>
    );
  }
}
