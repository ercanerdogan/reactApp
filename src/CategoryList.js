import React, { Component } from 'react'

import { ListGroup, ListGroupItem } from 'reactstrap';


export default class CategoryList extends Component {
    //it's not necessary in newest version of react
    // constructor(props){
    //     super(props)

    // }

    // state = {
    //     categories: [
    //         { categoryID: 1, categoryName: "Beverages" },
    //         { categoryID: 2, categoryName: "Condiments" }
    //     ]

    // };

    componentDidMount(){
        this.getCategories();
    }

    state = {
        categories: []

    };

    getCategories=()=>{
        fetch("http://localhost:3000/categories")
        .then(response=>response.json())
        .then(data=>this.setState({categories:data}));
    }

  

    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <ListGroup>
                    {this.state.categories.map(category => (
                        <ListGroupItem
                            onClick={() => this.props.getCurrentCategory(category)}
                            key={category.id}>
                            {category.categoryName}
                        </ListGroupItem>
                    ))}

                </ListGroup>
                {/* <h4>{this.props.currentCategory}</h4> */}
            </div>
        )
    }
}
