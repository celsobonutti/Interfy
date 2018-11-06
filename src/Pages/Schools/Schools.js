import React, { Component } from "react";
import { Row, Col } from "antd";
import { InterfyCard } from "../../Components/InterfyCard/InterfyCard.js";
import { Query } from "react-apollo";
import Filter from "../../Components/Filter/Filter";
import {languages, countries} from "../../Placeholder/placeholder"
import style from "./Schools.module.css"
import {GET_SCHOOLS} from "../../Configuration/queries"
import queryString from 'query-string';


export class Schools extends Component {
  constructor(props){
    super(props);
    this.state={
      filters:{}
    }
  }

  render() {
    const cardList = (
      <Query query={GET_SCHOOLS} variables={queryString.parse(this.props.location.search)}>
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
        <Row className={style.schools}>
          <Col md={7} xs={0} sm={0}>
            <Filter selected={queryString.parse(this.props.location.search)} languages={languages} countries={countries}/>
          </Col>
          <Col md={17} sm={24}>
            {cardList}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
