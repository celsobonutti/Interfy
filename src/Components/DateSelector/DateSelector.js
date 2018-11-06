import React, { Component } from 'react'
import { Row, Col } from "antd";
import PriceDisplay from './PriceDisplay/PriceDisplay'
class DateSelector extends Component {
    render () {
        return (
            <Row gutter={8}>
                <Col xs={24}>
                    <PriceDisplay duration={this.props.duration}></PriceDisplay>
                </Col>
            </Row>
        )
    }
}

export default DateSelector