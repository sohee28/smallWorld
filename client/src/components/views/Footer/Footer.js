import React from "react";
import { Icon } from "antd";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <Icon className="FooterIcon" type="github" />
      <Icon className="FooterIcon" type="facebook" />
      <Icon className="FooterIcon" type="instagram" />
    </div>
  );
}

export default Footer;
