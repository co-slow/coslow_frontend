import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Import useParams
import axios from 'axios';
import React from 'react';
import './UserChallenge_detail.css';
import back from './images/back.png';

function UserChallenge_detail() {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the id from the URL parameters
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
        setChallenges(response.data);
      } catch (error) {
        console.error('Failed to fetch challenges', error);
      }
    };

    fetchChallenges();
  }, []);

  useEffect(() => {
    if (challenges.length > 0) {
      const challenge = challenges.find(challenge => challenge.id === parseInt(id, 10));
      setFilteredChallenge(challenge);
      console.log("Filtered Challenge:", challenge); // 콘솔에 필터링된 챌린지 출력
    }
  }, [challenges, id]);

  const formatTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}<br />
      </React.Fragment>
    ));
  };

  // Participate frequency translation function
  const getParticipateFrequencyText = (frequency) => {
    switch (frequency) {
      case 'ONE_WEEK':
        return '1주';
      case 'TWO_WEEKS':
        return '2주';
      case 'ONE_MONTH':
        return '1달';
      default:
        return frequency; // Default case if the value doesn't match
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

  // const handleChallengeApplyClick = async () => {
  //   const userId = localStorage.getItem('userId'); // Assuming userId is stored in localStorage
  //   if (filteredChallenge && userId) {
  //     const challengeId = filteredChallenge.id;
  //     try {
  //       const response = await axios.post(`http://localhost:8080/challenges/${challengeId}/apply`, null, {
  //         params: { userId: userId }
  //       });
  //       if (response.status === 200) {
  //         console.log('신청 성공');
  //       } else {
  //         console.log('신청 실패');
  //       }
  //     } catch (error) {
  //       console.error('신청 실패', error);
  //     }
  //   }
  // };

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
              <span>지금까지 n명이 참가했어요</span>
              <button 
                className="userchallenge-attend-submit-button"
                // onClick={handleChallengeApplyClick}
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
