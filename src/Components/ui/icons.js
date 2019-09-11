import React from "react";
import { Link } from "react-router-dom";

import Logo from "./../../Resources/images/logos/manchester_city_logo.png";

export const CityLogo = props => {
  const template = (
    <div
      className="img_cover"
      style={{
        height: props.height,
        width: props.width,
        background: `url(${Logo}) no-repeat`
      }}
    />
  );

  if (props.link) {
    return (
      <div>
        <Link to={props.linkTo} className="link_logo">
          {template}
        </Link>
      </div>
    );
  } else {
    return template;
  }
};
