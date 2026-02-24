import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate()
  const showDetail = () => {
    navigate(`/product/${item.id}`)
  }
  return (
    <div className = "card" onClick = {showDetail}>
      <img src={item?.img} alt={item?.title} />
      <div>choice</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new && "신제품"}</div>
    </div>
  );
};

export default ProductCard;
// 1. 한 줄에 4개씩
// 2. 가운대에 위치
// 3. 반응형 웹사이트 => 부트스트랩 이용
// https://react-bootstrap.netlify.app/docs/getting-started/introduction // 아직 미설치