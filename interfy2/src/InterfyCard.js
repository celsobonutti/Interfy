import React, {Component} from 'react';
import {Card, Row, Col, Carousel, Icon, Button} from 'antd'

var car = require('./icons/car.svg')
var pool = require('./icons/pool.svg')

var reactNodeImg = React.createElement('img',{
        src:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        width:'100%',
        height:'100%'
    },
);

var reactPoolIcon = React.createElement('img', {
    src:'https://image.flaticon.com/icons/svg/1108/1108875.svg',
    width:'30%',
    height:'30%'
},
);


var headStyle={

}

var bodyStyle={

}

var containerStyle={
    borderWidth:'1px',
    borderColor:'darkgray',
    borderStyle:'solid'
}  

var insideRightContainerBorder = {
    borderWidth:'0px 0px 0px 1px',
    borderColor:'darkgray',
    borderStyle:'solid', 
    marginTop:'3%', 
}

var paragraphStyle = {
    marginLeft:'3%'
}

const items = [
    {
        src:'https://i.imgur.com/PeZYUqp.jpg',
        altText: 'Slide 1',
        caption: '',
        
    },
    {
        src: 'https://i.imgur.com/5QtzFYT.jpg',
        altText: 'Slide 2',
        caption: '',
        
    },
    {
        src: 'https://i.imgur.com/c3OmKBn.jpg',
        altText: 'Slide 3',
        caption: '',
        
    }
    ];

var cssModule = {
    maxHeight:'800px',
    maxWidth:'600px'
}

export class InterfyCard extends Component {

    renderOptions(theObject){ 
        var i = 0;
        return(
            <div>
                {theObject.optionals.map(() => {
                    while(i < theObject.optionals.length && i < 3){
                        i++;
                        return(
                            <Row>
                                <Col span={8} style={{marginTop:'3%'}}>
                                    {React.createElement(
                                        'img',
                                        {
                                            src:'https://image.flaticon.com/icons/svg/1108/1108875.svg',
                                            width:'30%',
                                            height:'30%'
                                        }
                                    )}
                                </Col>
                                <Col span={16}><p>{theObject.optionals[i-1].description}</p></Col>
                            </Row>
                        )
                    }
                })}
            </div>
        )
    }

    renderCourses(theObject){ 
        var i = 0;
        return(
            <div>
                {theObject.course.map(() => {
                    while(i < theObject.course.length && i < 3){
                        i++;
                        return(
                            <Row style={paragraphStyle}>
                                <p>{theObject.course[i-1].title}</p>
                                <p>Por R${theObject.course[i-1].price}</p>
                            </Row>
                        )
                    }
                })}
            </div>
        )
    }

    render(){
        var course=this.props.course;
        return(
            <Row>
                <Col xs={{span:16, offset:4}} md={{span:14, offset:5}}>
                    <Card type='' style={containerStyle} hoverable="true">
                        <Row>
                            <Col xs={{span:'24'}} md={{span:'6'}} id='column1'>
                                {React.createElement('img', 
                                    {src:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                                    width:'100%',
                                    height:'200px'})
                                }
                            </Col>
                            <Col xs={{span:'12'}} md={{span:'8', offset:1}} style={{marginTop:'3%'}} id='column2'>
                                {this.renderOptions(course)}
                            </Col>
                            <Col xs={{span:'12'}} md={{span:'8', offset:1}} style={insideRightContainerBorder} id='column3'>
                                {this.renderCourses(course)}
                            </Col>
                        </Row>
                        <Row justify='center'>
                            <Col xs={{span:'8'}} xs={{span:'8'}} md={{span:'8'}} lg={{span:'8'}}></Col>
                            <Col xs={{span:'8'}} md={{span:'8'}} lg={{span:'8', offset:'2'}} style={{marginTop:'3%'}}>
                                <Button>Fazer orçamento</Button>
                            </Col>
                            <Col xs={{span:'8'}} md={{span:'8'}} lg={{span:'6'}}></Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        )
    }
}