import React, {PureComponent} from 'react';
import {Card, Row, Col} from 'antd';

export class SelectionCard extends PureComponent {
    render(){
        return(
            <React.Fragment>
                    <Col xs={{span:20, offset:2}} md={{span:5, offset:5}}>
                        <Card type='' style={{}} hoverable="true" title={this.props.title}>
                            {this.props.description}
                        </Card>
                    </Col>
            </React.Fragment>
        )
    }
}