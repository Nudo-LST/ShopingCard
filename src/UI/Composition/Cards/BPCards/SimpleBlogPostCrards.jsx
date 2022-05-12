import React from "react";
import "./SimpleBlogPostCrards.css";

export default function SimpleBlogPostCrard(props) {
  return (
    <div
      style={{
        backgroundColor: `grey`,
        padding: `20px`,
        maxWidth: `250px`,
        borderRadius: `5px`,
        display: `flex`,
        flexDirection: `column`,
        gap: `25px`,
        color: `white`
      }}
    >
      <div>
        <img
          alt=" "
          src="https://images.pexels.com/photos/10251995/pexels-photo-10251995.jpeg"
          style={{ width: `100%`, borderRadius: `inherit` }}
        />
      </div>
      <div style={{ color: `white` }}>
        <h1 style={{ fontWeight: `300`, margin: `4px 0px`, color: `white` }}>
          Title Of The Post
        </h1>
        <h3 style={{ margin: `4px 0px` }}>Description Of The Post</h3>
        <h3 style={{ margin: `4px 0px 20px` }}>
          Options like like or dislike, share etc
        </h3>
        Proin faucibus arcu quis ante. Cras id dui. Mauris turpis nunc, blandit
        et, volutpat molestie, porta ut, ligula. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Fusce vel dui.
      </div>
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noreferrer"
        style={{ fontSize: `0.9rem`, color: `blue` }}
      >
        Read more
      </a>
    </div>
  );
}
