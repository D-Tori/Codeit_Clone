import React from "react";
import Footer from "../footer/Footer";
import "./DefaultHomeFooter.scss"

const DefaultHomeFooter = () => {
  return (
    <>
      <div className="defaultHome__footer">
       <div className="defaultHome__content">
         <h2 className="defaultHome__text">지금, 코드잇과 시작해보세요.</h2>
         <button className="defaultHome__button"><span>멤버쉽 더 알아보기</span></button>
         
       </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default DefaultHomeFooter;