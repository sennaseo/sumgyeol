// import img1 from "../assets/sumgyeol.svg";
import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import MyPage from "./MyPage";

export default function Header() {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <header className="header">
        <Link to="http://localhost:3000/">
          <h1>
            <img
              src={`${process.env.PUBLIC_URL}/assets/sumgyeol.svg`}
              alt=""
              className="logo"
            />
          </h1>
        </Link>
        <ul className="header-menu">
          <li>
            <Link to="/introduce">장인소개</Link>
          </li>
          <li>
            <Link to="/work">장인작품</Link>
          </li>
          <li>
            <Link to="/experience">체험하기</Link>
          </li>
        </ul>
        <div className="login-flex" onClick={() => setModal(true)}>
          <div>
            <button className="plain round">로그인</button>
          </div>
          <div className="person-icon">
            <img src={`${process.env.PUBLIC_URL}/assets/person.svg`} alt="" />
          </div>
        </div>
      </header>
      {modal && <MyPage setModal={setModal} />}
    </div>
  );
}
