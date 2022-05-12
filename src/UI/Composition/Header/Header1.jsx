import "./style.css";
import React from "react";
import MenuButton from "../MenuButton.jsx";

export default function Header() {
  return (
    <header>
      <div>
        <h1>Rello</h1>
      </div>
      <HeaderOptions cn="headerOptions" />
      <MenuButton cn="menubutton" />
    </header>
  );
}

export { Header };
function HeaderOptions(props) {
  return (
    <div className={props.cn}>
      <div>
        <ul>
          <li>Product</li>
          <li>Price</li>
          <li>Latest</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="account-action">
        <div>
          <button className="btn less-attension-btn">Log In</button>
          <button className="btn all-attension-btn">Free Trial</button>
        </div>
      </div>
    </div>
  );
}
