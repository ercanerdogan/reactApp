import React, { Component } from 'react';
import { Table } from "reactstrap";

export default class ProductList extends Component {
    //it's not necessary in newest version of react
    // constructor(props){
    //     super(props);
    //     state:{}
    // }

    render() {
        return (
            <div>
                <h2>{this.props.info.title}-{this.props.currentCategory}</h2>

                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Prodcut Name</th>
                            <th>Quantity Per Unit</th>
                            <th>Unit Price</th>
                            <th>Units In Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product => (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.productName}</td>
                                <td>{product.quantityPerUnit}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.unitsInStock}</td>
                            </tr>
                        ))
                        }


                    </tbody>
                </Table>
            </div>
        )
    }
}
