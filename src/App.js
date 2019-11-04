import React, { Component } from 'react';
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from './ProductList';
import { Container, Row, Col } from "reactstrap";


export default class App extends Component {

  state = { currentCategory: "" }

  getCurrentCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  render() {

    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List" };

    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} getCurrentCategory={this.getCurrentCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList currentCategory={this.state.currentCategory} info={productInfo} />

            </Col>



          </Row>
        </Container>

      </div>
    );
  }

}
