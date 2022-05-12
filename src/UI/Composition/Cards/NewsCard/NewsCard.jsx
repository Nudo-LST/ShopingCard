import React from "react";
import style from "./NewsCard.module.css";
import { FaRegComment, FaRegHeart, FaRegBookmark } from "react-icons/fa";

export default function NewsCard(props) {
  return (
    <div className={[style["card"]].join(" ")}>
      <div className={[style["wrapper"]].join(" ")}>
        <div className={[style["header"]].join(" ")}>
          <div className={[style[`date`]].join(" ")}>
            <span className={[style["day"]].join(" ")}>12</span>
            <span className={[style["month"]].join(" ")}>Aug</span>
            <span className={[style["year"]].join(" ")}>2016</span>
          </div>
          <ul className={[style["menu-content"]].join(" ")}>
            <li>
              <a href="https://www.google.com">
                <FaRegBookmark />
              </a>
            </li>
            <li>
              <a href="https://www.google.com">
                <span>18</span>
                <FaRegHeart />
              </a>
            </li>
            <li>
              <a href="https://www.google.com">
                <span>3</span>
                <FaRegComment style={{ fill: `white` }} />
              </a>
            </li>
          </ul>
        </div>
        <div className={[style["data"]].join(" ")}>
          <div className={[style["content"]].join(" ")}>
            <span className={[style["author"]].join(" ")}>Jane Doe</span>
            <h1 className={[style["title"]].join(" ")}>
              <a href="https://www.google.com">
                Stranger Things: The sound of the Upside Down
              </a>
            </h1>
            <p className={[style["text"]].join(" ")}>
              The antsy bingers of Netflix will eagerly anticipate the digital
              release of the Survive soundtrack, out today.
            </p>
            <a
              href="https://www.google.com"
              className={[style["button"]].join(" ")}
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
