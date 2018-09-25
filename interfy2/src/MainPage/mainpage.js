import React, {Component} from "react";
import {Col, Row, Icon} from 'antd';
import {CountryCards} from "./CountryCards";

const headStyle = {
    
}

const bodyStyle = {
    fontFamily:'montserrat',
    textAlign:'Center',
    backgroundColor:'#281E78',
    color:'#FFFFFF',
    borderRadius:'0px 0px 3px 3px'
}

export class MainPage extends Component{
    
    render(){
        return(
            <div>
                <Row>
                    <Col xs={{span:'1'}}></Col>
                    <Col xs={{span:'22'}} style={{marginTop:'3%'}}>
                        <p style={{textAlign:'center', color:'#281E78', fontFamily:'Fredoka One', fontSize:'30px'}}>Descubra o mundo</p>
                        <p style={{textAlign:'center', color:'#8B3195', fontFamily:'montserrat', fontSize:'20px'}}>Mais que fazer intercâmbio.</p>
                        <p style={{textAlign:'center', color:'#8B3195', fontFamily:'montserrat', fontSize:'20px'}}>Fazer conexões.</p>
                    </Col>
                    <Col xs={{span:'1'}}></Col>
                </Row>
                <Row>
                    <Col xs={{span:'1'}}></Col>
                    <Col xs={{span:'22'}} style={{textAlign:'center', color:'#281E78', fontFamily:'Montserrat', fontSize:'20px'}}>Onde será sua próxima jornada?</Col>
                    <Col xs={{span:'1'}}></Col>
                </Row>
                <Row style={{marginTop:'7%'}}>
                    <Col xs={{span:'1'}}></Col>
                    <Col xs={{span:'9'}}></Col>
                    <Col xs={{span:'9'}}></Col>
                    <Col xs={{span:'1'}}></Col>
                </Row>
            </div>
        )
    }
}