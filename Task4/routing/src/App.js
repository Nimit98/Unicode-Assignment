import React from 'react';
import './App.css';
import SignUp from './Task2/SignUp/SignUp'
import Nav from './Components/Nav'
import Body from './Task1/Resume/Body'
import Header from './Task1/Resume/Header'
import Temp from './Task2/TemperatureConversion/Main'
import API from './Task3/ZomatoAPI/Main'
import './Task2/SignUp/bootstrap/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Route path='/signup' component={SignUp} />
      <Route path='/resume' component={Header} />
      <Route path='/resume' component={Body} />
      <Route path='/temperature-conversion' component={Temp} />
      <Route path='/zomatoAPI' component={API} />
      
    </div>
   </Router>
  );
}



export default App;
