import React, { Component } from 'react';
import {
  Segment,
  Card,
  Icon
} from 'semantic-ui-react';
import ModelDesign from './modelDesign.jsx';
export default class MenuBar extends Component {
  constructor(){
    super();
    this.state={
      templatemodel:false
    }
this.modelDesign = this.modelDesign.bind(this);
  }
modelDesign(){
  this.setState({templatemodel:true})
}
closeModal() {
    this.setState({
templatemodel:false});
}
  render() {
const src='../client/assets/images/back.jpeg'
    return (

      <div>
        {this.state.templatemodel ? <ModelDesign closeModal={this.closeModal.bind(this)}/> : null}
        {/* <Segment>
          <Card.Group itemsPerRow={3}>
            <Card onClick={this.modelDesign}>
        <Card.Content>
          <label style={{color:'blue'}}>Logo</label>
        </Card.Content>

        <Card.Content extra>
          <Icon name='user' />
          4 Friends
        </Card.Content>
      </Card>
      </Card.Group>
    </Segment> */}
    <Segment.Group horizontal>
  <Segment><Card onClick={this.modelDesign}>
<Card.Content>
<label style={{color:'blue'}}>Logo</label>
</Card.Content>

<Card.Content extra>
<Icon name='user' />
4 Friends
</Card.Content>
</Card></Segment>
  <Segment><Card onClick={this.modelDesign}>
<Card.Content>
<label style={{color:'blue'}}>Logo</label>
</Card.Content>

<Card.Content extra>
<Icon name='user' />
4 Friends
</Card.Content>
</Card></Segment>
  <Segment><Card onClick={this.modelDesign}>
<Card.Content>
<label style={{color:'blue'}}>Logo</label>
</Card.Content>

<Card.Content extra>
<Icon name='user' />
4 Friends
</Card.Content>
</Card></Segment>
</Segment.Group>
      </div>


    )
  }
}
