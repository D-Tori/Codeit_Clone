import React from "react";
import blogImage from "../../assets/image/sns-blog.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__container__text">
            <span className="footer__text__contents-body">(주) 코드잇</span>
            <span className="footer__text__contents-tail">|</span>
          </div>
          <div className="footer__container__icons">
            <img className="footer-icon" src={blogImage} alt="blog-img"></img>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
