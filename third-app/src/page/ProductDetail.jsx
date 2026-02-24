import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  const getProductDetail = async () => {
    try {
      const url = `http://localhost:5000/products/${id}`
      const response = await fetch(url)
      const data = await response.json()
      setProduct(data)
    } catch (error) {
      console.error("상품 불러오기 실패:", error)
    }
  }

  useEffect(() => {
    getProductDetail()
  }, [id])  // id가 바뀌면 다시 호출

  // 로딩 처리
  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <Row>
        <Col md={6} className="product-img">
          <img
            src={product.img}
            alt={product.title}
            style={{ width: "100%" }}
          />
        </Col>

        <Col md={6}>
          <h3>{product.title}</h3>
          <p>{product.price}원</p>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail

// <img src = {product?.img}/> product가 있으면 img
