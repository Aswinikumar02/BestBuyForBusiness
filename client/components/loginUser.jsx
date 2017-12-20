import React, { Component } from 'react';
import {Card, Icon, Image, Form, Button} from 'semantic-ui-react';
import DetailedReg from './detailedReg.jsx';
import MenuBar from './MenuBar.jsx';
const {browserHistory, hashHistory, Route, Router} = require('react-router');
export default class Home extends Component {
  constructor(){
    super();

  }
  registration(){
    hashHistory.push('/DetailedReg');
  }
  render(){
    return(
<div>
  <MenuBar/>
<Card style={{marginLeft:'40%',backgroundColor:'black',opacity:'0.5',color:'white',marginTop:'5%'}}>

    <Card.Content>

      <Card.Header style={{marginLeft:'15%',color:'white'}}>
        Sign In to Your Account
      </Card.Header>
      <h3>Returning Customer</h3>
      <h4>Welcome back. To access your account, please
enter your e-mail address or user ID and password.</h4>
<Form inverted>
      <Form.Group widths='equal' style={{fontSize:'17px',fontWeight:'bold'}}>
        <Form.Input label='User name' placeholder='User name' /><br/>
      </Form.Group>
      <Form.Group widths='equal' style={{fontSize:'17px',fontWeight:'bold'}}>
        <Form.Input label='Password' placeholder='Password' />
      </Form.Group>
      <Form.Checkbox label='I agree to the Terms and Conditions' />
      <Button type='submit' onClick={this.registration.bind(this)}>Login</Button>
    </Form>
    </Card.Content>
  </Card></div>
    )
  }
}
