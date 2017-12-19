import React, { Component } from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';
export default class MenuBar extends Component {
  constructor(){
    super();

  }
  render(){
    return(
<div>
<Card style={{margin:'auto',marginTop:'17%'}}>

    <Card.Content>
      <Image src='../assets/images/tick.png' size='tiny' style={{float:'left'}}/>
      <Card.Header style={{marginLeft:'15%',marginTop:'7%'}}>
        Account Registered Successfully
      </Card.Header>
    </Card.Content>
  </Card></div>
    )
  }
}
