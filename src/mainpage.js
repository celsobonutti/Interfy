import React, {Component} from "react";
import {Col, Row, Icon} from 'antd';

export class MainPage extends Component{
    
    render(){
        return(
            <div>
                <Row>
                    <Col span={1}></Col>
                    <Col xs={{span:'22'}} style={{marginTop:'3%'}}>
                        <p style={{textAlign:'center', color:'#281E78', fontFamily:'Fredoka One', fontSize:'30px'}}>Descubra o mundo</p>
                        <p style={{textAlign:'center', color:'#8B3195', fontFamily:'montserrat', fontSize:'20px'}}>Mais que fazer intercâmbio.</p>
                        <p style={{textAlign:'center', color:'#8B3195', fontFamily:'montserrat', fontSize:'20px'}}>Fazer conexões.</p>
                    </Col>
                    <Col span={1}></Col>
                </Row>
                <Row>
                    <Col span={2}></Col>
                    <Col span={2}></Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}