import "./UserChallenge_main.css"
import plus from './images/plus.png';
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import { useState} from 'react';

Modal.setAppElement('#root'); 

function UserChallenge_main(){

  const [makeChallengemodalIsOpen, setMakeChallengeModalIsOpen] = useState(false); // 모달 열림 상태를 관리하는 state

    // 모달 열기 및 닫기 핸들러
    const openModal = () => setMakeChallengeModalIsOpen(true);
    const closeModal = () => setMakeChallengeModalIsOpen(false);

  const navigate = useNavigate();
  const handleChallengeMainClick = () => {
    navigate('/userchallenge_main');
  };
  const handleCoslowBannerClick = () => {
    navigate('/');
  };
  const handleRecordList2Click = () => {
    navigate('/record_list2');
  };

  return (
    <div className="Challenge-container">
      <div className="Coslow-main">
        <div className="Coslow-header">
          <div className="Coslow-header-layout">
            <div className="header-left">
              <div className="header-logo">CO-SLOW</div>
            </div>
            <div className="header-right">
              <div className="header-challenge" onClick={handleChallengeMainClick}>챌린지</div>
              <div className="header-record" onClick={handleRecordList2Click}>나의기록</div>
              <div className="header-mypage">마이페이지</div>
              <div className="header-logout" onClick={handleCoslowBannerClick}>로그아웃</div>
            </div>
          </div>
        </div>
        <div className="challenge-write">
          <img src={plus} alt="plus_image" onClick={openModal} />
        </div>
        <Modal
          isOpen={makeChallengemodalIsOpen}  
          onRequestClose={closeModal} 
          contentLabel="챌린지 만들기" 
          className="challengeModal"
          overlayClassName="modal-overlay" 
        >
          <div className="challengeModal-content">
            <div className="modal-challenge">챌린지 만들기</div>

            <div className="challengeModal-container">
              <div>
                <label>
                  <input type="text" className="title" placeholder="제목을 입력해주세요" required/>
                </label>
              </div>
              <div>
                <label>
                  <input type="text" className="hash-tag" placeholder="해시태그" required/>
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
                <span className="term-icon">~</span>
                <label>
                  <input type="text" name="end-date" placeholder="YYYY.MM.DD" required/>
                </label>
              </div>
            </div>

          </div>
        </Modal>
      </div>
    </div>
  )
}

export default UserChallenge_main;