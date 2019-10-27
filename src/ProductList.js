import React, { Component } from 'react'

export default class ProductList extends Component {
    //it's not necessary in newest version of react
    // constructor(props){
    //     super(props);
    //     state:{}
    // }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2> 
            </div>
        )
    }
}
