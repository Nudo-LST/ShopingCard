import React from "react";
import k from "./btn.module.css";

export default function btn(props) {
  return (
    <button className={`${k.btn}`}>{props.text ? props.text : "button"}</button>
  );
}
