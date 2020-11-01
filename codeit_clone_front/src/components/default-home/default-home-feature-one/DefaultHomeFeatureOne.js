import React from "react";
import featureImg from "../../../assets/image/defaultHome/feature3__img1.png";
import "./DefaultHomeFeatureOne.scss";

const DefaultHomeFeatureOne = () => {
  return (
    <>
      <div className="feature">
        <div className="feature__container">
          <img className="feature__image" src={featureImg} alt="특징 이미지" />
          <div className="feature__text--one">
            <div className="title-border--one">
              <p className="title">
                <b>다양한 기기</b>에서 코딩 실습 및 수강 기능
              </p>
            </div>
            <div className="description">
              <p>
                코드잇의 강의들은 모바일을 포함한 다양한 기기에서 수강이
                가능하며,
              </p>
              <p>
                덕분에 <b>언제 어디서든 재밌고 효과적으로 강의</b>에 몰입할 수
                있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultHomeFeatureOne;
