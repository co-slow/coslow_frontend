import "./Record_write.css";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Record_write(){

  const [imageSrc, setImageSrc] = useState(null);
  const [text, setText] = useState('');
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;

  const onUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setImageSrc(reader.result || null); // 파일의 컨텐츠
      };
    }
  };

  const handleClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxChars) {
      setText(value);
      setCharCount(value.length);
    }
  };

  const navigate = useNavigate();
  const handleChallengeMainClick = () => {
    navigate('/challenge');
  };
  const handleCoslowBannerClick = () => {
    navigate('/');
  };
  const handleDietRecordWriteClick = () => {
    navigate('/DietRecord_write');
  };

  return (
    <div className="Diet-record-write-container">
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
        <div className="diet-certification-container">
          <div className="certification-title">
            <div className="certification-title-text">챌린지 식단 인증하기</div>
            <button className="certification-button">인증하기</button>
          </div>
          <div className="diet-certification-content">
            <div className="upload-img-container">
              <div className="upload-box" onClick={handleClick}>
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={onUpload}
                />
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt="Preview"
                    style={{ width: '100%', height: '100%' }}
                  />
                ) : (
                  <span>사진 첨부</span>
                )}
              </div>
            </div>
            <div className="diet-write-contents">
              <input type="text" className="diet-write-title" placeholder="제목을 입력해주세요" required />
              <textarea
                className="diet-write-contents"
                placeholder="구성한 식단을 유저들에게 공유해보세요!"
                value={text}
                onChange={handleTextChange}
                required
              />
              <div className="char-count">({charCount}/{maxChars})</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
  
}

export default Record_write;