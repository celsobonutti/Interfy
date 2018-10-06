import React, { Component } from "react";
import {Collapse, Radio, Input, Checkbox} from 'antd';
import style from "./Filter.module.css"
import {GET_FILTERS} from "../../Configuration/queries"

const Panel = Collapse.Panel;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

class Filter extends Component {
    state = { 
        selectedCountry: 'MA',
        selectedLanguages: []
    }
    
    onCountryChange = (e) =>{
        this.setState({
            selectedCountry: e.target.value
        })
    }

    onLanguageChange = (e) =>{
        this.setState({
            selectedLanguages: e
        })
    }

    render() { 
        const optionStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
            marginLeft: '8px'
        };


        const countryFilter = (
            <RadioGroup onChange={this.onCountryChange} value={this.state.selectedCountry}>
                {this.props.countries.map((country)=>{
                    return <Radio style={optionStyle} value={country.acronym}>{country.name}</Radio>
                })}
            </RadioGroup>
        )

        const languageFilter = (
            <CheckboxGroup value={this.state.selectedLanguages} onChange={this.onLanguageChange}>
                {this.props.languages.map((language)=>{
                    return <Checkbox style={optionStyle} value={language}>{language}</Checkbox> 
                })}
            </CheckboxGroup>
        )


        return (
            <div className={style.filter}>
                <p>Filtros</p>
                <Collapse activeKey={['1', '2']} bordered={false}>
                    <Panel header="País" key="1">
                        {countryFilter}
                    </Panel>
                    <Panel header="Idioma" key="2">
                        {languageFilter}
                    </Panel>
                </Collapse> 
            </div>
          );
    }
}
 
export default Filter;