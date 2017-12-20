import React, {Component} from 'react';
import {Card, Icon, Image, Button} from 'semantic-ui-react';
import Registration from './Registration.jsx';
const {browserHistory, hashHistory, Route, Router} = require('react-router');
import MenuBar from './MenuBar.jsx';
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }

  }
  registration(e, value) {
    console.log('inside card click', value.value);
    hashHistory.push('/Registration');
  }
  render() {
    return (<div>
      <MenuBar/>
      <h1 style={{
          color: 'white',
          fontSize: '40px',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>Our Services</h1>
      <Card.Group itemsPerRow={2} style={{
          width: '70%',
          height: '100px',
          marginLeft: '15%'
        }}>
        <Card style={{
            backgroundColor: 'black',
            opacity: '0.7'
          }}>

          <Card.Content>
            <Card.Header style={{
                color: 'white'
              }}>
              EPRO
            </Card.Header>
            <Card.Description style={{
                color: 'white',fontSize: '16px'
              }}>Connect your organization directly to the Best Buy For Business™ assortment of both consumer-
              and commercial-grade products. More than just a way to purchase online, Custom Procurement
              is an integrated system to streamline your business, lower transaction costs and speed the
              ordering process. </Card.Description>
            <Button value='EPRO' onClick={this.registration.bind(this)} style={{
                marginLeft: '35%',
                marginTop: '3%',
                backgroundColor: '#003E6A',
                color: 'white'
              }}>Create Account</Button>
          </Card.Content>
        </Card>
        <Card style={{
            backgroundColor: 'black',
            opacity: '0.7'
          }}>

          <Card.Content>
            <Card.Header style={{color:'white'}}>
              PSF
            </Card.Header>
            <Card.Description style={{
                color: 'white',fontSize: '16px'
              }}>
Capability that enables the partners to self register their buyers and customize their
BBFB home Page with their own catalog and branding

</Card.Description>
            <Button value='PSF' onClick={this.registration.bind(this)} style={{
                marginLeft: '35%',
                marginTop: '17%',marginBottom:'-10%',
                backgroundColor: '#003E6A',
                color: 'white'
              }}>Create Account</Button>
          </Card.Content>
        </Card>
        <Card style={{
            backgroundColor: 'black',
            opacity: '0.7'
          }}>

          <Card.Content>
            <Card.Header style={{
                color: 'white',
                fontWeight: 'bold'
              }}>
              API
            </Card.Header>
            <Card.Description style={{
                color: 'white',
                fontSize: '16px'
              }}>Our APIs use industry-standard API architecture, allowing for safe and secure solutions.
              Through our combined systems integration, your business will experience customized user
              experience on your organization's eProcurement, eCommerce or ERP platform.</Card.Description>
            <Button value='API' onClick={this.registration.bind(this)} style={{
                marginLeft: '35%',
                marginTop: '10%',
                backgroundColor: '#003E6A',
                color: 'white'
              }}>Create Account</Button>
          </Card.Content>
        </Card>
        <Card style={{
            backgroundColor: 'black',
            opacity: '0.7'
          }}>

          <Card.Content>
            <Card.Header style={{color:'white'}}>
              CATALOG
            </Card.Header>
            <Card.Description style={{
                color: 'white',fontSize: '16px'
              }}>Catalog, Product Search, Product Details, Store Pick Up, Custom Delivery Options, Shipping Address Validation, Order Check, Order Create, Order Status, Post Notification(Order, Shipped, Cancel, Back Ordered)</Card.Description>
            <Button value='CATALOG' onClick={this.registration.bind(this)} style={{
                marginLeft: '35%',
                marginTop: '15%',
                backgroundColor: '#003E6A',
                color: 'white'
              }}>Create Account</Button>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>)
  }
}
