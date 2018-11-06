import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Navbar } from "./Navigation/Navbar/Navbar.js";
import { Schools } from "./Pages/Schools/Schools.js";
import { MainPage } from "./Pages/MainPage/MainPage";
import BuyScreen from "./Pages/BuyScreen/BuyScreen.js";
import { lang } from "moment";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseThatWillBeBoughtId: "",
      selectedCourseId: "",
      schools: []
    };
  }

  changeGlobalStateHandler = key => {
    this.setState({ selectedCourseId: key });
  };

  render() {

    return (
      <div id='app'>

        <Navbar/>

          <Route path="/(main|)"
            render= {
              () => (
                <MainPage/>
              )}/>

          <Route path="/escolas" component={Schools}/>

          <Route path="/orcamento" component={BuyScreen}/>
        </div>
    );
  }
}

export default App;
