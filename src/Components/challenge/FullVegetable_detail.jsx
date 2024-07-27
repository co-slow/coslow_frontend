import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FullVegetable_detail.css';
import fullvegetable from './images/fullvegetable.png';
import back from './images/back.png';

function FullVegetable_detail() {
  const navigate = useNavigate();
  
  // 참가자 수를 상태로 관리합니다. 초기값은 0명입니다.

  // 챌린지 제목과 날짜를 상태로 관리합니다.
  const [challengeDetails] = useState({
    title: "채소 듬뿍 일주일 챌린지",
    startDate: "2024.08.01",
    endDate: "2024.08.07"
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


  // '뒤로 가기' 버튼 클릭 시 이전 페이지로 이동합니다.
  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className="fullvegetable-container">
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

        <div className="fullvegetable-title">
          <span>{challengeDetails.title}</span>
          <div className="fullvegetable-term">
            <span>{challengeDetails.startDate} - {challengeDetails.endDate}</span>
          </div>
        </div>
        <div className="fullvegetable-contents-detail">
          <span>신선하고 다양한 채소로 다채로운 식단을 구성해보세요!
          <br/>다른 유저들의 식단도 구경하면서 레시피와 팁을 공유해 보세요.
          <br/>함께 건강한 식습관을 만들어가는 즐거움을 느껴보세요!</span>
        </div>
        <div className="fullvegetable-attend-num">
          <span>이미 종료된 챌린지예요!</span>
          <button className="fullvegetable-attend-button">챌린지 둘러보기</button>
        </div>
        <div className="fullvegetable-img">
          <img src={fullvegetable} alt="fullvegetable_image" />
        </div>
      </div>
    </div>
  );
}

export default FullVegetable_detail;
