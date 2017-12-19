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
import ModelTemplate from './modelTemplate.jsx';
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
      active: true,
      imgurl: '',
      type:'',
      contenturl:'',
      buttontext:'',
      description:'',
      desOption:'',
      cardtemp:[],
      tempModel:false
    }
    this.updateTemplate = this.updateTemplate.bind(this);
  }
  handleClose() {
    this.setState({active: false});
    this.props.closeModal();
  }
  updateTemplate(){
    var cardtemp1 = [];
    this.setState({tempModel:true})
    this.props.closeModal();
    console.log('inside submit',this.state.imgurl);
    cardtemp1.push({imageurl:this.state.imgurl,type:this.state.type,contenturl:this.state.contenturl,buttontext:this.state.buttontext,description:this.state.description,desOption:this.state.desOption})
    // console.log(' 90909bfbf - > ',cardtemp1);
    // this.setState({cardtemp:cardtemp1});
    // console.log('card value',this.state.cardtemp);
    this.props.updateCardTemplate(cardtemp1);
  }
  imageURl(e,value){
    this.setState({imgurl:value.value},function(){
      console.log('setstate image',this.state.imgurl);
    })
  }
  type(e,value){
    this.setState({type:value.value},function(){
      console.log('set type',this.state.type);
    })
  }
  contentUrl(e,value){
    this.setState({contenturl:value.value},function(){
      console.log('set type',this.state.contenturl);
    })
  }
  buttontext(e,value){
    this.setState({buttontext:value.value},function(){
      console.log('set type',this.state.buttontext);
    })
  }
  description(e,value){
    this.setState({description:value.value},function(){
      console.log('set type',this.state.description);
    })
  }
  desOption(e,value){
    this.setState({desOption:value.value},function(){
      console.log('set type',this.state.desOption);
    })
  }
  render() {
    const {active} = this.state;
    return (
      <Dimmer active={active} page="page">
        {this.state.tempModel ? <ModelTemplate cardtemp1={this.state.cardtemp}/> : null}
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
        <Dropdown placeholder='Type' search="search" selection="selection" options={typeOptions} onChange={this.type.bind(this)}/>
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
  <Input placeholder='Image URL' onChange={this.imageURl.bind(this)}/>
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
<Input placeholder='Content URL'onChange={this.contentUrl.bind(this)}/>
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
<Input placeholder='Button Text' onChange={this.buttontext.bind(this)}/>
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
  <Form.TextArea placeholder='Tell us more about you...' style={{marginLeft:'-10%'}} onChange={this.description.bind(this)}></Form.TextArea>
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
  <Dropdown placeholder='Description Option' search="search" selection="selection" options={descriptionOptions} onChange={this.desOption.bind(this)}/>
</Grid.Column>
</Grid.Row>
              </Grid>
              <Button style={{
                  marginTop: '3%',
                  marginBottom: '2%',
                  backgroundColor: '#003E6A',
                  color: 'white',float:'left',marginLeft:'5%'
                }} content='Back'></Button>
            <Button onClick={this.updateTemplate} style={{
                marginTop: '3%',
                marginBottom: '2%',
                backgroundColor: '#003E6A',
                color: 'white'
              }} content='Submit'></Button>
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
