import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FirstStep_detail.css';
import firststep from './images/firststep.png';
import back from './images/back.png';

function FirstStep_detail() {
  const navigate = useNavigate();
  
  // 참가자 수를 상태로 관리합니다. 초기값은 0명입니다.
  const [participants, setParticipants] = useState(0);

  // 챌린지 제목과 날짜를 상태로 관리합니다.
  const [challengeDetails] = useState({
    title: "코슬로와 함께하는\n저속노화 첫걸음 챌린지",
    startDate: "2024.08.03",
    endDate: "2024.08.10"
  });

  // 참가자 수를 백엔드에서 가져옵니다.
  // useEffect(() => {
    // API 호출 예시 (현재는 상태 초기값으로 대체)
    // axios.get('/api/participants')
    //   .then(response => {
    //     setParticipants(response.data.participantsCount);
    //   })
    //   .catch(error => {
    //     console.log('참가자 수를 가져오는 중 오류 발생:', error);
    //   });
  // }, []);

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
    <div className="FirstStep-container">
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

        <div className="firststep-title">
          <span>{challengeDetails.title.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}<br />
            </React.Fragment>
          ))}</span>
        </div>
        <div className="firststep-term">
          <span>{challengeDetails.startDate} - {challengeDetails.endDate}</span>
        </div>
        <div className="friststep-contents-detail">
          <span>저속노화 식단이 아직 어색하고 어려운 입문자들은 주목!<br />코슬로와 함께 첫걸음 챌린지로 시작해봐요.</span>
        </div>
        <div className="firststep-attend-num">
          <span>지금까지 {participants}명이 참가했어요</span>
        </div>
        <button className="firststep-attend-button" onClick={handleAttendButtonClick}>챌린지 참가하기</button>
        <div className="firststep-img">
          <img src={firststep} alt="firststep_image" />
        </div>
      </div>
    </div>
  );
}

export default FirstStep_detail;
