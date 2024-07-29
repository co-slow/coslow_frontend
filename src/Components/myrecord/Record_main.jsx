import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import moment from 'moment';
import axios from 'axios';
import './Record_main.css';
import 'react-calendar/dist/Calendar.css'; // 캘린더 기본 스타일 추가

import arrow2 from './images/Arrow 2.png';
import img1 from './images/계란으로 하루 한끼 요리하기1.png';
import img2 from './images/계란으로 하루 한끼 요리하기2.png';
import img3 from './images/계란으로 하루 한끼 요리하기3.png';
import img4 from './images/채소 듬뿍 일주일 챌린지.png';
import img5 from './images/일주일에 두번 건강식 챌린지 1.png';
import img6 from './images/일주일에 두번 건강식 챌린지 2.png';

function Record_main() {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [activeChallenge, setActiveChallenge] = useState('내가 참여한 챌린지');
  const [activeOption, setActiveOption] = useState('코슬로 챌린지');
  const [showChallengeOptions, setShowChallengeOptions] = useState(true);
  const [value, onChange] = useState(new Date());
  const [todayChallenges, setTodayChallenges] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setShowChallengeOptions(activeChallenge === '내가 참여한 챌린지');

    axios.get('http://localhost:3001/api/today-challenges')
      .then(response => {
        setTodayChallenges(response.data);
      })
      .catch(error => {
        console.error('Error fetching today challenges:', error);
      });
  }, [activeChallenge]);

  const handleRecordMainClick = () => {
    navigate('/record');
  };

  const handleRecordDetailClick = (title) => {
    navigate('/recordDetail', { state: { title } });
  };

  const handleCoslowBannerClick = () => {
    navigate('/');
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleChallengeClick = (challenge) => {
    setActiveChallenge(challenge);
  };

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const hasChallenge = false; // 예시: 참여한 챌린지가 없는 경우

  const challengePhotos = [
    { img: img1, title: '계란으로 하루 한끼 요리하기' },
    { img: img2, title: '계란으로 하루 한끼 요리하기' },
    { img: img3, title: '계란으로 하루 한끼 요리하기' },
    { img: img4, title: '채소 듬뿍 일주일 챌린지' },
    { img: img5, title: '일주일에 두번 건강식 챌린지' },
    { img: img6, title: '일주일에 두번 건강식 챌린지' },
  ];

  const containerHeight = activeChallenge === '나의 식단 기록' ? '1390px' : '940px';

  return (
    <div className="Record-container" style={{ height: containerHeight }}>
      <div className="Coslow-main">
        <div className="Coslow-header">
          <div className="Coslow-header-layout">
            <div className="header-left">
              <div className="header-logo">CO-SLOW</div>
            </div>
            <div className="header-right">
              <div className="header-challenge">챌린지</div>
              <div className="header-record" onClick={handleRecordMainClick}>나의기록</div>
              <div className="header-mypage">마이페이지</div>
              <div className="header-logout" onClick={handleCoslowBannerClick}>로그아웃</div>
            </div>
          </div>
        </div>

        {activeChallenge !== '나의 식단 기록' && (
          <div className="Record-category">
            {['전체', '모집중', '진행중', '완료'].map((category) => (
              <span
                key={category}
                className={activeCategory === category ? 'active' : ''}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </span>
            ))}
          </div>
        )}

        <div className="challenge-section">
          {['내가 참여한 챌린지', '나의 식단 기록'].map((challenge) => (
            <div
              key={challenge}
              className={`${activeChallenge === challenge ? 'active' : ''} ${challenge === '내가 참여한 챌린지' ? 'challenge-options-container' : ''}`}
              onClick={() => handleChallengeClick(challenge)}
            >
              {challenge}
              {challenge === '내가 참여한 챌린지' && showChallengeOptions && (
                <div className="challenge-options">
                  {['코슬로 챌린지', '제휴 챌린지', '유저끼리 챌린지', '내가 만든 챌린지'].map((option) => (
                    <div
                      key={option}
                      className={option === activeOption ? 'active' : ''}
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {activeChallenge === '내가 참여한 챌린지' && !hasChallenge && (
          <div className="no-challenge-message">
            아직 참여한 챌린지가 없어요!
          </div>
        )}

        {activeChallenge === '나의 식단 기록' && (
          <>
            <div className="calendar">
              <Calendar
                onChange={onChange}
                value={value}
                calendarType='gregory'
                showNeighboringMonth={false}
                formatDay={(locale, date) => moment(date).format("D")}
                formatMonthYear={(locale, date) => moment(date).format("M월 YYYY")}
                nextLabel=">"
                prevLabel="<"
                next2Label={null}
                prev2Label={null}
              />
            </div>
            <div className="today-challenges-container">
              오늘 인증할 챌린지
              <div>{todayChallenges.map((title, index) => (
                <div key={index} className="today-challenge" onClick={() => handleRecordDetailClick(title)}>
                  <div className='today-challenge-title'>{title}</div>
                  <div className='arrow2'><img src={arrow2} alt="Arrow2" /></div>
                </div>
              ))}
              </div>
            </div>
            <div className="my-challenge-photo">
              <div className='my-challenge-photo-title'>나의 챌린지 사진</div>
              <div className="photo-grid">
                {challengePhotos.map((challenge, index) => (
                  <div key={index} className="photo-item">
                    <div className="challenge-photo-img">
                      <img src={challenge.img} alt={challenge.title} />
                    </div>
                    <div className="photo-title">{challenge.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Record_main;
