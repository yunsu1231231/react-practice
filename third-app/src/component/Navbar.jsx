import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 아이콘 이름이 아니라 스타일 기준으로 패키지가 나뉜다.
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const menuList = ["여성", "Divided", "남성", "Sale"];
  
  const navigate = useNavigate()

  const goToLogin = () => {
    navigate("/login");
  }

  return (
    <div>
      <div>
        <div className="login-button" onClick = {goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>

      <div className="nav-section">
        <img
          width={100}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjyfU15ZDEgbY7X3-NMVvlvT9yzO8g0QSM_g&s"
          alt="logo"
        />
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>

        <div>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="검색" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// https://fontawesome.com/
// https://docs.fontawesome.com/web/use-with/react/
// https://fontawesome.com/icons/user?utm_source=chatgpt.com&s=solid