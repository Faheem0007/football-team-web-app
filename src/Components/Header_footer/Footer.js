import React from "react";
import { CityLogo } from "../ui/icons";

const Footer = () => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <CityLogo link={true} linkTo="/" width="70px" height="70px" />
      </div>
      <div className="footer_discl">
        Reserved By <strong>EwigLIFE</strong> 2019
      </div>
    </footer>
  );
};

export default Footer;
