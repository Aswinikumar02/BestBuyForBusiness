import React, { Component } from 'react';
import {
  Segment,
  Card,
  Icon,
  Menu,
  Input,
  Button,
  Image
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
templatemodel:false,
activeElement: 'call'
});
}
  render() {
    const { activeElement } = this.state
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
  <Segment>
    <Menu stackable text style={{marginTop:'0.5%'}}>
    <Menu.Menu position='right'>
      <Menu.Item style={{ color:'#003E6A',fontWeight:'bolder'}} name='Call 1-877-393-1038' active onClick={()=>{this.setState({activeElement:'call'})}} />
      <Menu.Item style={{ color:'#003E6A',fontWeight:'bolder'}} name='Education Clients' active onClick={()=>{this.setState({activeElement:'Education Clients'})}} />
      <Menu.Item style={{ color:'#003E6A',fontWeight:'bolder'}}  name='My Account' active onClick={()=>{this.setState({activeElement:'My Account'})}} />
      <Menu.Item style={{ color:'#003E6A',fontWeight:'bolder'}} name='Sign In or Register' active onClick={()=>{this.setState({activeElement:'Sign In or Register'})}} />
</Menu.Menu>
    </Menu>
    <Menu stackable secondary  style={{backgroundColor:'#003E6A',
    marginTop:'-1%'}}>
    <Menu.Item style={{fontWeight:'bolder',color:'white'}}>LOGO</Menu.Item>
      <Menu.Item style={{fontWeight:"bolder", color:'white'}}  active={this.state.activeItem === 'Home'} onClick={()=>{this.setState({ activeItem: "Home" })}} />
      <Menu.Menu position='right'>
      <Menu.Item style={{fontWeight:"bolder", color:'white'}} name='PRODUCTS' active={this.state.activeItem === 'Products'} onClick={()=>{this.setState({ activeItem: "Products" })}} />
      <Menu.Item style={{fontWeight:"bolder", color:'white'}} name='SOLUTIONS AND SERVICES' active={this.state.activeItem === 'Solutions & Services'} onClick={()=>{this.setState({ activeItem: "Solutions & Services" })}} />
      <Menu.Item><Input action={{icon: 'search'}} placeholder='Search'/></Menu.Item>
      </Menu.Menu>
    </Menu>
    <Image src='../assets/images/Tempbg.jpg' style={{width:'100%'}}/>
    <Card onClick={this.modelDesign} style={{marginLeft:'30%'}}>
  <Card.Content>
  <label style={{color:'blue'}}>Logo</label>
  </Card.Content>

  <Card.Content extra>
  <Icon name='user' />
  4 Friends
  </Card.Content>
  </Card>
  <Segment inverted style={{textAlign:'center'}}>Footer</Segment>
  </Segment>

      </div>


    )
  }
}
