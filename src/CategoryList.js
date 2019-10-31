import React, { Component } from 'react'

import { ListGroup, ListGroupItem } from 'reactstrap';


export default class CategoryList extends Component {
    //it's not necessary in newest version of react
    // constructor(props){
    //     super(props)

    // }

    state = {
        categories: [
            { categoryID: 1, categoryName: "Beverages" },
            { categoryID: 2, categoryName: "Condiments" }
        ],
        currentCategory: ""

    };

    getCurrentCategory = (category) => {
        this.setState({ currentCategory: category.categoryName })
    };

    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <ListGroup>
                    {this.state.categories.map(category => (
                        <ListGroupItem
                            onClick={() => this.getCurrentCategory(category)}
                            key={category.categoryID}>
                            {category.categoryName}
                        </ListGroupItem>
                    ))}

                </ListGroup>
                <h4>{this.state.currentCategory}</h4>
            </div>
        )
    }
}
