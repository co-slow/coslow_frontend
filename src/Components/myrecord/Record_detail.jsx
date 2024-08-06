import { useState, useEffect } from 'react';
import './Record_detail.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import arrowLeftgray from './images/arrow_left_gray.png';
import arrowRightgray from './images/arrow_right_gray.png';
import dietCertify from './images/diet_certify.png';

function Record_detail() {
    const navigate = useNavigate();

    const handleRecordMainClick = () => {
        navigate('/record');
    };

    const handleCoslowBannerClick = () => {
        navigate('/');
    };

    const handleArrowLeftClick = () => {
        navigate('/recordmydiet'); // 이전 페이지로 이동
    };

    const handleCertifyClick = () => {
        navigate('/recordWrite'); // 글 작성 페이지로 이동
    };

    // DAY를 역순으로 정렬
    //const sortedDays = Object.keys(dailyImages).sort((a, b) => b - a);

    return (
        <div className="Record-Detail-container">
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
            </div>
            <div className="Record-Detail-contents">
                <div className="arrowLeftIcon" onClick={handleArrowLeftClick}>
                    <img src={arrowLeftgray} alt="arrowLeftgray" />
                </div>
                <div className='detail-contents'>
                    <div className="detail-info">
                        <div className="detail-title">

                        </div>
                        <div className="detail-duration">

                        </div>
                        <div className="detail-dplus">
                            <br />시작한지 일째
                        </div>
                    </div>

                    <div className="detail-today-count">
                        <div>Today<br /><br /><br /></div>
                        <div className='todayCountNum'></div>
                        <div className='todayCountText'>유저들이<br />인증을 완료했어요</div>

                    </div>
                    <div className="detail-participant">
                        <div className='participantP'>총 <span>명</span>의 유저가 참가하고 있어요</div>
                        <div className="userProfile">
                            <span className="userProfileImg"></span>
                            <span className="userName"></span>
                        </div>
                    </div>
                </div>
                <div className="detail-contents-userdailyimg">
                    {/*sortedDays.map(day => (
                        <div key={day} className='userdailyimgcontents'>
                            <div className='dayTitle'>
                                <div className='dayNum'>DAY {day}</div>
                                <div className='viewDetail'><img src={arrowRightgray} alt="arrowRightgray" /></div>
                            </div>
                            <div className='userUploadimg'>
                                {dailyImages[day].length === 0 ? (
                                    <div onClick={handleCertifyClick}>
                                        <img src={dietCertify} alt="diet_certify" style={{ cursor: 'pointer' }} />
                                    </div>
                                ) : (
                                    dailyImages[day].map((image, index) => (
                                        <img key={index} src={image.imgUrl} alt={`User ${image.userName}`} style={{ width: '140px', height: '140px', borderRadius: '15px'}} />
                                    ))
                                )}
                            </div>
                        </div>
                    ))*/}
                </div>
            </div>
        </div>
    );
}

export default Record_detail;
