import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/nav.css'

function home() {
  return (
    <div>
      <div className='wrapNav'>
        <p className='name'>CREW MATE</p>
        <div className='Nav'>
          <Link to="/login">홈</Link>
          <Link to="/signup">동아리 소개</Link>
          <Link to="/calendar">달력 보기</Link>
        </div>
      </div>
    </div>
  );
}
export default home;
