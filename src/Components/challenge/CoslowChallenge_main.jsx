import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import saveicon from './images/save.png';
import './CoslowChallenge_main.css';

function CoslowChallenge_main() {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [activeOption, setActiveOption] = useState('코슬로 챌린지'); // 기본 옵션을 '코슬로 챌린지'로 설정
  const [searchTerm, setSearchTerm] = useState('');

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
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleChallengeClick = (title) => {
    // 챌린지 제목에 따라 URL 경로를 맞춤
    const challengeType = mapTitleToChallengeType(title);
    navigate(`/challenge/${challengeType}`);
  };

  // 제목을 챌린지 유형으로 매핑하는 함수
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
        return 'DasinShop'
      case "‘그리팅’ <br/>저당플랜 5일 패키지 챌린지":
        return 'Greeting'
      // 더 많은 매핑 추가 가능
      default:
        return '';
    }
  };

  const categories = ['마감순', '인기순', '최신순'];
  const challenges = [
    {
      title: "계란으로<br/>하루 한끼 요리하기",
      startDate: "2024-08-01",
      endDate: "2024-08-07",
      type: '코슬로 챌린지'
    },
    {
      title: "코슬로와 함께하는<br/> 저속노화 첫걸음 챌린지",
      startDate: "2024-07-25",
      endDate: "2024-08-05",
      type: '코슬로 챌린지'
    },
    {
      title: "채소 듬뿍 일주일 챌린지",
      startDate: "2024-08-10",
      endDate: "2024-08-20",
      type: '코슬로 챌린지'
    },
    {
      title:"‘샐러드판다’ <br/>샐러드 16종 한달 챌린지",
      startDate: "2024-08-01",
      endDate: "2024-08-31",
      type: '제휴 챌린지'
    },
    {
      title:"‘다신샵’ <br/>닭가슴살 한달 챌린지",
      startDate: "2024-08-01",
      endDate: "2024-08-31",
      type: '제휴 챌린지'
    },
    {
      title:"‘그리팅’ <br/>저당플랜 5일 패키지 챌린지",
      startDate: "2024-08-01",
      endDate: "2024-08-05",
      type: '제휴 챌린지'
    }
  ];

  const currentDate = new Date();

  // 선택된 옵션에 따라 필터링된 챌린지 목록
  const filteredChallenges = challenges.filter(challenge => 
    challenge.type === activeOption
  );

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
              placeholder=" " // placeholder 속성을 공백으로 설정
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

        <div className="challenge-list">
          {filteredChallenges.map((challenge) => {
            const startDate = new Date(challenge.startDate);
            const endDate = new Date(challenge.endDate);
            let statusClass = '';
            let statusText = '';

            if (currentDate < startDate) {
              const daysRemaining = Math.ceil((startDate - currentDate) / (1000 * 60 * 60 * 24));
              statusClass = 'status-recruiting';
              statusText = (
                <>
                  <div className="status-recruiting-text">모집중</div>
                  <div className="status-days-remaining">D-{daysRemaining}</div>
                </>
              );
            } else if (currentDate > endDate) {
              statusClass = 'status-closed';
              statusText = '종료';
            } else {
              statusClass = 'status-ongoing';
              statusText = '진행중';
            }

            return (
              <div 
                key={challenge.title} 
                className="challenge-box"
                onClick={() => handleChallengeClick(challenge.title)} // 클릭 시 페이지 이동
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
      </div>
    </div>
  );
}

export default CoslowChallenge_main;
