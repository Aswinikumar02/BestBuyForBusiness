import React, {Component} from 'react';
import {Card, Button,Image} from 'semantic-ui-react';
export default class MenuBar extends Component {
  constructor() {
    super();
    this.state = {
      cardtemp: []
    };
  }
  componentDidMount(){
    this.setState({cardtemp:this.props.cardtemp})
  }
  render() {
    console.log('inside card template',this.state.cardtemp);
    var template = this.state.cardtemp.map((item, i) => {
      console.log('map type',item[0].type);
      return(
        <Card key={i}>
    <Image src='../assets/images/lap.png' />
    <Card.Content>
      <Card.Header>
        {item[0].type}
      </Card.Header>
      <Card.Description>
        {item[0].description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button>{item[0].buttontext}</Button>
    </Card.Content>
  </Card>
      );
    });

    return (
      <div>
        <Card.Group itemsPerRow={2}>
        {template}
      </Card.Group>
      </div>)
  }
}
