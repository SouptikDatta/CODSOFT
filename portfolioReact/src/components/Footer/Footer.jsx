import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
          <Insta color="Black" size={"3rem"} />
          <Facebook color="Black" size={"3rem"} />
          <Gitub color="Black" size={"3rem"} />
        </div>
        <div>
          Gmail : souptik13@gmail.com<br /><br />
          Copyright 2023 © Souptik Datta. 
        </div>
      </div>
    </div>
  );
};

export default Footer;