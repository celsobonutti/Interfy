import React, {Component, Fragment} from "react";
import {InterfyCard} from '../InterfyCard/InterfyCard.js'

var testcourse = [
    {
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
            city: 'St Julians'
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
        photos: ['endereco1', 'endereco2', 'endereco3'],
        _id:'1'
    },
    {
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
            name: 'Canada',
            city: 'St Julians'
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
        photos: ['endereco1', 'endereco2', 'endereco3'],
        _id:'2'
    },
    {
        course: [
            {
                title: 'Inglês Teste',
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
            city: 'St Julians'
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
        photos: ['endereco1', 'endereco2', 'endereco3'],
        _id:'3'
    },
]

export class Schools extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCountry:'',
        };
    }

    componentWillUnmount(){
        alert(this.props.getGlobalState)
    }

    render() {
        const renderCards = testcourse.map((curso) => {
                if (this.props.selectedCountry === curso.country.name) {
                    return (<InterfyCard 
                            key={curso._id}
                            course={curso} 
                            getKey={() => this.props.getGlobalState(curso._id)}
                    />)
                }
            })
            
        return (
            <React.Fragment>
                {renderCards}
            </React.Fragment>
        )
    }
}
