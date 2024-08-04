import { useState, useEffect } from 'react';
import Modal from 'react-modal';

import "./Mypage_main.css";
import rank from './images/rank.png';
import reward from './images/reward.png';
import ranking from './images/ranking.png';
import attend from './images/attend.png';
import right from './images/right.png';
import like1 from './images/like1.png';
import save1 from './images/save1.png';
import back from './images/back.png';

import bbaendak from './images/bbaendak.png';
import dashin from './images/dashin.png';
import greating from './images/greating.png';
import health from './images/health.png';
import pocket from './images/pocket.png';
import saladbowl from './images/saladbowl.png';
import saladda from './images/saladda.png';
import thinker from './images/thinker.png';
import umsalad from './images/umsalad.png';

import rank1 from './images/rank1.png';
// import rank2 from './images/rank2.png';
// import rank3 from './images/rank3.png';
// import rank4 from './images/rank4.png';
// import rank5 from './images/rank5.png';

Modal.setAppElement('#root');

function Mypage_main() {
  const [rankModalIsOpen, setrankModalIsOpen] = useState(false);
  const [pinModalIsOpen, setpinModalIsOpen] = useState(false);

  const openrankModal = () => {
    setrankModalIsOpen(true);
    setpinModalIsOpen(false);
  };

  const closerankModal = () => {
    setrankModalIsOpen(false);
  };

  const openpinModal = () => {
    setpinModalIsOpen(true);
    setrankModalIsOpen(false);
  };

  const closepinModal = () => {
    setpinModalIsOpen(false);
  };

  useEffect(() => {
    function updateProgressBar(percentage) {
      const progressBarFill = document.querySelector('.progress-bar-fill');
      if (progressBarFill) {
        progressBarFill.style.width = percentage + '%';
      } else {
        console.error('Progress bar fill element not found');
      }
    }

    updateProgressBar(50);
  }, []);

  return (
    <div className="Mypage-main-container">
      <div className="Coslow-main">
        <div className="Coslow-header">
          <div className="Coslow-header-layout">
            <div className="header-left">
              <div className="header-logo">CO-SLOW</div>
            </div>
            <div className="header-right">
              <div className="header-challenge">챌린지</div>
              <div className="header-record">나의기록</div>
              <div className="header-mypage">마이페이지</div>
              <div className="header-logout">로그아웃</div>
            </div>
          </div>
        </div>
        <div className="mypage-user-1">
          <div className="mypage-user">
            <div className="Mypage-user-container">
              <div className="mypage-profile-img">
                <img src="프로필_이미지_URL" alt="Profile" />
              </div>
              <div className="mypage-user-info">
                <div className="mypage-user-nickname">
                  <span>{localStorage.getItem('nickname')}</span>
                  <div className="mypage-nickname-text">님</div>
                </div>
                <div className="mypage-user-email">
                  <span>kimlikelion@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="mypage-coslow-container">
              <div className="mypage-rank-container" onClick={openrankModal}>
                <div className="rank-img">
                  <img src={rank} alt="rank_image" />
                </div>
                <div className="rank-text">나의 등급</div>
                <span>아기코북</span>
              </div>
              <div className="mypage-reward-container" onClick={openpinModal}>
                <div className="reward-img">
                  <img src={reward} alt="reward_image" />
                </div>
                <div className="reward-text">리워드</div>
                <span>2,400</span>
              </div>
              <div className="mypage-challenge-attand-container">
                <div className="attend-img">
                  <img src={attend} alt="attend_image" />
                </div>
                <div className="attend-text">챌린지 참여횟수</div>
                <span>5회</span>
              </div>
            </div>

            <div className="mypage-action-container">
              <div className="action-text">나의 활동</div>
              <div className='my-action-container'>
                <div className="mylike-post-container">
                  <div className='mylike-post-contents'>
                    <div className="like1-img">
                      <img src={like1} alt="like1_image" />
                    </div>
                    <span>좋아요한 게시물</span>
                  </div>
                  <div className="right-img">
                    <img src={right} alt="right_image" />
                  </div>
                </div>
                <div className="mysave-challenge-container">
                  <div className='mysave-challenge-contents'>
                    <div className="save1-img">
                      <img src={save1} alt="save1_image" />
                    </div>
                    <span>저장한 챌린지</span>
                  </div>
                  <div className="right-img">
                    <img src={right} alt="right_image" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="rank-character-container">
            <div className="rank1-img">
              <img src={rank1} alt="rank1_image" />
            </div>
            {/* <div className="rank2-img">
              <img src={rank2} alt="rank2_image" />
            </div>
            <div className="rank3-img">
              <img src={rank3} alt="rank3_image" />
            </div>
            <div className="rank4-img">
              <img src={rank4} alt="rank4_image" />
            </div>
            <div className="rank5-img">
              <img src={rank5} alt="rank5_image" />
            </div> */}
            <div className="character-text">
              <span>멋진코북이가 되기까지</span>
              <div className="percent-content">
                <div className="percent">50%</div>
                <span>남았어요!</span>
              </div>
            </div>
            <div className="character-progress-bar">
              <div className="progress-bar-background">
                <div className="progress-bar-fill"></div>
              </div>
              <div className="progress-bar-text-container">
                <div className="progress-bar-start-text">아기코북</div>
                <div className="progress-bar-end-text">멋진코북</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 모달 컴포넌트 */}
      <Modal
        isOpen={rankModalIsOpen}
        onRequestClose={closerankModal}
        contentLabel="Rank Modal"
        className="Rankmodal"
        overlayClassName="overlay"
      >
        <div className='rankmodal-title'>등급표</div>
        <div className='back-button' onClick={closerankModal}>
          <img src={back} alt="back-img" />
        </div>
        <div className='ranking-img'>
          <img src={ranking} alt="ranking-img" />
        </div>
      </Modal>

      <Modal
        isOpen={pinModalIsOpen}
        onRequestClose={closepinModal}
        contentLabel="Pin Modal"
        className="Pinmodal"
        overlayClassName="overlay"
      >
        <div className='pinmodal-title'>리워드 사용가능한 제휴 브랜드</div>
        <div className='back-button' onClick={closepinModal}>
          <img src={back} alt="back-img" />
        </div>
        <div className='pinmodal-subtitle'>
          총 <span>9</span>개의 제휴 브랜드가 있어요.
        </div>
        <div className='pin-img'>
          <div className='bbaendak-img'>
            <a href="https://smartstore.naver.com/bbaendak/category" target="_blank" rel="noopener noreferrer">
              <img src={bbaendak} alt="bbaendak-img" />
            </a>
          </div>
          <div className='dashin-img'>
            <a href="https://dietshin.com" target="_blank" rel="noopener noreferrer">
              <img src={dashin} alt="dashin-img" />
            </a>
          </div>
          <div className='greating-img'>
            <a href="https://greating.co.kr" target="_blank" rel="noopener noreferrer">
              <img src={greating} alt="greating-img" />
            </a>
          </div>
          <div className='health-img'>
            <a href="https://hnbclub.co.kr" target="_blank" rel="noopener noreferrer">
              <img src={health} alt="health-img" />
            </a>
          </div>
          <div className='pocket-img'>
            <a href="https://pocketsalad.co.kr" target="_blank" rel="noopener noreferrer">
              <img src={pocket} alt="pocket-img" />
            </a>
          </div>
          <div className='saladbowl-img'>
            <a href="https://thesaladbowl.co.kr" target="_blank" rel="noopener noreferrer">
              <img src={saladbowl} alt="saladbowl-img" />
            </a>
          </div>
          <div className='saladda-img'>
            <a href="https://saladpanda.co.kr" target="_blank" rel="noopener noreferrer">
              <img src={saladda} alt="saladda-img" />
            </a>
          </div>
          <div className='thinker-img'>
            <a href="https://smartstore.naver.com/thinkabody" target="_blank" rel="noopener noreferrer">
              <img src={thinker} alt="thinker-img" />
            </a>
          </div>
          <div className='umsalad-img'>
            <a href="https://smartstore.naver.com/yumsalad/category" target="_blank" rel="noopener noreferrer">
              <img src={umsalad} alt="umsalad-img" />
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Mypage_main;
