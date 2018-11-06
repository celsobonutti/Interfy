import React, {PureComponent} from "react";
import {Link} from 'react-router-dom';
import style from "./CountryCard.module.css"

export class CountryCard extends PureComponent{
    render(){
        return(
            <Link to={`/escolas?country=${this.props.acronym}`}>
            <div className={style.card} >
                <img src={this.props.image} alt={this.props.title}></img>
                <div className={style.text}>
                    <p>{this.props.title}</p>
                </div>
            </div>
            </Link>
        )
    }
}