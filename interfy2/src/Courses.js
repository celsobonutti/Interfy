import React, {Component} from "react";
import {InterfyCard} from './InterfyCard.js'

var testcourse = {
    
    course: [
        {
            title: 'Inglês geral',
            price:'999,99'
        },
        {
            title: 'Inglês geral',
            price:'999,99'
        },
        {
            title: 'Inglês geral',
            price:'999,99'
        },
        {
            title: 'Inglês geral',
            price:'999,99'
        },
    ],
    country: {
        name: 'Malta',
        city: 'St Julians',
        
    },
    optionals: [{
            icon: 'bus',
            description: 'Transfer do aeroporto'
        },
        {
            icon: 'pool',
            description: 'Piscina e área de convivência'
        },
        {
            icon: 'pool',
            description: 'Internet'
        },
        {
            icon: 'pool',
            description: 'Piscina e área de convivência'
        },
        {
            icon: 'pool',
            description: 'Piscina e área de convivência'
        },
        {
            icon: 'pool',
            description: 'Piscina e área de convivência'
        },
    ],
    photos: ['endereco1', 'endereco2', 'endereco3']
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

export class Courses extends Component{
    
    renderCards(theObject){
        return(
            <div>
                {
                    if(this.props.selectedCountry == theObject.country.name){
                        return(
                            <InterfyCard    
                                course={testcourse}
                            />
                        )
                    }
                }
                
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.renderCards(testcourse)}
            </div>
        )
    }
}