import React, { Component } from 'react';
import {SelectionCard} from '../SelectionCard/SelectionCard.js';

export class BuyScreen extends Component{
    render(){
        return(
            <SelectionCard
                title={this.props.id}
                description={this.props.id}
            />
        )
    }
}