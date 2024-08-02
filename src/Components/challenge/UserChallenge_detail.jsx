import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import './FullVegetable_detail.css';
import fullvegetable from './images/fullvegetable.png';
import back from './images/back.png';

function UserChallenge_detail() {
  const navigate = useNavigate();
  
  const [challenges, setChallenges] = useState([]);

  const [filteredChallenge, setFilteredChallenge] = useState(null);

  useEffect(() => {
    const fetchChallenges = async () => {
      const token = localStorage.getItem('accessToken');
      try {
        const response = await axios.get('https://api.coslow.site/challenges', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        // Authorization: 'Bearer ' + localStorage.getItem["accessToken"]
        setChallenges(response.data);
      } catch (error) {
        console.error('Failed to fetch challenges', error);
      }
    };

    fetchChallenges();
  }, []);

  useEffect(() => {
    // 데이터가 로드된 후 타이틀에 맞는 데이터를 필터링 (백엔드 만들어진후 수정..)
    if (challenges.length > 0) {
      const challenge = challenges.find(challenge => challenge.title === '새로운 커스텀 챌린지');
      setFilteredChallenge(challenge);
    }
  }, [challenges]);


    // 줄바꿈 처리를 위한 함수
    const formatTextWithLineBreaks = (text) => {
      return text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}<br />
        </React.Fragment>
      ));
    };

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

          {filteredChallenge ? (
            <div className='full-container3'>
              <div className="fullvegetable-title">
                <span>{formatTextWithLineBreaks(filteredChallenge.title)}</span>                             
                <div className="fullvegetable-term">
                  <span>{filteredChallenge.startDate} - {filteredChallenge.endDate}</span>
                </div>
              </div>
              <div className="fullvegetable-contents-detail">
                <span>{formatTextWithLineBreaks(filteredChallenge.description)}</span>
              </div>
              <div className="fullvegetable-attend-num">
                <span>지금까지 20명이 참가했어요</span>
                {/* {filteredChallenge.어쩌고} */}
                <button className="fullvegetable-attend-button">챌린지 참가하기</button>
              </div>
              <div className="fullvegetable-img">
                <img src={fullvegetable} alt="fullvegetable_image" />
              </div>
            </div>
          ) : (
            <p>챌린지가 없습니다</p>
          )}
      </div>
    </div>
  );
}

export default UserChallenge_detail;
