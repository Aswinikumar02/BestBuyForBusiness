import React, {Component} from 'react';
import { Segment, Dropdown, Menu, Input, Button, Grid, Icon, Step, Card, Form, Radio } from 'semantic-ui-react';
const {browserHistory, hashHistory, Route, Router} = require('react-router');
import MenuBar from './MenuBar.jsx';
import RegSuccessfully from './regSuccessfully.jsx';
import { Scrollbars } from "react-custom-scrollbars";
import '../styles/style.css';

const stateOptions = [
  { key: "Alaska", value: "Alaska", text: "Alaska" },
  { key: "California", value: "California", text: "California" },
  { key: "Florida", value: "Florida", text: "Florida" },
  { key: "Georgia", value: "Georgia", text: "Georgia" },
  { key: "Hawaii", value: "Hawaii", text: "Hawaii" },
  { key: "New Jersey", value: "New Jersey", text: "New Jersey" },
  { key: "Ohio", value: "Ohio", text: "Ohio" },
  { key: "Texas", value: "Texas", text: "Texas" },
  { key: "Washington", value: "Washington", text: "Washington" },
  { key: "Virginia", value: "Virginia", text: "Virginia" }
];

const addressOptions = [
  { key: "Business", value: "Business", text: "Business" },
  { key: "Residential", value: "Residential", text: "Residential" }
];

const employeeOptions = [
  { key: "1-4", value: "1-4", text: "1-4" },
  { key: "5-9", value: "5-9", text: "5-9" },
  { key: "10-19", value: "10-19", text: "10-19" },
  { key: "20-49", value: "20-49", text: "20-49" },
  { key: "50-99", value: "50-99", text: "50-99" },
  { key: "100-249", value: "100-249", text: "100-249" },
  { key: "250+", value: "250+", text: "250+" }
];

const industryOptions = [
  { key: "Administrative and Support and Waste Management and Remediation Services", value: "Administrative and Support and Waste Management and Remediation Services", text: "Administrative and Support and Waste Management and Remediation Services" },
  { key: "Agriculture, Forestry, Fishing and Hunting", value: "Agriculture, Forestry, Fishing and Hunting", text: "Agriculture, Forestry, Fishing and Hunting" },
  { key: "Arts, Entertainment, and Recreation", value: "Arts, Entertainment, and Recreation", text: "Arts, Entertainment, and Recreation" },
  { key: "Construction", value: "Construction", text: "Construction" },
  { key: "Educational Services", value: "Educational Services", text: "Educational Services" },
  { key: "Accommodation and Food Services", value: "Accommodation and Food Services", text: "Accommodation and Food Services" },
  { key: "Finance and Insurance", value: "Finance and Insurance", text: "Finance and Insurance" },
  { key: "Health Care and Social Assistance", value: "Health Care and Social Assistance", text: "Health Care and Social Assistance" },
  { key: "Information", value: "Information", text: "Information" },
  { key: "Management of Companies and Enterprises", value: "Management of Companies and Enterprises", text: "Management of Companies and Enterprises" },
  { key: "Information", value: "Information", text: "Information" },
  { key: "Manufacturing1", value: "Manufacturing1", text: "Manufacturing1" },
  { key: "Manufacturing2", value: "Manufacturing2", text: "Manufacturing2" },
  { key: "Manufacturing3", value: "Manufacturing3", text: "Manufacturing3" },
  { key: "Mining, Quarrying, and Oil and Gas Extraction", value: "Mining, Quarrying, and Oil and Gas Extraction", text: "Mining, Quarrying, and Oil and Gas Extraction" },
  { key: "Other Services (except Public Administration)", value: "Other Services (except Public Administration)", text: "Other Services (except Public Administration)" }
];

export default class Registration extends Component {
  constructor(props) {
  super(props);
  this.state = {
    stepperoneStatus: true,
    steppertwoStatus: false,
    stepperthreeStatus: false,
    stepperfourStatus: false
  }
}

componentDidMount() {
    this.setState({ height1: window.innerHeight - 250 + "px" });
  }
createaccount(){
hashHistory.push('/RegSuccessfully')
}

render() {
  const {
    stepperoneStatus,
    steppertwoStatus,
    stepperthreeStatus,
    stepperfourStatus
  } = this.state

    return(
      <div>
      <MenuBar/>
      <Grid>
      <Grid.Column width={3}/>
      <Grid.Column width={10}>
      <Step.Group stackable='tablet' style = {{ width: "100%", marginLeft: "3.5%", marginTop:"1%", marginBottom:"-0.1%"}} className = "stepper">
          <Step active={this.state.stepperoneStatus} style = {{borderBottomLeftRadius:"0"}}>
            <Icon name='user' style={{ fontSize: 'large' }}/>
            <Step.Content>
              <Step.Title>Login Information</Step.Title>
            </Step.Content>
          </Step>
          <Step active = {this.state.steppertwoStatus}>
            <Icon name='address card outline' style={{ fontSize: 'large' }}/>
            <Step.Content>
              <Step.Title>Your Address</Step.Title>
            </Step.Content>
          </Step>
          <Step active = {this.state.stepperthreeStatus}>
            <Icon name='plus' style={{ fontSize: 'large' }}/>
            <Step.Content>
              <Step.Title>Account Details</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>

      <Card attached align="left" style = {{width: "100%",marginLeft: "3.5%",backgroundColor:'#f2f2f2'}}>
     {
       this.state.stepperoneStatus ?
       <div>


       <Form>
       <Grid style={{marginTop:'3%'}}>
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={4}>
          <label style={{color:'#003E6A ', fontSize:'120%',fontWeight:"bolder"}}>Email Address</label>
          </Grid.Column>
          <Grid.Column width={4}>
          <Input placeholder='Email Address' />
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={4}>
          <label style={{color:'#003E6A ', fontSize:'120%',fontWeight:"bolder"}}>Password</label>
          </Grid.Column>
          <Grid.Column width={4}>
          <Input placeholder='Password' />
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={4}>
          <label style={{color:'#003E6A ', fontSize:'120%',fontWeight:"bolder"}}>Re-Type Password</label>
          </Grid.Column>
          <Grid.Column width={4}>
          <Input placeholder='Re-Type Password' />
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>
       </Grid>
       </Form>


       <Grid>
       <Grid.Row style={{marginBottom:'2%'}}>
       <Grid.Column width={6}></Grid.Column>
       <Grid.Column width={4}><Button style={{marginTop:'2%', marginBottom:'2%', backgroundColor:'#003E6A', color:'white'}} onClick={()=>{
         this.setState({
           stepperoneStatus:false,
           steppertwoStatus:true
         })
       }}   content='Next' icon='right arrow' labelPosition='right'>
       </Button></Grid.Column>
       <Grid.Column width={6}></Grid.Column>
       </Grid.Row>
       </Grid>

       </div> :
       this.state.steppertwoStatus ?
       <div>
       <Scrollbars style={{ height: this.state.height1 }}>

       <Form>


       <Grid style={{marginTop:'3%'}}>
        <Grid.Row>
          <Grid.Column width={3}>
          </Grid.Column>
          <Grid.Column width={5}>
          <label style={{color:'#003E6A ', fontSize:'120%',fontWeight:"bolder"}}>First Name</label>
          </Grid.Column>
          <Grid.Column width={5}>
          <Input placeholder='First Name' />
          </Grid.Column>
          <Grid.Column width={3}>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={3}>
          </Grid.Column>
          <Grid.Column width={5}>
          <label style={{color:'#003E6A ', fontSize:'120%',fontWeight:"bolder"}}>Last Name</label>
          </Grid.Column>
          <Grid.Column width={5}>
          <Input placeholder='Last Name' />
          </Grid.Column>
          <Grid.Column width={3}>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={3}>
          </Grid.Column>
          <Grid.Column width={5}>
          <label style={{color:'#003E6A ', fontSize:'120%',fontWeight:"bolder"}}>Company Name</label>
          </Grid.Column>
          <Grid.Column width={5}>
          <Input placeholder='Company Name' />
          </Grid.Column>
          <Grid.Column width={3}>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={3}>
          </Grid.Column>
          <Grid.Column width={5}>
          <label style={{color:'#003E6A ', fontSize:'120%',fontWeight:"bolder"}}>Address</label>
          </Grid.Column>
          <Grid.Column width={5}>
          <Input placeholder='Address' />
          </Grid.Column>
          <Grid.Column width={3}>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={3}>
          </Grid.Column>
          <Grid.Column width={5}>
          <label style={{color:'#003E6A ', fontSize:'120%',fontWeight:"bolder"}}>City</label>
          </Grid.Column>
          <Grid.Column width={5}>
          <Input placeholder='City' />
          </Grid.Column>
          <Grid.Column width={3}>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={3}>
          </Grid.Column>
          <Grid.Column width={5}>
          <label style={{color:'#003E6A ', fontSize:'120%',fontWeight:"bolder"}}>State</label>
          </Grid.Column>
          <Grid.Column width={5}>
          <Dropdown placeholder='Select State'  search selection options={stateOptions} />
          </Grid.Column>
          <Grid.Column width={3}>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={3}>
          </Grid.Column>
          <Grid.Column width={5}>
          <label style={{color:'#003E6A ', fontSize:'120%',fontWeight:"bolder"}}>ZIP Code</label>
          </Grid.Column>
          <Grid.Column width={5}>
          <Input placeholder='ZIP Code' />
          </Grid.Column>
          <Grid.Column width={3}>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={3}>
          </Grid.Column>
          <Grid.Column width={5}>
          <label style={{color:'#003E6A ', fontSize:'120%',fontWeight:"bolder"}}>Address Type</label>
          </Grid.Column>
          <Grid.Column width={5}>
          <Dropdown placeholder='Select Address Type'  search selection options={addressOptions} />
          </Grid.Column>
          <Grid.Column width={3}>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={3}>
          </Grid.Column>
          <Grid.Column width={5}>
          <label  style={{color:'#003E6A ', fontSize:'120%',fontWeight:"bolder"}}>Phone Number</label>
          </Grid.Column>
          <Grid.Column inline width={5}>
          <Input placeholder='Phone Number'/>
          </Grid.Column>
          <Grid.Column width={3}>
          </Grid.Column>
        </Grid.Row>
       </Grid>

       </Form>


       <Grid  >
       <Grid.Row style={{marginBottom:'2%'}}>
       <Grid.Column width={4}></Grid.Column>
       <Grid.Column width={4}><Button style={{marginTop:'2%',marginBottom:'2%'}} onClick={()=>{
         this.setState({
           stepperoneStatus:true,
           steppertwoStatus:false
         })
       }}  content='Previous' icon='left arrow' labelPosition='left'>

       </Button>
        </Grid.Column >
       <Grid.Column width={4}>
       <Button style={{marginTop:'2%',marginBottom:'2%', backgroundColor:'#003E6A', color:'white'}} onClick={()=>{
         this.setState({
           steppertwoStatus:false,
           stepperthreeStatus:true
         })
       }}  content='Next' icon='right arrow' labelPosition='right'>
       </Button></Grid.Column>
       <Grid.Column width={4}></Grid.Column>

       </Grid.Row>
       </Grid>
       </Scrollbars >


       </div> :
       this.state.stepperthreeStatus ?
       <div>

       <Form>
       <Grid style={{marginTop:'3%'}}>
        <Grid.Row>
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={4}>
          <label style={{color:'#003E6A ', fontSize:'120%', fontWeight:"bold"}}>Account Type</label>
          </Grid.Column>
          <Grid.Column width={10}>
            <Form.Group>
            <Form.Field><Radio style={{fontWeight:"bold"}} label='Home Office' name='radioGroup' accountType='Home Office' checked={this.state.accountType === 'Home Office'} onChange={()=>{this.setState({ accountType: 'Home Office' })}} />  </Form.Field>
            <Form.Field><Radio style={{fontWeight:"bold"}} label='Business' name='radioGroup' accountType='Business' checked={this.state.accountType === 'Business'}  onChange={()=>{this.setState({ accountType: 'Business' })}}/>  </Form.Field>
            <Form.Field><Radio style={{fontWeight:"bold"}} label='Education' name='radioGroup' accountType='Education' checked={this.state.accountType === 'Education'}  onChange={()=>{this.setState({ accountType: 'Education' })}}/>  </Form.Field>
            <Form.Field><Radio style={{fontWeight:"bold"}} label='Government' name='radioGroup' accountType='Government' checked={this.state.accountType === 'Government'}  onChange={()=>{this.setState({ accountType: 'Government' })}}/>  </Form.Field>
            <Form.Field><Radio style={{fontWeight:"bold"}} label='Healthcare' name='radioGroup' accountType='Healthcare' checked={this.state.accountType === 'Healthcare'} onChange={()=>{this.setState({ accountType: 'Healthcare' })}}/>  </Form.Field>
            </Form.Group>

          </Grid.Column>
          <Grid.Column width={1}>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={4}>
          <label style={{color:'#003E6A ', fontSize:'120%',  fontWeight:"bold"}}>Category Type</label>
          </Grid.Column>
          <Grid.Column width={10}>
          <Form.Group>

            <Form.Field><Radio style={{fontWeight:"bold"}} label='EPRO' name='radioGroup' category='EPRO' checked={this.state.category === 'EPRO'} onChange={()=>{this.setState({ category: 'EPRO' })}} />  </Form.Field>
            <Form.Field><Radio style={{fontWeight:"bold"}} label='PSF' name='radioGroup' category='PSF' checked={this.state.category === 'PSF'}  onChange={()=>{this.setState({ category: 'PSF' })}}/>  </Form.Field>
            <Form.Field><Radio style={{fontWeight:"bold"}} label='API' name='radioGroup' category='API' checked={this.state.category === 'API'}  onChange={()=>{this.setState({ category: 'API' })}}/>  </Form.Field>
            <Form.Field><Radio style={{fontWeight:"bold"}} label='CATALOG' name='radioGroup' category='CATALOG' checked={this.state.category === 'CATALOG'}  onChange={()=>{this.setState({ category: 'CATALOG' })}}/>  </Form.Field>
            </Form.Group>

          </Grid.Column>
          <Grid.Column width={1}>
          </Grid.Column>
        </Grid.Row>



        <Grid.Row>
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={4}>
          <label style={{color:'#003E6A ', fontSize:'120%',  fontWeight:"bold"}}>Number of Employees</label>
          </Grid.Column>
          <Grid.Column width={10}>
          <Dropdown placeholder='Select Number of Employees'  search selection options={employeeOptions} />
          </Grid.Column>
          <Grid.Column width={1}>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={4}>
          <label style={{color:'#003E6A ', fontSize:'120%',  fontWeight:"bold"}}>Industry</label>
          </Grid.Column>
          <Grid.Column width={10}>
          <Dropdown placeholder='Select Industry'  search selection options={industryOptions} />
          </Grid.Column>
          <Grid.Column width={1}>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={4}>
          <label style={{color:'#003E6A ', fontSize:'120%',  fontWeight:"bold"}}>Select Account Flag</label>
          </Grid.Column>
          <Grid.Column width={10}>
          <Form.Group>

            <Form.Field><Radio style={{fontWeight:"bold"}} label='Non-Profit Organization' name='radioGroup' accountFlag='Non-Profit Organization' checked={this.state.accountFlag === 'Non-Profit Organization'} onChange={()=>{this.setState({ accountFlag: 'Non-Profit Organization' })}} />  </Form.Field>
            <Form.Field><Radio style={{fontWeight:"bold"}} label=' P.O. may come from a Purchasing Agent' name='radioGroup' accountFlag=' P.O. may come from a Purchasing Agent' checked={this.state.accountFlag === ' P.O. may come from a Purchasing Agent'}  onChange={()=>{this.setState({ accountFlag: ' P.O. may come from a Purchasing Agent' })}}/>  </Form.Field>
            </Form.Group>

          </Grid.Column>
          <Grid.Column width={1}>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={4}>
          <label style={{color:'#003E6A ', fontSize:'120%', fontWeight:"bold"}}>Best Buy Tax-Exempt Quick Card ID</label>
          </Grid.Column>
          <Grid.Column width={10}>
          <Input placeholder='Quick Card ID' />
          </Grid.Column>
          <Grid.Column width={1}>
          </Grid.Column>
        </Grid.Row>
       </Grid>
       </Form>

       <Grid >
       <Grid.Row  style={{marginBottom:'2%'}}>
       <Grid.Column width={1}></Grid.Column>
       <Grid.Column width={4}>
       <Button style={{marginTop:'2%',marginBottom:'2%'}} onClick={()=>{
         this.setState({
           steppertwoStatus:true,
           stepperthreeStatus:false
         })
       }}   content='Previous' icon='left arrow' labelPosition='left'>
       </Button>
        </Grid.Column >
       <Grid.Column width={4}>
       <Button style={{marginTop:'2%',marginBottom:'2%',backgroundColor:'#003E6A',color:'white'}} onClick={this.createaccount}>
       CREATE ACCOUNT
       </Button>
       </Grid.Column>
       <Grid.Column width={7}></Grid.Column>
       </Grid.Row>
       </Grid>

       </div> :
       null
     }
   </Card>
   </Grid.Column>
   <Grid.Column width={3}/>
</Grid>
</div>
 );
  }
}
