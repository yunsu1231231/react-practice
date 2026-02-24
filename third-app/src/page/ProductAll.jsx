import React, { useState, useEffect } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = "http://localhost:5000/products";
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  
  console.log("1")

  productList.map((product) => {
    console.log(product.id)
  })

  return (
    <Container>
      <Row>
        {productList.map((product) => (
          <Col key={product.id} lg={3}>
            <ProductCard item={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;

// 상품 정보 -> 상품 API 
// json-server 패키지 다운받아서 사용

// npm = 노드 패키지 매니저
// https://www.npmjs.com/package/json-server

// json 파일: text 파일인데 object 형식