import React from 'react';
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from './ProductList';
import { Container, Row, Col} from "reactstrap"

function App() {

  let titleCategory = "Category List"
  let titleProduct = "Product List"

  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList title ={titleCategory}/>
          </Col>
          <Col xs="9">
            <ProductList title ={titleProduct} />

           
          </Col>



        </Row>
      </Container>

    </div>
  );
}

export default App;
