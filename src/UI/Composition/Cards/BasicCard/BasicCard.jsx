import React from "react";
import "./BasicCard.css";

export default function BasicCard(props) {
  return (
    <div className="clash-card barbarian">
      <div className="clash-card__image clash-card__image--barbarian">
        <img
          alt="rose"
          src="https://images.pexels.com/photos/11431628/pexels-photo-11431628.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />
      </div>
      <div className="clash-card__level clash-card__level--barbarian card-description">
        Level 4
      </div>
      <div className="clash-card__unit-name card-description">
        The Barbarian
      </div>
      <div className="clash-card__unit-description">
        The Barbarian is a kilt-clad Scottish warrior with an angry,
        battle-ready expression, hungry for destruction. He has Killer yellow
        horseshoe mustache.
      </div>
      <a href="https://www.google.com">Read More</a>
    </div>
  );
}
