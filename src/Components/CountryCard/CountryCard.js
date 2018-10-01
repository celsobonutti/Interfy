import React, {PureComponent} from "react";
import {Col, Row, Icon, Card} from 'antd';
import style from "./CountryCard.module.css"
const { Meta } = Card;

export class CountryCard extends PureComponent{
    render(){
        return(
            <div onClick={()=>this.props.selectCountry} className={style.card} >
                <img src={this.props.image}></img>
                <div className={style.text}>
                    <p>{this.props.title}</p>
                </div>
            </div>
        )
    }
}