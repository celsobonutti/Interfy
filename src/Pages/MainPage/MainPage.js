import React, { Component } from "react";
import { Col, Row } from "antd";
import { CountryCard } from "../../Components/CountryCard/CountryCard";
import { countries } from "../../Placeholder/placeholder";
import style from "./MainPage.module.css";

export class MainPage extends Component {
  render() {
    const countryCards = countries.map(country => {
      return (
        <Col xs={{ span: "10" }} md={{ span: "4" }}>
          <CountryCard
            title={country.name}
            image={country.images[0]}
            acronym={country.acronym}
          />
        </Col>
      );
    });

    return (
      <div className={style.page}>
        <Row>
          <Col xs={{ span: "24" }} style={{ marginTop: "3%" }}>
            <div className={style.title}>
              <h1>Descubra o mundo</h1>
              <p>
                Mais que fazer intercâmbio.
              </p>
              <p>
                Fazer conexões.
              </p>
            </div>
            <div className={style.question}>
              <p>Para onde será sua próxima jornada?</p>
            </div>
          </Col>
        </Row>
        <Row type="flex" gutter={{xs: 8, sm: 16}} justify="center" align="middle">
            {countryCards}
        </Row>
      </div>
    );
  }
}
