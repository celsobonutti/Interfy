import React, { Component } from 'react'
import { Query } from "react-apollo";
import {GET_SCHOOL_INFO} from '../../Configuration/queries'
import {BuyScreenContent} from './BuyScreenContent/BuyScreenContent';

class BuyScreen extends Component {
    state = {
        _id: "5ba6d210e2475c0013b4b5cf"
    }
    render () {
        return (
            <Query query={GET_SCHOOL_INFO} variables={this.state}>
                {({loading, error, data}) =>{
                    if(loading) return "Loading";
                    if (error) return `Error! ${error.message}`;

                    return (
                        <BuyScreenContent data={data}></BuyScreenContent>
                    )
                }

                }
            </Query>
        )
    }
}

export default BuyScreen