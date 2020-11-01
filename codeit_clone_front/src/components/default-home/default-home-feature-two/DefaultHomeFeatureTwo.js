import React from "react";
import featureImg from "../../../assets/image/defaultHome/feature3__img2.png";
import "./DefaultHomeFeatureTwo.scss";

// const mock = [
//   {
//     title: "학습 데이터 분석을 통해 독보적인 콘텐츠 퀄리티 확보",
//     description: `코드잇은 학생들의 수강 데이터와 레슨별 만족도 등을 분석하여,
//     끊임없이 기존 콘텐츠를 발전시키며 차별적인 콘텐츠를 만들어 나갑니다.`
//   },
//   {
//     title: "다양한 기기에서 코딩 실습 및 수강 기능",
//     description: `코드잇의 강의들은 모바일을 포함한 다양한 기기에서 수강이 가능하며,
//     덕분에 언제 어디서든 재밌고 효과적으로 강의에 몰입할 수 있습니다.`
//   }
// ];

const DefaultHomeFeatureTwo = () => {
  return (
    <>
      <div className="feature">
        <div className="feature__container">
          <div className="feature__text">
            <div className="title-border--two">
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

export default DefaultHomeFeatureTwo;
