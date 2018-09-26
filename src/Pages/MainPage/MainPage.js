import React, { Component } from "react";
import { Col, Row, Icon } from 'antd';
import { CountryCard } from "../../Components/CountryCard/CountryCard";
import { countries } from "../../Placeholder/placeholder"
const headStyle = {

}

const titleStyle = {
    fontFamily: 'montserrat',
    textAlign: 'Center',
    backgroundColor: '#281E78',
    color: '#FFFFFF',
}

export class MainPage extends Component {
    render() {
        const countryCards = (
            countries.map(country => {
                return (<Col xs={{ span: '10' }} md={{ span: '10' }}>
                    <CountryCard
                        title={country.name}
                        image='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                        titleStyle={titleStyle}
                    />
                </Col>)
            })
        )

        return (
            <div>
                <Row>
                    <Col xs={{ span: '1' }}></Col>
                    <Col xs={{ span: '22' }} style={{ marginTop: '3%' }}>
                        <p style={{ textAlign: 'center', color: '#281E78', fontFamily: 'Fredoka One', fontSize: '30px' }}>Descubra o mundo</p>
                        <p style={{ textAlign: 'center', color: '#8B3195', fontFamily: 'montserrat', fontSize: '20px' }}>Mais que fazer intercâmbio.</p>
                        <p style={{ textAlign: 'center', color: '#8B3195', fontFamily: 'montserrat', fontSize: '20px' }}>Fazer conexões.</p>
                    </Col>
                    <Col xs={{ span: '1' }}></Col>
                </Row>
                <Row type="flex" justify="space-around" align="middle">
                    {countryCards}
                </Row>
            </div>
        )
    }
}