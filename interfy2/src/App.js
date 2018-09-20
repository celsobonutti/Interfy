import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {Navbar} from './Navbar';
import {Courses} from './Courses'
import {MainPage} from './mainpage';
import {InterfyCard} from './InterfyCard';
class App extends Component {
  render() {
    return (
      <div id='app'>
        <Navbar/>
        
        <div id='main'>
          <Route path="/(main|)" 
            render= {
              () => (
                <MainPage/>
              )}/>
        </div>

        <div className='canada'>
            <Route path="/canada"
            render = {
              () => (
                <Courses/>
              )
            }
            />
        </div>
      </div>
    );
  }
}

export default App;
