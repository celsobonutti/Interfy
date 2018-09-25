import React, {PureComponent} from "react";
import {Col, Row, Icon, Card} from 'antd';

export class CountryCards extends PureComponent{
    render(){
        return(
            <React.Fragment>
                <Col xs={{span:'24'}}>
                     <Row>
                        <Col xs={{span:'24'}} md={{span:'6'}} id='column1'>
                            <img src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' style={{height:'100%', width:'100%'}}></img>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{span:'24'}}>
                            <div style={{backgroundColor:'#281E78', marginTop:'-13%', opacity:'0.8'}}>
                                <p style={{color:'#FFFFFF', fontFamily:'montserrat', textAlign:'center', opacity:'1.0'}}>{this.props.title}</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </React.Fragment>
        )
    }
}