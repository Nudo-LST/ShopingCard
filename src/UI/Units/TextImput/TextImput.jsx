import React, { useRef } from "react";
import k from "./TextImput.module.css";

export default function TextImput(props) {
  let klabel = useRef("");

  return (
    <div className={`${k.wrapper}`}>
      <input type={props.type} style={props.css} placeholder=" " />
      <label ref={klabel}>
        {props.placeholder ? props.placeholder : "Label"}
      </label>
    </div>
  );
}
