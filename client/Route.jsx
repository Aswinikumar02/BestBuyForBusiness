import React from 'react';
import ReactDOM from 'react-dom';
import Registration from './components/Registration.jsx';
import RegSuccessfully from './components/regSuccessfully.jsx';
import CompleteReg from './components/completeReg.jsx';
import Homepage from './components/homePage.jsx';
import LoginUser from './components/loginUser.jsx';
const {browserHistory, hashHistory, Route, Router} = require('react-router');
import DetailedReg from './components/detailedReg.jsx';
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path={"/"} component={Homepage}/>
    <Route path={"/Registration"} component={Registration}/>
    <Route path={"/LoginUser"} component={LoginUser}/>
    <Route path={"/DetailedReg"} component={DetailedReg}/>
    <Route path={"/RegSuccessfully"} component={RegSuccessfully}/>
    <Route path={"/CompleteReg"} component={CompleteReg}/>
</Router>,
  document.getElementById('reactApp')
);
