import React, { PureComponent } from "react";
import { Card, Row, Col, Carousel, Icon } from "antd";
import { Link } from "react-router-dom";
import style from "./InterfyCard.module.scss";
import "../../icons.css"

export class InterfyCard extends PureComponent {
  render() {
    const school = this.props.school;

    const courses = school.courses.map((course, index) => {
      if (index < 3) return (
            <li>
            <h1>{course.title}</h1>
            <p>
              À partir de R${course.price}/sem
            </p>
            </li>
        );
      return null;
    });

    const optionals = school.optionals.map((optional, index) => {
      if (index < 3) {
        return (<p>{optional.description}</p>);
      }
      return null;
    });

    const schoolInfo = 
      (<div className={style.schoolInfo}>
        <h1>{school.name}</h1>
        <h2>{school.country} - {school.city}</h2>
      </div>)

    const quoteButton = 
      (<div className={style.quoteButton}>
        <Link to={`/orcamento?school=${school.slug}`}>Fazer orçamento</Link>
      </div>)

    return (
      <React.Fragment>
            <Card className={style.card}>
              <Row>
                <Col xs={{ span: "24" }} md={{ span: "8" }}>
                  <Carousel className={style.carousel}>
                    {school.photos.map(photo=>{
                      return <img src={photo}></img>
                    })}
                  </Carousel>
                </Col>
                <Col sm={24} md={0}>
                  {schoolInfo}
                </Col> 
                <Col
                  xs={{ span: "11" }}
                  md={{ span: "8"}}
                  className={style.optionals}
                >
                  {schoolInfo}
                  {optionals}
                </Col>
                <Col
                  xs={{ span: "12" }}
                  md={{ span: "8"}}
                  className={style.courses}
                >
                  <p className={style.title}>Cursos oferecidos</p>
                  <ul>{courses}</ul>
                  {quoteButton}
                </Col>
              </Row>
            </Card>
      </React.Fragment>
    );
  }
}
