import React from "react";

export default function MenuButton(props) {
  return (
    <div className={props.cn}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width="40"
        height="40"
        viewBox="0 0 225.000000 225.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path d="M382 1668 c-17 -17 -15 -42 6 -61 17 -16 82 -17 731 -17 472 0 719 3 732 10 21 12 25 50 7 68 -17 17 -1459 17 -1476 0z" />
          <path d="M388 1149 c-24 -13 -23 -56 1 -69 27 -14 1435 -14 1462 0 11 6 19 21 19 35 0 14 -8 29 -19 35 -27 14 -1439 13 -1463 -1z" />
          <path d="M387 622 c-20 -22 -22 -43 -5 -60 17 -17 1459 -17 1476 0 18 18 14 56 -7 68 -13 7 -261 10 -734 10 -679 0 -715 -1 -730 -18z" />
        </g>
      </svg>
    </div>
  );
}
