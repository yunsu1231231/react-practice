import React from 'react'

const Box = (props) => {
  console.log(props);
  return (
      <div className = "box">
        <h1>{props.title}</h1>
        <img className = "item-img" src= {props.item && props.item.img} />
        <h2>{props.result}</h2>
    </div>
  )
}

export default Box

// rafce: component 기본 셋팅 

// 내가 원하는것을 태그처럼 생성: Component

// null => false가 자동으로 return 
// useSelect은 내가 선택하기 전까지 null임 