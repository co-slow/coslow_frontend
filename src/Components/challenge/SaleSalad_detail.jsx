import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SaleSalad_detail.css';
import salesalad from './images/salesalad.png';
import back from './images/back.png';

function SaleSalad_detail() {
  const navigate = useNavigate();
  
  // 참가자 수를 상태로 관리합니다. 초기값은 0명입니다.
  const [participants, setParticipants] = useState(0);

  // 챌린지 제목과 날짜를 상태로 관리합니다.
  const [challengeDetails] = useState({
    title: "‘샐러드판다’\n샐러드 16종 한달 챌린지",
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
    <div className="SaleSalad-container">
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

        <div className="SaleSalad-title">
        <span>{challengeDetails.title.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}<br />
            </React.Fragment>
          ))}</span>          
          <div className="SaleSalad-term">
            <span>{challengeDetails.startDate} - {challengeDetails.endDate}</span>
          </div>
        </div>
        <div className="SaleSalad-contents-detail">
          <span>샐러드판다와 함께하는 샐러드 16종 한달 챌린지에 참여해 보세요! 
            <br/>한 달 동안 다양한 샐러드로 건강한 식단을 즐기며 영양 균형을 맞춰보세요. 
            <br/>16가지 다양한 샐러드를 경험하고, 쿠폰팩까지 받아보세요!</span>
        </div>
        <div className="SaleSalad-attend-num">
          <span>지금까지 {participants}명이 참가했어요</span>
          <button className="SaleSalad-attend-button" onClick={handleAttendButtonClick}>챌린지 참가하기</button>
        </div>
        <div className="SaleSalad-img">
          <img src={salesalad} alt="salesalad_image" />
        </div>
      </div>
    </div>
  );
}

export default SaleSalad_detail;
