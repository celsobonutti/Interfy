import React, { Component } from 'react';
import { Row, Col } from "antd";
import {SelectionButton} from '../../../Components/SelectionButton/SelectionButton';
import style from './BuyScreen.module.scss'
import DateSelector from '../../../Components/DateSelector/DateSelector';

export class BuyScreenContent extends Component{
    constructor(props){
        super(props);
        this.state={
            course: this.props.data.getSchoolInfo.courses[0],
            intensity: this.props.data.getSchoolInfo.courses[0].intensities[0],
            shift: this.props.data.getSchoolInfo.courses[0].intensities[0].shifts[0]
        }
    }

    changeCourseHandler = (course) =>{
        let tempState = this.state;
        tempState.course = course;
        tempState.intensity = course.intensities[0];
        tempState.shift = course.intensities[0].shifts[0];
        this.setState(tempState);
    }

    changeIntensityHandler = (intensity) =>{
        let tempState = this.state;
        tempState.intensity = intensity;
        tempState.shift = intensity.shifts[0];
        this.setState(tempState);
    }

    changeShiftHandler = (shift) =>{
        let tempState = this.state;
        tempState.shift = shift;
        this.setState(shift);
    }

    render(){
        const courseSelector = this.props.data.getSchoolInfo.courses.map(course=>{
            return(
                <Col sm={12} md={6} key={course._id}>
                    <SelectionButton
                        active={course==this.state.course}
                        title={course.title} 
                        firstLine="placeholder" 
                        secondLine="placeholder"
                        click={() => this.changeCourseHandler(course)}>
                    </SelectionButton>
                </Col>
            )
        })

        const intensitySelector = this.state.course.intensities.map(intensity=>{
            return(
                <Col sm={12} md={6} key={intensity._id}>
                    <SelectionButton 
                    active={intensity==this.state.intensity}
                    title={intensity.title} 
                    firstLine="placeholder" 
                    secondLine="placeholder"
                    click={() => this.changeIntensityHandler(intensity)}>
                    </SelectionButton>
                </Col>
            )
        })

        const shiftSelector = this.state.intensity.shifts.map(shift=>{
            return(
                <Col sm={12} md={6} key={shift._id}>
                    <SelectionButton 
                    active={shift==this.state.shift}
                    title={shift.title} 
                    firstLine="placeholder" 
                    secondLine="placeholder"
                    click={() => this.changeShiftHandler(shift)}>
                    </SelectionButton>
                </Col>
            )
        })


        return(
            <Row className={style.page} gutter={16}>
                <Col sm={24} md={18}>
                    <div className={style.block}>
                        <h1>1. Molde sua jornada</h1>
                        <p>Nessa etapa, vamos configurar o intercâmbio, para que ele fique do seu jeito. Escolha a duração, intensidade e tipo do seu curso, entre outros detalhes. Qualquer dúvida é só chamar! ;)</p>

                        <div className={style.selectors}>
                            <h2>Tipo de curso:</h2>
                            <Row gutter={8}>
                                {courseSelector}
                            </Row>
                            <h2>Intensidade:</h2>
                            <Row gutter={8}>
                                {intensitySelector}
                            </Row>
                            <h2>Turno:</h2>
                            <Row gutter={8}>
                                {shiftSelector}
                            </Row>
                            <h2>Duração:</h2>
                            <Row gutter={8}>
                                <DateSelector duration={this.state.shift.duration}></DateSelector>
                            </Row>
                        </div>
                    </div>
                </Col> 
                <Col sm={0} md={6}>
                    <div className={style.block}>
                        <p></p>
                    </div>
                </Col>
            </Row>
        )
    }
}