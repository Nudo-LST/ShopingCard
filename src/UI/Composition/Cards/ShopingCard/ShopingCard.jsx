import React from "react";
import k from "./ShopingCard.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import btn from "UI/Units/Button/btn";

export default function ShopingCard(props) {
  return (
    <>
      <div className={[k["wrapper"]].join(" ")}>
        <div>
          <img
            alt=" "
            src="https://images.pexels.com/photos/7421851/pexels-photo-7421851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            style={{ width: `100%` }}
          />
        </div>
        <div style={{ color: `white` }}>
          <h3 style={{ fontWeight: `300`, margin: `4px 0px`, color: `white` }}>
            Title Of The Post
          </h3>
          <h1 style={{ color: "white" }}>$24.90</h1>
          <p style={{ color: "white" }}>
            Proin faucibus arcu quis ante. Cras id dui. Mauris turpis
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {count()}
            {btn({ text: "Add To Cart" })}
          </div>
        </div>
      </div>
    </>
  );
}
function count() {
  return (
    <div
      style={{
        display: "flex",
        width: "fit-content",
        overflow: "hidden",
        backgroundColor: "transparent",
        borderRadius: "5px",
        gap: "1px",
        margin: "10px 0px"
      }}
    >
      <div style={{ backgroundColor: "#dddddd", padding: "5px" }}>
        <FaMinus />
      </div>
      <div
        style={{
          backgroundColor: "#dddddd",
          padding: "5px 10px",
          fontWeight: "bold"
        }}
      >
        1
      </div>
      <div style={{ backgroundColor: "#dddddd", padding: "5px" }}>
        <FaPlus />
      </div>
    </div>
  );
}
