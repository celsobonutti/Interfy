import React from 'react'
import { Row, Col } from "antd";
import style from './PriceDisplay.module.scss'

const PriceDisplay = (props) => {
    const priceList = props.duration.map((duration)=>{
        const number = duration.numberOfWeeks;
        if (number.length !== 1){
            return(
                <React.Fragment>
                    <Col xs={12}>{`${number[0]} a ${number[number.length-1]}`}</Col>
                    <Col xs={12}>{`R$ ${duration.price}`}</Col>
                </React.Fragment>
                );
        }
        else
            return(
                <React.Fragment>
                    <Col xs={12}>{`${number[0]}`}</Col>
                    <Col xs={12}>{`R$ ${duration.price}`}</Col>
                </React.Fragment>
                );
    }) 
    
    return (
        <div className={style.display}>
            <div className={style.column}>
                <Row className={style.header}>
                    <Col className={style.header1} xs={12}>Semanas</Col>
                    <Col className={style.header2} xs={12}>Valor/semana</Col>
                </Row>
                <Row>
                    {priceList}
                </Row>
            </div>
        </div>
    )
}

export default PriceDisplay