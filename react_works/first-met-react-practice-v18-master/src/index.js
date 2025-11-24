import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// 지금 실습하고 있는 3장(Library)만 가져옵니다.
import Library from './chapter_03/Library';

// -----------------------------------------------------------
// 아직 실습하지 않은 챕터들은 에러를 유발하므로 주석 처리합니다.
// 나중에 해당 챕터를 공부할 때 주석(//)을 푸시면 됩니다.
// -----------------------------------------------------------
// import Clock from './chapter_04/Clock';
// import CommentList from './chapter_05/CommentList';
// import NotificationList from './chapter_06/NotificationList';
// import Accommodate from './chapter_07/Accommodate';
// import ConfirmButton from './chapter_08/ConfirmButton';
// import LandingPage from './chapter_09/LandingPage';
// import AttendanceBook from './chapter_10/AttendanceBook';
// import SignUp from './chapter_11/SignUp';
// import Calculator from './chapter_12/Calculator';
// import ProfileCard from './chapter_13/ProfileCard';
// import DarkOrLight from './chapter_14/DarkOrLight';
// import Blocks from './chapter_15/Blocks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);

reportWebVitals();