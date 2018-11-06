import React, { Component } from "react";
import { Select } from 'antd';
import { Link } from "react-router-dom";
import style from "./Filter.module.scss"
import {GET_FILTERS} from "../../Configuration/queries"
import {filters} from "../../Placeholder/placeholder"; 

const Option = Select.Option;

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.selected;
      }

    selected = {

    }

    changeHandler = (value, selector) =>{
        this.selected[selector] = value;
        this.setState(this.selected);
    }

    stringBuilder = () =>  {
        let args = "/escolas?";
        Object.entries(this.state).forEach(([key, value], index) => {
            if(index !== 0)
                args = args.concat("&")
            if(Array.isArray(value)){
                value.forEach((element, index) => {
                    if(index !== 0)
                    args = args.concat("&")
                    args = args.concat(`${key}=${element}`);
                })
            }
            else
                args = args.concat(`${key}=${value}`);
        });
        return args;
    }

    render() {
        
        const filterBuilder = filters.map(filter=>(
            <div className={style.dropdownFilter}>
                <label>{filter.label}</label>
                <Select mode={filter.mode} key={filter.selector} value={this.state[filter.selector]} onChange={(value)=> this.changeHandler(value, filter.selector)} className={style.dropdownSelector}>
                    {filter.options.map((option)=>{
                        return <Option key={option.value} className={style.dropdownOption} value={option.value}>{option.name}</Option>
                    })}
                </Select>
            </div>
        ))

        return (
            <div className={style.filter}>
                <p>Filtros</p>
                {filterBuilder}
                <Link to={this.stringBuilder()}>Buscar</Link>
            </div>
          );
    }
}
 
export default Filter;