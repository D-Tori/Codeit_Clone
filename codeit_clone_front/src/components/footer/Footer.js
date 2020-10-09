import React from "react";
import blogImage from "../../assets/image/icons/sns-blog.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__texts">
            <div className="footer__texts__row">
              <span className="text-body">(주) 코드잇</span>
              <span className="text-tail">|</span>
              <span className="text-body">Kakao ID코드잇</span>
              <span className="text-tail">|</span>
              <span className="text-body">개인정보보호책임자강영훈</span>
              <span className="text-tail">|</span>
              <span className="text-body">사업자 번호313-86-00797</span>
            </div>
          </div>
          <div className="footer__icons">
            <ul className="footer__icons__list--style-none">
              <li className="footer__icons__item">
                <a
                  className="icon-anchor"
                  href="https://www.youtube.com/channel/UCCM79CPm2WbBYTRaiNEExbg"
                >
                  <img className="icon" src={blogImage} alt="blogImage"></img>
                </a>
              </li>
              <li className="footer__icons__item">
                <a
                  className="icon-anchor"
                  href="https://www.youtube.com/channel/UCCM79CPm2WbBYTRaiNEExbg"
                >
                  <img className="icon" src={blogImage} alt="blogImage"></img>
                </a>
              </li>
              <li className="footer__icons__item">
                <a
                  className="icon-anchor"
                  href="https://www.youtube.com/channel/UCCM79CPm2WbBYTRaiNEExbg"
                >
                  <img className="icon" src={blogImage} alt="blogImage"></img>
                </a>
              </li>
              <li className="footer__icons__item">
                <a
                  className="icon-anchor"
                  href="https://www.youtube.com/channel/UCCM79CPm2WbBYTRaiNEExbg"
                >
                  <img className="icon" src={blogImage} alt="blogImage"></img>
                </a>
              </li>
              <li className="footer__icons__item">
                <a
                  className="icon-anchor"
                  href="https://www.youtube.com/channel/UCCM79CPm2WbBYTRaiNEExbg"
                >
                  <img className="icon" src={blogImage} alt="blogImage"></img>
                </a>
              </li>
              <li className="footer_icons__item">
                <a
                  className="icon-anchor"
                  href="https://www.youtube.com/channel/UCCM79CPm2WbBYTRaiNEExbg"
                >
                  <img className="icon" src={blogImage} alt="blogImage"></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
