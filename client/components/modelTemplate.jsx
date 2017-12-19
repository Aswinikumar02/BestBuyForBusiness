import React, {Component} from 'react';
import {Card, Button} from 'Semantic-ui-react';
export default class MenuBar extends Component {
  constructor() {
    super();

  }
  render() {
    return (<div>
      <Card>
        <Card.Content>
          <Card.Header>
            Steve Sanders
          </Card.Header>
          <Card.Meta>
            Friends of Elliot
          </Card.Meta>
          <Card.Description>
            Steve wants to add you to the group
            <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra="extra">
          <div className='ui two buttons'>
            <Button basic="basic" color='green'>Approve</Button>
            <Button basic="basic" color='red'>Decline</Button>
          </div>
        </Card.Content>
      </Card>
    </div>)
  }
}
