import React from 'react';
import Collapsible from 'react-collapsible';
import { Scrollbars } from "react-custom-scrollbars";
import {
  Form,
  Dropdown,
  Grid,
  Checkbox,
  Accordion,
  Icon,
  Input,
  Table,
  Radio,
  Header,
  Button
} from 'semantic-ui-react';
import MenuBar from './MenuBar.jsx';
import WebLayout from './webLayout.jsx'
export default class Detailed extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
      value1: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
      this.setState({ height1: window.innerHeight - 350 + "px" ,
    height2: window.innerHeight - 375 + "px"});
    }

  handleClick(e, titleProps) {
    const {index} = titleProps
    const {activeIndex} = this.state
    const newIndex = activeIndex === index
      ? -1
      : index

    this.setState({activeIndex: newIndex})
  }


  render() {
    const option2 = [
  {
    key: 'today',
    text: 'today',
    value: 'today',
    content: 'Today',
  },
  {
    key: 'this week',
    text: 'this week',
    value: 'this week',
    content: 'This Week',
  },
  {
    key: 'this month',
    text: 'this month',
    value: 'this month',
    content: 'This Month',
  },
]
    const option1 = [
      {
        key: 'angular',
        text: 'Angular',
        value: 'angular'
      }, {
        key: 'css',
        text: 'CSS',
        value: 'css'
      }, {
        key: 'design',
        text: 'Graphic Design',
        value: 'design'
      }, {
        key: 'ember',
        text: 'Ember',
        value: 'ember'
      }]
    const options = [
      {
        key: 'angular',
        text: 'Angular',
        value: 'angular'
      }, {
        key: 'css',
        text: 'CSS',
        value: 'css'
      }, {
        key: 'design',
        text: 'Graphic Design',
        value: 'design'
      }, {
        key: 'ember',
        text: 'Ember',
        value: 'ember'
      }, {
        key: 'html',
        text: 'HTML',
        value: 'html'
      }, {
        key: 'ia',
        text: 'Information Architecture',
        value: 'ia'
      }, {
        key: 'javascript',
        text: 'Javascript',
        value: 'javascript'
      }, {
        key: 'mech',
        text: 'Mechanical Engineering',
        value: 'mech'
      }, {
        key: 'meteor',
        text: 'Meteor',
        value: 'meteor'
      }, {
        key: 'node',
        text: 'NodeJS',
        value: 'node'
      }, {
        key: 'plumbing',
        text: 'Plumbing',
        value: 'plumbing'
      }, {
        key: 'python',
        text: 'Python',
        value: 'python'
      }, {
        key: 'rails',
        text: 'Rails',
        value: 'rails'
      }, {
        key: 'react',
        text: 'React',
        value: 'react'
      }, {
        key: 'repair',
        text: 'Kitchen Repair',
        value: 'repair'
      }, {
        key: 'ruby',
        text: 'Ruby',
        value: 'ruby'
      }, {
        key: 'ui',
        text: 'UI Design',
        value: 'ui'
      }, {
        key: 'ux',
        text: 'User Experience',
        value: 'ux'
      }
    ]
    const {activeIndex} = this.state
    return (<div>
      <MenuBar/>
      <div>
        <Grid>
          <Grid.Column width={3}/>
          <Grid.Column width={12}>
        <Accordion styled="styled" style={{
            marginTop: '5%',width:'80%'
          }}>
          <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick} style={{color:'blue'}}>
            <Icon name='dropdown' size='tiny'/>
            Product Category
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <Form inline="inline">
              <Form.Field>
                <label style={{fontWeight:'bold',fontSize:'15px'}}>Category</label>
                <Input placeholder=''/>
              </Form.Field>
              <label style={{fontWeight:'bold',fontSize:'15px'}}>Additional Filters
              </label>
              <Grid columns='two' divided>
    <Grid.Row>
      <Grid.Column style={{fontSize:'15px'}}>
        Field
      </Grid.Column>
      <Grid.Column style={{fontSize:'15px'}}>
        Value
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Dropdown fluid="fluid" multiple="multiple" search="search" selection="selection" placeholder='Select' options={options}/>
      </Grid.Column>
      <Grid.Column>
        <Input fluid="fluid"/>
      </Grid.Column>
    </Grid.Row>
  </Grid>
            </Form>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick} style={{color:'blue'}}>
            <Icon name='dropdown'/>
            Home page selection
          </Accordion.Title>

          <Accordion.Content active={activeIndex === 2}>
            <Scrollbars style={{ height: this.state.height2 }}>

            <div style={{marginLeft:'25%',marginBottom:'10%'}}>
            <Radio label='Default Home Page' name='radioGroup' value='Default' checked={this.state.value === 'Default'} onChange={()=>{this.setState({ value: 'Default' })}} />
            <Radio style={{marginLeft:'3%'}} label='Dynamic Home Page' name='radioGroup' value='Dynamic' checked={this.state.value === 'Dynamic'} onChange={()=>{this.setState({ value: 'Dynamic' })}}/>
            <Radio style={{marginLeft:'3%'}} label='Static Home Page' name='radioGroup' value='Static' checked={this.state.value === 'Static'} onChange={()=>{this.setState({ value: 'Static' })}}/>
</div>
            <Form>
    <Form.Field required inline>
      <label style={{marginLeft:'10%'}}>Header Style1</label>
      <Dropdown placeholder='Select' search selection options={option2} style={{marginLeft:'15%'}} />
    </Form.Field>
  </Form><br/><br/>
  <Form>
<Form.Field required inline>
<label style={{marginLeft:'10%'}}>Header Style2</label>
<Dropdown placeholder='Select' search selection options={option1} style={{marginLeft:'15%'}} />
</Form.Field>
</Form><br/><br/>
<Form>
<Form.Field required inline>
<label style={{marginLeft:'10%'}}>MastHead URL</label>
<Input placeholder='' style={{marginLeft:'15%'}}/>
<a style={{marginLeft:'2%'}} href=''>Select MastHead URL</a>
</Form.Field>
</Form><br/><br/>
<Checkbox label='Enable Geek Squad Banner' style={{marginLeft:'10%'}}/>
</Scrollbars>

          </Accordion.Content>

        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick} style={{color:'blue'}}>
          <Icon name='dropdown'/>
          Communication Details
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <Scrollbars style={{ height: this.state.height2 }}>

          <Form>
        <Form.Field required inline>
        <label style={{fontWeight:'bold',fontSize:'18px'}}>Post Process Communication</label>
        </Form.Field>
      </Form><div style={{marginLeft:'35%',marginBottom:'10%'}}>
        <label style={{fontWeight:'bold',fontSize:'15px'}}>Systematic Notification</label><br/>
        <Checkbox label='Email'/><br/>
        <Checkbox label='Email Procurement Buyer'/><br/>
        <Checkbox label='Order Confirmation'/><br/>
        <Checkbox label='BackOrder'/><br/>
        <Checkbox label='Cancel XML Notification'/><br/>
        <Checkbox label='BackOrder XML Notification'/><br/>
        <Checkbox label='Shipment Notification'/><br/>
        <Checkbox label='XML Notification for Orders through Internet'/>
</div>
<Form>
<Form.Field required inline>
<label style={{fontWeight:'bold',fontSize:'18px'}}>Processing Failure</label>
</Form.Field>
</Form><div style={{marginLeft:'35%',marginBottom:'10%'}}>
  <Radio label='Create Quote' name='radioGroup' value='Quote' checked={this.state.value === 'Quote'} onChange={()=>{this.setState({ value: 'Quote' })}} /><br/><br/>
<Radio label='Create Order' name='radioGroup' value='Order' checked={this.state.value === 'Order'} onChange={()=>{this.setState({ value: 'Order' })}}/>
</div>
<Form>
<Form.Field required inline>
<label style={{fontWeight:'bold',fontSize:'18px'}}>Gift Receipt</label>
</Form.Field>
</Form><div style={{marginLeft:'35%',marginBottom:'12%'}}>
  <Radio label='Yes' name='radioGroup' value='Yes' checked={this.state.value === 'Yes'} onChange={()=>{this.setState({ value: 'Yes' })}} />
<Radio style={{marginLeft:'3%'}} label='No' name='radioGroup' value='No' checked={this.state.value === 'No'} onChange={()=>{this.setState({ value: 'No' })}}/>
</div>
</Scrollbars>

        </Accordion.Content>

      <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick} style={{color:'blue'}}>
        <Icon name='dropdown'/>
        Payment Details
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 4}>
        <Scrollbars style={{ height: this.state.height2 }}>

        <p>The payment method defined here is applicable only if the payment source is chosen as "Partner" in buyers profile and if chosen,the payment on this page will override the payment defined at buyer profile.</p>
        <Form>
        <Form.Field required inline>
        <label style={{fontWeight:'bold',fontSize:'18px',marginTop:'2%'}}>Payment Type</label>
        </Form.Field>
      </Form><div style={{marginLeft:'17%',marginBottom:'8%'}}>
          <Radio label='Credit Card' name='radioGroup' value='Credit' checked={this.state.value === 'Credit'} onChange={()=>{this.setState({ value: 'Credit' })}} />
        <Radio style={{marginLeft:'2%'}} label='Business Advantage Account' name='radioGroup' value='Business' checked={this.state.value === 'Business'} onChange={()=>{this.setState({ value: 'Business' })}}/>
        <Radio style={{marginLeft:'2%'}} label='In-House Account' name='radioGroup' value='House' checked={this.state.value === 'House'} onChange={()=>{this.setState({ value: 'House' })}}/>
        <Radio style={{marginLeft:'2%'}} label='Receivables/Leasing' name='radioGroup' value='Leasing' checked={this.state.value === 'Leasing'} onChange={()=>{this.setState({ value: 'Leasing' })}}/>
        </div>
        {this.state.value == 'Credit' ?
        <div style={{marginLeft:'10%',marginTop:'2%'}}>
          <Form>
        <Form.Field required inline>
        <label style={{fontWeight:'bold',fontSize:'14px',fontWeight:'bold'}}>Card Holder Name</label>
        <Input style={{marginLeft:'5%'}}/>
        </Form.Field>
      </Form><br/><br/>
      <Form>
    <Form.Field required inline>
    <label style={{fontWeight:'bold',fontSize:'14px',fontWeight:'bold'}}>Card Number</label>
    <Input style={{marginLeft:'10%'}}/>
    </Form.Field>
  </Form><br/><br/>
  <Form>
  <Form.Field required inline>
  <label style={{fontWeight:'bold',fontSize:'14px',fontWeight:'bold'}}>Card Type</label>
  <Input style={{marginLeft:'12%'}}/>
  </Form.Field>
  </Form><br/><br/>
  <Form>
    <Form.Group inline>
      <Form.Field required>
        <label style={{fontWeight:'bold',fontSize:'14px',fontWeight:'bold'}}>Exp Date</label>
        <Input placeholder='mm' />
      </Form.Field>
      <Form.Field>
        <Input placeholder='yyyy' />
      </Form.Field>
    </Form.Group>
  </Form>
<Button style={{color:'blue',marginLeft:'40%',marginTop:'3%'}}>Submit</Button></div>
      :null}
      {this.state.value == 'Business' || this.state.value == 'House' || this.state.value == 'Leasing' ?
      <div style={{marginLeft:'10%',marginTop:'2%'}}><Form>
    <Form.Field required inline>
    <label style={{fontWeight:'bold',fontSize:'14px',fontWeight:'bold'}}>Card Holder Name</label>
    <Input style={{marginLeft:'5%'}}/>
    </Form.Field>
  </Form><br/><br/>
  <Form>
<Form.Field required inline>
<label style={{fontWeight:'bold',fontSize:'14px',fontWeight:'bold'}}>Card Number</label>
<Input style={{marginLeft:'10%'}}/>
</Form.Field>
</Form>
<Button style={{color:'blue',marginLeft:'40%',marginTop:'3%'}}>Submit</Button></div>
    :null}
  </Scrollbars>

      </Accordion.Content>
      <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick} style={{color:'blue'}}>
        <Icon name='dropdown'/>
        Template Selection
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 5}>
        <Scrollbars style={{ height: this.state.height1 }}>

        <WebLayout/>
      </Scrollbars>

      </Accordion.Content>
      </Accordion>
      </Grid.Column>
      <Grid.Column width={2}/>
        </Grid>
      </div>
    </div>);
  }
}
