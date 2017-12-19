import React, {Component} from 'react';
import {
  Form,
  Input,
  TextArea,
  Button,
  Dropdown,
  Grid,
  Card,
  Header,
  Dimmer,
  Icon
} from 'semantic-ui-react';
// const {browserHistory, hashHistory, Route, Router} = require('react-router');
// import DetailedReg from './detailedReg.jsx';
const typeOptions = [
  {
    key: "option 1",
    value: "option 1",
    text: "option 1"
  }, {
    key: "option 2",
    value: "option 2",
    text: "option 2"
  }
];
const descriptionOptions = [
  {
    key: "Above Image",
    value: "Above Image",
    text: "Above Image"
  }, {
    key: "Below Image",
    value: "Below Image",
    text: "Below Image"
  }
];
export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      active: true
    }
// this.goBack = this.goBack.bind(this);
  }
  handleClose() {
    this.setState({active: false});
    this.props.closeModal();
  }
  // goBack(){
  //   hashHistory.push('/DetailedReg');
  // }
  render() {
    const {active} = this.state;
    return (<Dimmer active={active} page="page">
      <div>
        <Card style={{
            width: '50%',
            backgroundColor: '#f2f2f2',
            marginLeft: '25%'
          }}>
          <Icon name='cancel' style={{float:'left'}} onClick={this.handleClose.bind(this)} style={{marginTop:'-2%',color:'orange',marginLeft:'100%',cursor:'pointer'}}/>
          <Form>

            <Header as='h3' style={{
                textAlign: "center",
                color: '#003E6A ',
                fontSize: '120%',marginBottom:'5%', marginTop:'3%'
              }}>Display Field 1</Header>
              <Grid columns={2}>
                <Grid.Row>
      <Grid.Column>
        <label style={{
            color: '#003E6A ',
            fontSize: '120%',
            fontWeight: "bolder"
          }}>Type</label>
      </Grid.Column>
      <Grid.Column style={{marginLeft:'-10%'}}>
        <Dropdown placeholder='Type' search="search" selection="selection" options={typeOptions}/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
<Grid.Column>
  <label style={{
      color: '#003E6A',
      fontSize: '120%',
      fontWeight: "bolder"
    }}>Image URL</label>
</Grid.Column>
<Grid.Column style={{marginLeft:'-10%'}}>
  <Input placeholder='Image URL'/>
  <p style={{
      color: 'black',
      fontWeight: "bolder",textAlign: "justify",marginLeft:'10%'
    }}>Upload image must be within bestbuy server within the dimension(150*150) and format (jpg/png/jpeg/gif)</p>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column>
  <label style={{
      color: '#003E6A ',
      fontSize: '120%',
      fontWeight: "bolder"
    }}>Content URL</label>
</Grid.Column>
<Grid.Column style={{marginLeft:'-10%'}}>
<Input placeholder='Content URL'/>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column>
  <label style={{
      color: '#003E6A ',
      fontSize: '120%',
      fontWeight: "bolder"
    }}>Button Text</label>
</Grid.Column>
<Grid.Column style={{marginLeft:'-10%'}}>
<Input placeholder='Button Text'/>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column>
  <label style={{
      color: '#003E6A ',
      fontSize: '120%',
      fontWeight: "bolder"
    }}>Description</label>
</Grid.Column>
<Grid.Column>
  <Form.TextArea placeholder='Tell us more about you...' style={{marginLeft:'-10%'}}></Form.TextArea>
  <p style={{
      textAlign: "justify",
      fontWeight: "bolder",color:'black'
    }}>Enter description within 66 character</p>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column>
  <label style={{
      color: '#003E6A ',
      fontSize: '120%',
      fontWeight: "bolder"
    }}>Description Option</label>
</Grid.Column>
<Grid.Column style={{marginLeft:'-10%'}}>
  <Dropdown placeholder='Description Option' search="search" selection="selection" options={descriptionOptions}/>
</Grid.Column>
</Grid.Row>
              </Grid>
              <Button style={{
                  marginTop: '3%',
                  marginBottom: '2%',
                  backgroundColor: '#003E6A',
                  color: 'white',float:'left',marginLeft:'5%'
                }} content='Back'></Button>
            <Button style={{
                marginTop: '3%',
                marginBottom: '2%',
                backgroundColor: '#003E6A',
                color: 'white'
              }} content='Fetch URL'></Button>
              <Button style={{
                  marginTop: '3%',
                  marginBottom: '2%',
                  backgroundColor: '#003E6A',
                  color: 'white',float:'right',marginRight:'5%'
                }} content='Validation'></Button>
          </Form>
        </Card>
      </div>
    </Dimmer>);
  }
}
