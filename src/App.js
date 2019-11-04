import React, { Component } from 'react';
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from './ProductList';
import { Container, Row, Col } from "reactstrap";


export default class App extends Component {

  state = { 
    currentCategory: "", 
    products:[] 
  }

  componentDidMount(){
    this.getProducts();
  }

  getCurrentCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id)
  };


  getProducts = categoryId => {
    let url="http://localhost:3000/products"
    if(categoryId){
      url+="?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }


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
              <CategoryList
                currentCategory={this.state.currentCategory} 
                getCurrentCategory={this.getCurrentCategory} 
                info={categoryInfo} 
              />
            </Col>
            <Col xs="9">
              <ProductList
                products={this.state.products} 
                currentCategory={this.state.currentCategory} 
                info={productInfo} 
              />

            </Col>



          </Row>
        </Container>

      </div>
    );
  }

}
