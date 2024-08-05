import "./SaveChallenges.css"
import back from './images/back.png'


function SaveChallenges(){

  return(
    <div className="savechallenges-container">
      <div className="Coslow-main">

        <div className="Coslow-header">
          <div className="Coslow-header-layout">
            <div className="header-left">
              <div className="header-logo">CO-SLOW</div>
            </div>
            <div className="header-right">
              <div className="header-challenge" >챌린지</div>
              <div className="header-record" >나의기록</div>
              <div className="header-mypage">마이페이지</div>
              <div className="header-logout">로그아웃</div>
            </div>
          </div>
        </div>
        <div className="menu-container">
          <div className="back3-img">
            <img src={back} alt="back-img" />
          </div>
          <div className="menu"></div>
        </div>
      </div>
    </div>
  )
}

export default SaveChallenges;