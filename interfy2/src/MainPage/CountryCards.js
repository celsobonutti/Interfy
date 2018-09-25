import React, {PureComponent} from "react";
import {Col, Row, Icon} from 'antd';

export class CountryCards extends PureComponent{
    render(){
        return(
            <React.Fragment>
                <div>
                    <img src={this.props.image} style={{height:'100%', width:'100%', borderRadius:'3px 3px 0px 0px'}}/>
                </div>    
                <div style={this.props.bodyStyle}>
                    <p>{this.props.title}</p>
                </div>
            </React.Fragment>
        )
    }
}