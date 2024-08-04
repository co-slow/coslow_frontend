import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import './UserChallenge_detail.css';
import back from './images/back.png';

function UserChallenge_detail() {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the id from the URL parameters
  const [challenges, setChallenges] = useState([]);
  const [filteredChallenge, setFilteredChallenge] = useState(null);
  const [participantCount, setParticipantCount] = useState(0); // 추가된 상태

  // 챌린지 목록을 가져오는 useEffect
  useEffect(() => {
    const fetchChallenges = async () => {
      const token = localStorage.getItem('accessToken');
      try {
        const response = await axios.get('https://api.coslow.site/challenges', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setChallenges(response.data);
      } catch (error) {
        console.error('Failed to fetch challenges', error);
      }
    };

    fetchChallenges();
  }, []);

  // 필터링된 챌린지를 설정하고 참가 인원 수를 가져오는 useEffect
  useEffect(() => {
    if (challenges.length > 0) {
      const challenge = challenges.find(challenge => challenge.id === parseInt(id, 10));
      setFilteredChallenge(challenge);
      if (challenge) {
        const fetchParticipantCount = async () => {
          try {
            const response = await axios.get(`http://localhost:8080/challenges/${challenge.id}/participants/count`);
            setParticipantCount(response.data.count); // 응답에서 참여 인원 수를 가져옴
          } catch (error) {
            console.error('Failed to fetch participant count', error);
          }
        };

        fetchParticipantCount();
      }
    }
  }, [challenges, id]);

  const formatTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}<br />
      </React.Fragment>
    ));
  };

  // 참여 빈도 텍스트 변환 함수
  const getParticipateFrequencyText = (frequency) => {
    switch (frequency) {
      case 'ONE_WEEK':
        return '1주';
      case 'TWO_WEEKS':
        return '2주';
      case 'ONE_MONTH':
        return '1달';
      default:
        return frequency; // 값이 일치하지 않을 때의 기본 케이스
    }
  };

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

  const handleChallengeApplyClick = async () => {
    const userId = parseInt(localStorage.getItem('id'), 10); // 사용자 ID
    const token = localStorage.getItem('accessToken'); // 액세스 토큰

    if (filteredChallenge && userId) {
      const challengeId = filteredChallenge.id;
      const challengeApplyUrl = `http://localhost:8080/challenges/${challengeId}/apply`; // URL 생성

      try {
        // 참가 요청 보내기
        const response = await axios.post(challengeApplyUrl,null, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            userId: userId
          }
        });

        if (response.status === 200) {
          console.log('신청 성공');

          // 참가자 수를 즉시 업데이트
          const fetchParticipantCount = async () => {
            try {
              const countResponse = await axios.get(`http://localhost:8080/challenges/${challengeId}/participants/count`, {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              });
              setParticipantCount(countResponse.data.count); // 응답에서 참여 인원 수를 가져옴
            } catch (error) {
              console.error('Failed to fetch participant count', error);
            }
          };

          fetchParticipantCount();
        } else {
          console.log('신청 실패', response.status);
        }
      } catch (error) {
        console.error('신청 실패', error);
      }
    }
  };
  
  return (
    <div className="userchallenge-container">
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
          <div className='filter-userchallenge-container'>
            <div className="userchallenge-title">
              <span>{formatTextWithLineBreaks(filteredChallenge.title)}</span>
            </div>
            <div className="userchallenge-term">
                <span>{filteredChallenge.startDate} - {filteredChallenge.endDate}</span>
            </div>
            <div className='userchallenge-hashTag'>
              <span>{filteredChallenge.tags.join(',')}</span>
            </div>
            <div className='userchallenge-term-container'>
              <span>이 챌린지는 </span>
              <div className='userchallege-term-box'>
                <span className="frequency-style">
                  {filteredChallenge.participateFrequency === 'CUSTOM' ? (
                    `${filteredChallenge.startDate} - ${filteredChallenge.endDate}`
                  ) : (
                    getParticipateFrequencyText(filteredChallenge.participateFrequency)
                  )}
                </span>
              </div>
              <span>동안 진행되는 챌린지예요.</span>
            </div>
            <div className='userCheck-num-container'>
              <span>인증 횟수는</span>
              <div className='userCheck-num-box'>
                <span>{filteredChallenge.weeklyCheckInCount}회</span>
              </div>
            </div>
            <div className='user-maxPerson-container'>
              <span>최대 인원은 </span>
              <div className='user-maxPerson-box'>
                <span>{filteredChallenge.maxParticipants}명</span>
              </div>
              <span> 이예요.</span>
            </div>
            <div className="userchallenge-attend-num">
              <span>지금까지 {participantCount}명이 참가했어요</span> {/* 수정된 부분 */}
              <button 
                className="userchallenge-attend-submit-button"
                onClick={handleChallengeApplyClick}
              >
                챌린지 참가하기
              </button>
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
