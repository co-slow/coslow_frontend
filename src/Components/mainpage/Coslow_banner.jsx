import "./Coslow_banner.css"
import vegetable from './images/vegetable.png';
import kakao from './images/kakao.png';
import google from './images/google.png';
import Modal from 'react-modal';
import { useState} from 'react';

Modal.setAppElement('#root');


function Coslow_banner(){

  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [signupModalIsOpen, setSignupModalIsOpen] = useState(false);
  const [allAgree, setAllAgree] = useState(false);
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    marketing: false,
  });

  const openLoginModal = () => {
    setLoginModalIsOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalIsOpen(false);
  };

  const openSignupModal = () => {
    setSignupModalIsOpen(true);
    setLoginModalIsOpen(false);
  };

  const closeSignupModal = () => {
    setSignupModalIsOpen(false);
  };

  const handleAllAgreeChange = (e) => {
    const isChecked = e.target.checked;
    setAllAgree(isChecked);
    setAgreements({
      terms: isChecked,
      privacy: isChecked,
      marketing: isChecked,
    });
  };

  const handleAgreementChange = (e) => {
    const { name, checked } = e.target;
    setAgreements((prevAgreements) => {
      const newAgreements = {
        ...prevAgreements,
        [name]: checked,
      };

      setAllAgree(
        newAgreements.terms &&
        newAgreements.privacy &&
        newAgreements.marketing
      );

      return newAgreements;
    });
  };

  const handleKeepChange = (e) => {
    setAgreements((prevAgreements) => ({
      ...prevAgreements,
      keep: e.target.checked,
    }));
  };

  return(
    <div className="Coslow-container">
      <div className="Coslow-main">
      <div className={`main ${loginModalIsOpen || signupModalIsOpen ? 'modal-open' : ''}`}>
        <div className="Coslow-header">
          <div className="Coslow-header-layout">
            <div className="header-left">
              <div className="header-logo">CO-SLOW</div>
            </div>
            <div className="header-right">
              <div className="header-challenge">챌린지</div>
              <div className="main-signIn-Up" onClick={openLoginModal}>로그인/회원가입</div>
            </div>
          </div>
        </div>
        <div className="main-text">
          <div className="main-logo">CO-SLOW</div>
          <div className="main-challenge">CHALLENGE</div>
          <div className="main-contents-text">
            코슬로와 함께 다양한 사람들과
            <br/>다채로운 저속노화 식단 챌린지에 도전해보세요!
          </div>
        </div>
        <div className="vegetable-img">
          <img src={vegetable} alt="vegetable_image" />
        </div>
      </div>

      
      <Modal
        isOpen={loginModalIsOpen}
        onRequestClose={closeLoginModal}
        contentLabel="로그인"
        className="modal1"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          <div className='modal-login'>로그인</div>
          <div className="input-container">
            <div>
              <label>
                <input type="text" className="id" placeholder="이메일" required />
              </label>
            </div>
            <div>
              <label>
                <input type="password" className="password" placeholder="비밀번호" required />
              </label>
            </div>
            <div className="checkbox-login-container">
              <label>
                <input type="checkbox" name="keep" checked={agreements.keep} onChange={handleKeepChange}/>
                <span className="checkbox-custom"></span>
                <span>로그인 상태 유지</span>
              </label>
            </div>
          </div>
          <div className="modal-login-container">
              <div>아이디 찾기</div><div> | </div><div>비밀번호 찾기</div><div> | </div><div onClick={openSignupModal}>회원가입</div>
          </div>

          <div className="modal-login-footer-container">
            <div className="modal-login-footer">
              <button className="modal-login-button">로그인</button>
            </div>
            <span className="or">또는</span>
            <div className="modal-login-footer2">
              <button className="modal-login-button2">
                <div className="kakao-img">
                  <img src={kakao} alt="kakao_image" />
                </div>
                <span className="button-text">카카오로 로그인</span>
              </button>
            </div> 

            <div className="modal-login-footer3">
              <button className="modal-login-button3">
                <div className="google-img">
                  <img src={google} alt="google_image" />
                </div>
                <span className="button-text">Google로 로그인</span>
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={signupModalIsOpen}
        onRequestClose={closeSignupModal}
        contentLabel="회원가입"
        className="modal2"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          <div className='modal-join'>회원가입</div>
          <div className="input-container">
            <div>
              <label>
                <input type="text" className="email" placeholder="이메일" required />
              </label>
            </div>
            <div>
              <label>
                <input type="password" className="password" placeholder="비밀번호" required />
              </label>
            </div>
          </div>
          <div className="checkbox-join-container">
            <label className={`all-agree-label ${allAgree ? 'checked' : ''}`}>
              <input type="checkbox" checked={allAgree} onChange={handleAllAgreeChange} />
              <span className="checkbox-custom"></span>
              아래 약관을 모두 동의합니다.
            </label>
            <label>
              <input type="checkbox" name="terms" checked={agreements.terms} onChange={handleAgreementChange} />
              <span className="checkbox-custom"></span>
              이용약관 동의 (필수)
            </label>
            <label>
              <input type="checkbox" name="privacy" checked={agreements.privacy} onChange={handleAgreementChange} />
              <span className="checkbox-custom"></span>
              개인정보 수집 이용 동의 (필수)
            </label>
            <label>
              <input type="checkbox" name="marketing" checked={agreements.marketing} onChange={handleAgreementChange} />
              <span className="checkbox-custom"></span>
              혜택|이벤트 광고 수신 (선택)
            </label>
          </div>
        </div>
        <div className="modal-join-container">
        <div className="modal-join-footer">
          <button>
            <span className="button-text">가입하기</span>
          </button>
        </div>
        <div className="modal-join-footer2">
          <button className="modal-join-button2">
            <div className="kakao-img">
              <img src={kakao} alt="kakao_image" />
            </div>
            <span className="button-text">카카오로 시작하기</span>
          </button>
        </div>
        <div className="modal-join-footer3">
          <button className="modal-join-button3">
            <div className="google-img">
              <img src={google} alt="google_image" />
            </div>
            <span className="button-text">Google로 시작하기</span>
          </button>
        </div>
      </div>
      </Modal>
      </div>
    </div>
  )
}

export default Coslow_banner