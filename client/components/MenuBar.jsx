import React, { Component } from 'react';
import { Menu, Input, Button, Icon } from 'semantic-ui-react';
const {browserHistory, hashHistory, Route, Router} = require('react-router');
import TopMenu from './TopMenu.jsx';
import '../styles/style.css';

export default class MenuBar extends Component {
  constructor(props){
    super(props);
      this.state = { activeItem: 'home' }
  }

  render() {
    const { activeItem } = this.state
    const MenuBarStyle = {
      backgroundColor:'#003E6A',
      marginTop:'-1%'
    }

    return (
      <div>
      <TopMenu />
      <Menu stackable secondary  style={MenuBarStyle}>
      <Menu.Item style={{fontWeight:'bolder',fontSize:'130%', color:'white'}} active={this.state.activeItem === 'Home'} onClick={()=>{this.setState({ activeItem: "Home" }); hashHistory.push('/')}}><img src='./assets/images/best-buy-logo-min.png' title="Best Buy For Business" /> FOR BUSINESS</Menu.Item>
        <Menu.Menu position='right'>
        <Menu.Item style={{fontWeight:"bolder", color:'white'}} name='PRODUCTS' active={this.state.activeItem === 'Products'} onClick={()=>{this.setState({ activeItem: "Products" })}} />
        <Menu.Item style={{fontWeight:"bolder", color:'white'}} name='SOLUTIONS AND SERVICES' active={this.state.activeItem === 'Solutions & Services'} onClick={()=>{this.setState({ activeItem: "Solutions & Services" })}} />
        <Menu.Item><Input action={{   icon: 'search'}} placeholder='Search by Keyword, SKU # or Item #'/></Menu.Item>
        <Menu.Item ><Button style={{backgroundColor:'#FFF200', color:'#003E6A'}} icon labelPosition='left'><Icon name='cart' />0  Items</Button></Menu.Item>
        </Menu.Menu>
      </Menu>
      </div>

    )
  }
}
