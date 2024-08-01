import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Egg_detail.css';
import egg from './images/egg.png';
import back from './images/back.png';
import axios from 'axios';
import React from 'react';

function Egg_detail() {
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

  // 네비게이션 핸들러
  const handleChallengeMainClick = () => {
    navigate('/coslowchallenge_main');
  };

  const handleCoslowBannerClick = () => {
    navigate('/');
  };

  const handleDietRecordWriteClick = () => {
    navigate('/DietRecord_write');
  };

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

          {filteredChallenge ? (
            <div className='full-container2'>
              <div className="Egg-title">
                <span>{formatTextWithLineBreaks(filteredChallenge.title)}</span>                       
                <div className="Egg-term">
                  <span>{filteredChallenge.startDate} - {filteredChallenge.endDate}</span>
                </div>
              </div>
              <div className="Egg-contents-detail">
                <span>{formatTextWithLineBreaks(filteredChallenge.description)}</span>
              </div>
              <div className="Egg-attend-num">
                <span>지금까지 20명이 참가했어요</span>
                {/* {filteredChallenge.어쩌고} */}
                <button className="Egg-attend-button">챌린지 참가하기</button>
              </div>
              <div className="egg-img">
                <img src={egg} alt="Egg" />
              </div>
            </div>
          ) : (
            <p>챌린지가 없습니다</p>
          )}
      </div>
    </div>
  );
}

export default Egg_detail;
