import React, { PureComponent } from "react";
import { Card, Row, Col, Carousel, Icon, Button } from "antd";
import { Link } from "react-router-dom";
import style from "./InterfyCard.module.css";
import "../../icons.css"
import PoolSVG from '../../icons/pool.svg'

var containerStyle = {
  borderWidth: "1px",
  borderColor: "darkgray",
  borderStyle: "solid"
};

var insideRightContainerBorder = {
  borderWidth: "0px 0px 0px 1px",
  borderColor: "darkgray",
  borderStyle: "solid",
  marginTop: "3%"
};

export class InterfyCard extends PureComponent {
  render() {
    const courses = this.props.school.courses.map((course, index) => {
      if (index < 3) return (
          <Row>
            <p>{course.title}</p>
            <p>
              À partir de R$
              {course.price}
            </p>
          </Row>
        );
      return null;
    });

    const optionals = this.props.school.optionals.map((optional, index) => {
      if (index < 3) {
        return (<p>{optional.description}</p>);
      }
      return null;
    });

    return (
      <React.Fragment>
        <Row style={{ marginBottom: "5%" }}>
          <Col xs={{ span: 20, offset: 2 }} md={{ span: 14, offset: 5 }}>
            <Card style={containerStyle}>
              <Row>
                <Col xs={{ span: "24" }} md={{ span: "8" }} id="column1">
                  <div>
                  <img src={this.props.school.photos[0]}></img>
                  </div>
                </Col>
                <Col
                  xs={{ span: "11" }}
                  md={{ span: "8"}}
                  style={{ marginTop: "3%" }}
                  id="column2"
                  className={style.optionals}
                >
                  {optionals}
                </Col>
                <Col
                  xs={{ span: "12" }}
                  md={{ span: "8"}}
                  style={insideRightContainerBorder}
                  id="column3"
                  className={style.courses}
                >
                  {courses}
                </Col>
              </Row>
              <Row justify="center">
                <Col xs={{ span: "6" }} md={{ span: "8" }} lg={{ span: "8" }} />
                <Col
                  xs={{ span: "8" }}
                  md={{ span: "8" }}
                  lg={{ span: "8", offset: "2" }}
                  style={{ marginTop: "3%" }}
                >
                  <Button onClick={this.props.getKey}>
                    <Link to="/letstravel">Fazer orçamento</Link>
                  </Button>
                </Col>
                <Col
                  xs={{ span: "10" }}
                  md={{ span: "8" }}
                  lg={{ span: "6" }}
                />
              </Row>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
