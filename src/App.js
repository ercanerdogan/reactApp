import React from 'react';
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from './ProductList';
import { Container, Row, Col} from "reactstrap"

function App() {

  let categoryInfo = {title:"Category List"}
  let productInfo  = {title:"Product List"}

  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info ={categoryInfo}/>
          </Col>
          <Col xs="9">
            <ProductList info ={productInfo} />

           
          </Col>



        </Row>
      </Container>

    </div>
  );
}

export default App;
