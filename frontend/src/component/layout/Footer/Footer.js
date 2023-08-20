import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>
      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; @SureshGharal</p>
      </div>
      <div className="rightFooter">
        <a href="https://github.com/sureshgharal45" target="_blank">GitHub</a>
        <a href="https://www.youtube.com/@sureshgharal4479" target="_blank">Youtube</a>
        <a href="https://www.linkedin.com/in/suresh-gharal-5369021a7/" target="_blank">Linkedin</a>
      </div>
    </footer>
  );
};

export default Footer;
