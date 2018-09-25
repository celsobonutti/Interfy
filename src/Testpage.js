import { Query } from "react-apollo";
import gql from "graphql-tag";
import React, { Component } from 'react';

const ExchangeRates = () => (
  <Query
    query={gql`
      {
        findSchool {
          _id
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.findSchool.map(({_id}) => (
        <div key={_id}>
          <p>{`${_id}`}</p>
        </div>
      ));
    }}
  </Query>
);

export class Testpage extends Component{
    render(){
        return(
            <div>
                {ExchangeRates}
            </div>
        )
    }
}