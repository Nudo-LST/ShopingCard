import "./style.css";
import React from "react";
let gt = {
  backgroundImage: `linear-gradient(to right,#23966c, #faaa54, #e23b4a, #db0768, #360670)`
};
export default function GradientText(props) {
  return (
    <span className="text-gradient" style={props.gt ? props.gt : gt}>
      {props.space ? " " + props.text + " " : props.text}
    </span>
  );
}
