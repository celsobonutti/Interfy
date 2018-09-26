import React, {PureComponent} from "react";
import {Col, Row, Icon, Card} from 'antd';
import style from "./CountryCard.module.css"
const { Meta } = Card;

export class CountryCard extends PureComponent{
    render(){
        return(
            <React.Fragment>
                <Card
                    hoverable
                    className={style.image}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta
                    title={this.props.title}
                    description="www.instagram.com"
                    />
                </Card>
            </React.Fragment>
        )
    }
}