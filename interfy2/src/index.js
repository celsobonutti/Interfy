import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://interfy.herokuapp.com/graphql"
});

ReactDOM.render(<ApolloProvider client={client}><BrowserRouter><App/></BrowserRouter></ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
