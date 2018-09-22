import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {Navbar} from './Navbar/Navbar.js';
import {Schools} from './Schools/Schools.js'
import {MainPage} from './MainPage/mainpage.js';
import {BuyScreen} from './BuyScreen/BuyScreen.js';

import {Testpage} from './Testpage.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        courseThatWillBeBoughtId:'',
        selectedCourseId:''
    };
  }

  changeGlobalStateHandler = (key) => {
    this.setState({selectedCourseId: key}); 
  }
  
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

        <div id='malta'>
          <Route path="/malta" 
            render= {
              () => (
                <Schools
                  getGlobalState = {this.changeGlobalStateHandler}
                  selectedCountry={'Malta'}
                />
              )}/>
        </div>

        <div id='letstravel'>
          <Route path="/letstravel" 
            render= {
              () => (
                <BuyScreen
                selectedCourseId={this.state.selectedCourseId}
                />
              )}/>
        </div>

        <div id='testpage'>
          <Route path="/testpage" 
            render= {
              () => (
                <Testpage
                />
              )}/>
        </div>


      </div>
    );
  }
}

export default App;
