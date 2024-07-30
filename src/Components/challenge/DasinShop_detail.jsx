import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DasinShop_detail.css';
import dasinshop from './images/dasinshop.png';
import back from './images/back.png';

function DasinShop_detail() {
  const navigate = useNavigate();
  
  // 참가자 수를 상태로 관리합니다. 초기값은 0명입니다.
  const [participants, setParticipants] = useState(0);

  // 챌린지 제목과 날짜를 상태로 관리합니다.
  const [challengeDetails] = useState({
    title: "‘다신샵’\n 닭가슴살 한달 챌린지",
    startDate: "2024.08.01",
    endDate: "2024.08.31"
  });


  // '챌린지' 버튼 클릭 시 해당 경로로 이동합니다.
  const handleChallengeMainClick = () => {
    navigate('/coslowchallenge_main');
  };

  // '로그아웃' 버튼 클릭 시 홈 화면으로 이동합니다.
  const handleCoslowBannerClick = () => {
    navigate('/');
  };

  // '나의 기록' 버튼 클릭 시 기록 작성 페이지로 이동합니다.
  const handleDietRecordWriteClick = () => {
    navigate('/DietRecord_write');
  };

  // '챌린지 참가하기' 버튼 클릭 시 참가자 수를 1명 증가시킵니다.
  const handleAttendButtonClick = () => {
    setParticipants(prevCount => prevCount + 1);
  };

  // '뒤로 가기' 버튼 클릭 시 이전 페이지로 이동합니다.
  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className="DasinShop-container">
      <div className="Coslow-main">
        <div className="Coslow-header">
          <div className="Coslow-header-layout">
            <div className="header-left">
              <div className="header-logo">CO-SLOW</div>
            </div>
            <div className="header-right">
              <div className="header-challenge" onClick={handleChallengeMainClick}>챌린지</div>
              <div className="header-record" onClick={handleDietRecordWriteClick}>나의기록</div>
              <div className="header-mypage">마이페이지</div>
              <div className="header-logout" onClick={handleCoslowBannerClick}>로그아웃</div>
            </div>
          </div>
        </div>

        <div className="back-img" onClick={handleBackButtonClick}>
          <img src={back} alt="back_image" />
        </div>

        <div className="DasinShop-title">
        <span>{challengeDetails.title.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}<br />
            </React.Fragment>
          ))}</span>          
          <div className="DasinShop-term">
            <span>{challengeDetails.startDate} - {challengeDetails.endDate}</span>
          </div>
        </div>
        <div className="DasinShop-contents-detail">
          <span>다신샵과 함께하는 닭가슴살 한달 챌린지에 참여해 보세요! 
            <br/>고단백, 저지방의 닭가슴살로 건강한 체중 관리와 다이어트 
            <br/>목표 달성하고 다신샵에서 식단 지원금 1만원을 받아보세요!</span>
        </div>
        <div className="DasinShop-attend-num">
          <span>지금까지 {participants}명이 참가했어요</span>
          <button className="DasinShop-attend-button" onClick={handleAttendButtonClick}>챌린지 참가하기</button>
        </div>
        <div className="DasinShop-img">
          <img src={dasinshop} alt="dasinshop_image" />
        </div>
      </div>
    </div>
  );
}

export default DasinShop_detail;
