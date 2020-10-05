import React from "react";
import blogImage from "../../assets/sns-blog.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <img className="footer-icon" src={blogImage} alt="blog-img"></img>
        </div>
      </footer>
    </>
  );
}

export default Footer;
