import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CoslowChallenge_main.css';
// import search from './images/search.png';


function CoslowChallenge_main() {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [activeOption, setActiveOption] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // 검색 상태 추가

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

  // 검색 입력 핸들러
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // 필터링된 카테고리 리스트
  const categories = ['마감순', '인기순', '최신순'];
  const filteredCategories = categories.filter(category =>
    category.includes(searchTerm)
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
          <div className="Order-category">
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
            {filteredCategories.map((order_category) => (
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
      </div>
    </div>
  );
}

export default CoslowChallenge_main;
