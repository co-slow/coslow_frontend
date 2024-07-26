import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // 캘린더 기본 스타일 추가
import './Record_main.css';

Modal.setAppElement('#root');

function Record_main() {
  const [makeChallengemodalIsOpen, setMakeChallengeModalIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('전체');
  const [activeChallenge, setActiveChallenge] = useState('');
  const [activeOption, setActiveOption] = useState('');
  const [showChallengeOptions, setShowChallengeOptions] = useState(false);
  const [date, setDate] = useState(new Date());

  const openModal = () => setMakeChallengemodalIsOpen(true);
  const closeModal = () => setMakeChallengeModalIsOpen(false);

  const navigate = useNavigate();

  const handleRecordMainClick = () => {
    navigate('/record');
  };

  const handleCoslowBannerClick = () => {
    navigate('/');
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleChallengeClick = (challenge) => {
    setActiveChallenge(challenge);
    setShowChallengeOptions(challenge === '내가 참여한 챌린지');
  };

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const hasChallenge = false; // 예시: 참여한 챌린지가 없는 경우

  return (
    <div className="Record-container">
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
              {challenge === '내가 참여한 챌린지' && (
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
                onChange={setDate}
                value={date}
              />
            </div>
            <div className="today-challenge">
              오늘 인증한 챌린지
            </div>
            <div className="my-challenge-photo">
              나의 챌린지 사진
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Record_main;
