import React from "react";
import featureImg from "../../../assets/image/defaultHome/feature3__img1.png";

const DefaultHomeFeatureOne = () => {
  return (
    <>
      <div className="feature">
        <div className="feature__container">
          <div className="feature__text">
            <div className="title-border">
              <p className="title">
                <b>학습 데이터 분석</b>을 통해 독보적인 콘텐츠 퀄리티 확보
              </p>
            </div>
            <div className="description">
              <p>
                코드잇은 학생들의 <b>수강 데이터와 레슨별 만족도 등을 분석</b>
                하여,
              </p>
              <p>
                끊임없이 기존 콘텐츠를 발전시키며 차별적인 콘텐츠를 만들어
                나갑니다.
              </p>
            </div>
          </div>
          <img className="feature__image" src={featureImg} alt="특징 이미지" />
        </div>
      </div>
    </>
  );
};

export default DefaultHomeFeatureOne;
