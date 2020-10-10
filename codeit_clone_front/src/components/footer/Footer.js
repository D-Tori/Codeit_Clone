import React from "react";
import codeitImage from "../../assets/image/icons/sns-blog.png";
import instaImage from "../../assets/image/icons/sns-insta.png"
import facebookImage from "../../assets/image/icons/sns-facebook.png";
import kakaoImage from "../../assets/image/icons/sns-kakao.png";
import naverImage from "../../assets/image/icons/sns-naver.png";
import youtubeImage from "../../assets/image/icons/sns-youtube.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__texts">
            <div className="footer__texts__row">
              <span className="text-header">(주) 코드잇</span>
              <span className="text-body">|</span>
              <span className="text-header">Kakao ID</span>
              <span className="text-body">코드잇 |</span>
              <span className="text-header">개인정보보호책임자</span>
              <span className="text-body">강영훈 |</span>
              <span className="text-header">사업자 번호</span>
              <span className="text-body">313-86-00797</span>
            </div>
            <div className="footer__texts__row">
              <span className="text-header">통신판매업제</span>
              <span className="text-body">2019-서울중구-1034 호</span>
            </div>
            <div className="footer__texts__row">
              <span className="text-header">주소</span>
              <span className="text-body">
                서울특별시 중구 삼일대로 343 을지로 wework 16층 123호 코드잇
              </span>
            </div>
            <div className="footer__texts__row">
              <a className="anchor" href="/">
                <span className="text-header--terms">사용자 이용 약관</span>
              </a>
              <span className="text-body">|</span>
              <a href="/">
                <span className="text-header--terms">개인정보 취급방침</span>
              </a>
              <span className="text-body">|</span>
              <a href="/">
                <span className="text-header--terms">자주 묻는 질문</span>
              </a>
              <span className="text-body">|</span>
              <a href="/">
                <span className="text-header--terms">기업 교육 소개</span>
              </a>
            </div>
          </div>
          <div className="footer__icons">
            
              
                <a
                  className="footer__icons__item"
                  href="https://www.youtube.com/channel/UCCM79CPm2WbBYTRaiNEExbg"
                >
                  <img className="icon" src={youtubeImage} alt="youtubeImage"></img>
                </a>
              
              
                <a
                  className="footer__icons__item"
                  href="https://www.instagram.com/codeit_official/"
                >
                  <img className="icon" src={instaImage} alt="instaImage"></img>
                </a>
              
              
                <a
                  className="footer__icons__item"
                  href="https://www.facebook.com/codeit.kr/"
                >
                  <img className="icon" src={facebookImage} alt="facebookImage"></img>
                </a>
              
              
                <a
                  className="footer__icons__item"
                  href="https://pf.kakao.com/_HxcRDM"
                >
                  <img className="icon" src={kakaoImage} alt="kakaoImage"></img>
                </a>
              
              
                <a
                  className="footer__icons__item"
                  href="https://blog.naver.com/codeitofficial"
                >
                  <img className="icon" src={naverImage} alt="naverImage"></img>
                </a>
              
              
                <a
                  className="footer__icons__item"
                  href="https://www.codeit.kr/"
                >
                  <img className="icon" src={codeitImage} alt="codeitImage"></img>
                </a>
              
            </div>
          </div>
        
      </footer>
    </>
  );
};

export default Footer;
