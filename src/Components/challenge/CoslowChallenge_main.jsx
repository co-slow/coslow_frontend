import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import saveicon from './images/save.png';
import plus from './images/plus.png'; // 이미지 파일 import
import './CoslowChallenge_main.css';
import Modal from 'react-modal';
import axios from 'axios';

// 모달의 루트 엘리먼트를 설정합니다.
Modal.setAppElement('#root');

function CoslowChallenge_main() {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [activeOption, setActiveOption] = useState('코슬로 챌린지');
  const [searchTerm, setSearchTerm] = useState('');
  const [showImage, setShowImage] = useState(false); // 이미지 표시 여부 상태 추가
  const [modalIsOpen, setModalIsOpen] = useState(false); // 모달 열림 여부 상태 추가

  const [challenges, setChallenges] = useState([]);
  const [filteredChallenges, setFilteredChallenges] = useState([]);

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
  }, []); // 데이터 가져오는 useEffect는 빈 배열로 초기화

  useEffect(() => {
    const filterChallenges = () => {
      let filtered = [];
      if (activeOption === '코슬로 챌린지') {
        filtered = challenges.filter(challenge => challenge.createdBy === 'adminUser');
      } else if (activeOption === '제휴 챌린지') {
        filtered = challenges.filter(challenge => challenge.createdBy === 'pinUser');
      } else if (activeOption === '유저끼리 챌린지') {
        filtered = challenges.filter(challenge => !['adminUser', 'pinUser'].includes(challenge.createdBy));
      }
      setFilteredChallenges(filtered); // 필터링된 챌린지를 상태로 설정
    };

    filterChallenges();
  }, [activeOption, challenges]); // activeOption과 challenges를 의존성 배열에 추가

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

  const handleOptionClick = (option) => {
    setActiveOption(option);
    if (option === '유저끼리 챌린지') {
      setShowImage(true); // '유저끼리 챌린지' 클릭 시 이미지 표시
    } else {
      setShowImage(false); // 다른 옵션 클릭 시 이미지 숨기기
      setModalIsOpen(false); // 다른 옵션 클릭 시 모달 닫기
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleChallengeClick = (title) => {
    const challengeType = mapTitleToChallengeType(title);
    navigate(`/challenge/${challengeType}`);
  };

  const handlePlusImageClick = () => {
    setModalIsOpen(true);
  };

  const mapTitleToChallengeType = (title) => {
    switch (title) {
      case "계란으로<br/>하루 한끼 요리하기":
        return 'egg';
      case "코슬로와 함께하는<br/> 저속노화 첫걸음 챌린지":
        return 'firststep';
      case "채소 듬뿍 일주일 챌린지":
        return 'fullvegetable';
      case "‘샐러드판다’ <br/>샐러드 16종 한달 챌린지":
        return 'SaleSalad';
      case "‘다신샵’ <br/>닭가슴살 한달 챌린지":
        return 'DasinShop';
      case "‘그리팅’ <br/>저당플랜 5일 패키지 챌린지":
        return 'Greeting';
      default:
        return '';
    }
  };

  const categories = ['마감순', '인기순', '최신순'];

  return (
    <div className="Challenge-container">
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

        <div className='challenge-header'>
          <div className="search-wrapper">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
              placeholder=" "
            />
            <div className="search-icon"></div>
          </div>
          <div className="Order-category">
            {categories.map((order_category) => (
              <span
                key={order_category}
                className={activeCategory === order_category ? 'active' : ''}
                onClick={() => handleCategoryClick(order_category)}
              >
                {order_category}
              </span>
            ))}
          </div>
        </div>

        <div className="challenge-options">
          {['코슬로 챌린지', '제휴 챌린지', '유저끼리 챌린지'].map((option) => (
            <div
              key={option}
              className={option === activeOption ? 'active' : ''}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>

        {showImage && (
          <div className="plus-img" onClick={handlePlusImageClick}>
            <img src={plus} alt="plus-challenge" />
          </div>
        )}

        <div className="challenge-list">
        {console.log(filteredChallenges)}
          {filteredChallenges.map((challenge) => {
            let statusClass = '';
            let statusText = '';

            if (challenge.status === 'RECRUITING') {
              statusClass = 'status-recruiting';
              statusText = (
                <>
                  <div className="status-recruiting-text">모집중</div>
                  <div className="status-days-remaining">{challenge.daysRemaining}</div>
                </>
              );
            } else if (challenge.status === 'COMPLETED') {
              statusClass = 'status-closed';
              statusText = '종료';
            } else if (challenge.status === 'PROCEEDING') {
              statusClass = 'status-ongoing';
              statusText = '진행중';
            }

            return (
              <div 
              key={`${challenge.participateFrequency}-${challenge.startDate}-${challenge.createdBy}`}
              className="challenge-box"
                onClick={() => handleChallengeClick(challenge.title)}
              >
                <div 
                  className="challenge-title" 
                  dangerouslySetInnerHTML={{ __html: challenge.title }}
                ></div>
                <div className='save-icon'>
                  <img src={saveicon} alt="save-icon" />
                </div>
                <div className={`challenge-status ${statusClass}`}>
                  {statusText}
                </div>
              </div>
            );
          })}
        </div>

        {/* 모달 컴포넌트 */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)} // 모달 외부 클릭 시 모달 닫기
          contentLabel="챌린지 만들기" 
          className="challengeModal"
          overlayClassName="modal-overlay"
        >
          <div className="challengeModal-content">
            <div className="modal-challenge">챌린지 만들기</div>
            <div className="challengeModal-container">
              <div className='modal-title-contents'>
                <div>
                  <label>
                    <input type="text" className="title" placeholder="제목을 입력해주세요" required/>
                  </label>
                </div>
                <div>
                  <label>
                    <input type="text" className="hash-tag" placeholder="해시태그(최대 N개)" required/>
                  </label>
                </div>
              </div>

              <div className="challenge-term">
                <div className="challenge-term-text">기간 정하기</div>
                <div className="term-button">
                  <button className="oneweek">1주</button>
                  <button className="twoweek">2주</button>
                  <button className="onemonth">1달</button>
                  <button className="selfwrite">직접입력</button>
                </div>
                <div className="input-term">
                  <label>
                    <input type="text" name="start-date" placeholder="YYYY.MM.DD" required />
                  </label>
                  <span className="term-icon">-</span>
                  <label>
                    <input type="text" name="end-date" placeholder="YYYY.MM.DD" required/>
                  </label>
                </div>
              </div>

              <div className='certification-num-contents'>
                <div className='certification-num-text'>인증 횟수(1주)</div>
                <label>
                  <input type="text" name="certification-num" placeholder="" required />
                </label>
                <span className="certification-num-2">회</span>
              </div>
              <div className='max-person-contents'>
                <div className='max-person-text'>
                  <div className='max-person-text-1'>최대 인원</div>
                  <div className='max-person-text-2'>*최대 NN명까지 가능합니다.</div>
                </div>
                <label>
                  <input type="text" name="max-person-num" placeholder="" required />
                </label>
                <span className="max-person-num-2">명</span>
              </div>

            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default CoslowChallenge_main;
