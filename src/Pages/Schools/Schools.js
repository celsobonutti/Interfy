import React, { Component, Fragment } from "react";
import { Row, Col } from "antd";
import { InterfyCard } from "../../Components/InterfyCard/InterfyCard.js";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Filter from "../../Components/Filter/Filter";
import {languages, countries} from "../../Placeholder/placeholder"

const GET_SCHOOL = gql`
  {
    findSchool {
      _id
      optionals {
        icon
        description
      }
      courses {
        title
      }
    }
  }
`;

export class Schools extends Component {
  render() {
    const cardList = (
      <Query query={GET_SCHOOL}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return data.findSchool.map(school => {
            return (
              <InterfyCard
                key={school._id}
                school={school}
                getKey={() => this.props.setGlobalState(school._id)}
              />
            );
          });
        }}
      </Query>
    );
    return (
      <React.Fragment>
        <Row type="flex" justify="center">
          <Col md={7} sm={24}>
            <Filter languages={languages} countries={countries} />
          </Col>
          <Col md={17} sm={24}>
            {cardList}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
