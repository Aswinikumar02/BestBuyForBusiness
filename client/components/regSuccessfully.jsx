import React from 'react';
import {Image, Button} from 'semantic-ui-react';
const {browserHistory, hashHistory, Route, Router} = require('react-router');
import LoginUser from './LoginUser.jsx';
import MenuBar from './MenuBar.jsx';
class Registration extends React.Component {
  constructor() {
    super();
this.signInPage = this.signInPage.bind(this);
  }
signInPage(){
  hashHistory.push('/LoginUser');
}


  render() {
    return (
      <div>
      <MenuBar/>
      <div style={{marginLeft:'25%',marginTop:'15%',color:'white'}}>
          <Image src='../assets/images/email.png' circular style={{height:'100px',width:'100px'}}/>
          <h1 style={{marginLeft:'15%',marginTop:'-15%',fontSize:'60px'}}>Just one more step...</h1>
          <p style={{marginLeft:'18%',marginTop:'2%',fontSize:'25px'}}>Your EPRO Registration is pending approval.</p>
          <p style={{marginLeft:'13%',marginTop:'2%',fontSize:'25px'}}>You will be notified through E-mail once it is approved.</p>
          <Button primary style={{marginLeft:'30%',marginTop:'5%'}} onClick={this.signInPage}>Sign-In</Button>

        </div>
      </div>
    );
  }
}

module.exports = Registration;
