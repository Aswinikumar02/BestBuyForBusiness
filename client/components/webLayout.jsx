import React, {Component} from 'react';
import {
  Segment,
  Card,
  Icon,
  Menu,
  Input,
  Button,
  Image
} from 'semantic-ui-react';
const {browserHistory, hashHistory, Route, Router} = require('react-router');
import ModelDesign from './modelDesign.jsx';
import CompleteReg from './completeReg.jsx';
import ModelTemplate from './modelTemplate.jsx';
export default class MenuBar extends Component {
  constructor() {
    super();
    this.state = {
      templatemodel: false,
      updateCardTemplate: false,
      cardtemp: []
      // count:0
    }
    this.modelDesign = this.modelDesign.bind(this);
    this.updateCardTemplate = this.updateCardTemplate.bind(this);
    // this.funtemplate = this.funtemplate.bind(this);
  }
  modelDesign() {
    this.setState({templatemodel: true})
  }
  closeModal() {
    this.setState({templatemodel: false, activeElement: 'call'});
  }
  updateCardTemplate(cardtemp) {
    var cTemp = this.state.cardtemp;
    cTemp.push(cardtemp);
    this.setState({updateCardTemplate:true, cardtemp:cTemp});
    console.log('update - - > ',this.state.cardtemp);
  }
  completeReg() {
    hashHistory.push('/CompleteReg');
  }
  // funtemplate(){
  //   console.log('jfgjkhkj ukghun');
  //   while(this.state.count > 0){
  //     console.log('inside while');
  //     return( <ModelTemplate /> );
  //     this.state.count--;
  //   }
  // }
  render() {
    const {activeElement} = this.state;
console.log('inside wedlayout',this.state.cardtemp);
    return (<div>
      {
        this.state.templatemodel
          ? <ModelDesign updateCardTemplate={this.updateCardTemplate.bind(this)} closeModal={this.closeModal.bind(this)}/>
          : null
      }
      <Segment>
        <Menu stackable="stackable" text="text" style={{
            marginTop: '0.5%'
          }}>
          <Menu.Menu position='right'>
            <Menu.Item style={{
                color: '#003E6A',
                fontWeight: 'bolder'
              }} name='Call 1-877-393-1038' active="active" onClick={() => {
                this.setState({activeElement: 'call'})
              }}/>
            <Menu.Item style={{
                color: '#003E6A',
                fontWeight: 'bolder'
              }} name='Education Clients' active="active" onClick={() => {
                this.setState({activeElement: 'Education Clients'})
              }}/>
            <Menu.Item style={{
                color: '#003E6A',
                fontWeight: 'bolder'
              }} name='My Account' active="active" onClick={() => {
                this.setState({activeElement: 'My Account'})
              }}/>
            <Menu.Item style={{
                color: '#003E6A',
                fontWeight: 'bolder'
              }} name='Sign In or Register' active="active" onClick={() => {
                this.setState({activeElement: 'Sign In or Register'})
              }}/>
          </Menu.Menu>
        </Menu>
        <Menu stackable="stackable" secondary="secondary" style={{
            backgroundColor: '#003E6A',
            marginTop: '-1%'
          }}>
          <Menu.Item style={{
              fontWeight: 'bolder',
              color: 'white'
            }}>LOGO</Menu.Item>
          <Menu.Item style={{
              fontWeight: "bolder",
              color: 'white'
            }} active={this.state.activeItem === 'Home'} onClick={() => {
              this.setState({activeItem: "Home"})
            }}/>
          <Menu.Menu position='right'>
            <Menu.Item style={{
                fontWeight: "bolder",
                color: 'white'
              }} name='PRODUCTS' active={this.state.activeItem === 'Products'} onClick={() => {
                this.setState({activeItem: "Products"})
              }}/>
            <Menu.Item style={{
                fontWeight: "bolder",
                color: 'white'
              }} name='SOLUTIONS AND SERVICES' active={this.state.activeItem === 'Solutions & Services'} onClick={() => {
                this.setState({activeItem: "Solutions & Services"})
              }}/>
            <Menu.Item><Input action={{
        icon: 'search'
      }} placeholder='Search'/></Menu.Item>
          </Menu.Menu>
        </Menu>
        <Image src='../assets/images/Tempbg1.png' style={{
            width: '100%'
          }}/>
          {this.state.updateCardTemplate ? <ModelTemplate cardtemp={this.state.cardtemp} /> : null}
        {/* <ModelTemplate /> */}
        <Card onClick={this.modelDesign} style={{
            marginLeft: '38%',
            height: '20vh',
            width: '24%'
          }}>
          <Card.Content extra="extra">
            <Icon name='add' size='huge' style={{
                marginLeft: '30%',
                marginTop: '20%'
              }}/>
          </Card.Content>
        </Card>
        <Segment inverted="inverted" style={{
            textAlign: 'center'
          }}>Footer</Segment>
        <Button style={{
            color: 'blue',
            marginLeft: '45%',
            marginTop: '3%'
          }} onClick={this.completeReg}>Submit</Button>
      </Segment>

    </div>)
  }
}
