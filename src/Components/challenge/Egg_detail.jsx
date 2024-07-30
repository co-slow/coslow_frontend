import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Egg_detail.css';
import egg from './images/egg.png';
import back from './images/back.png';

function Egg_detail() {
  const navigate = useNavigate();
  
  // 참가자 수를 상태로 관리합니다. 초기값은 0명입니다.
  const [participants, setParticipants] = useState(0);

  // 챌린지 제목과 날짜를 상태로 관리합니다.
  const [challengeDetails] = useState({
    title: "계란으로 하루 한끼 요리하기",
    startDate: "2024.08.01",
    endDate: "2024.08.07"
  });

  // 참가자 수를 백엔드에서 가져옵니다.
  // useEffect(() => {
  //   API 호출 예시 (현재는 상태 초기값으로 대체)
  //   axios.get('/api/participants')
  //     .then(response => {
  //       setParticipants(response.data.participantsCount);
  //     })
  //     .catch(error => {
  //       console.log('참가자 수를 가져오는 중 오류 발생:', error);
  //     });
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
    <div className="Egg-container">
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

        <div className="Egg-title">
          <span>{challengeDetails.title}</span>
          <div className="Egg-term">
            <span>{challengeDetails.startDate} - {challengeDetails.endDate}</span>
          </div>
        </div>
        <div className="Egg-contents-detail">
          <span>간단하면서도 영양 가득한 계란 요리로 건강을 챙겨봐요!
          <br/>다른 유저들의 다양한 계란 식단을 구경하며 레시피와 팁을 서로 공유해 보세요.
          <br/>함께 더욱 건강한 식습관을 만들어가는 재미를 느껴보세요!</span>
        </div>
        <div className="Egg-attend-num">
          <span>지금까지 {participants}명이 참가했어요</span>
          <button className="Egg-attend-button" onClick={handleAttendButtonClick}>챌린지 참가하기</button>
        </div>
        <div className="egg-img">
          <img src={egg} alt="egg_image" />
        </div>
      </div>
    </div>
  );
}

export default Egg_detail;
