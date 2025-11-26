import React, { Fragment } from "react";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import './style.css'

function HeaderNav() {
  return (
    <nav>
      <table>
        <tbody>
          <td>
            <Link to='/'>메인</Link>
            <Link to="/introduce">소개</Link>
            <Link to="/gallery">갤러리</Link>
            <Link to="/customSupportServices">고객센터</Link>
          </td>
        </tbody>
      </table>
    </nav>
  );
}

function NotFoundPage() {
  /**
   *  404Page
   */
  return <>
    <Link to="/notfound">404 Not found page</Link>
  </>
  
}
function Main() {
  return
    <div>
      Main자리
    </div>
}
function footer() {
  return <div>
      footer자리
  </div>
  
}


function TemporaryPracticePage() {
  return (
    <BrowserRouter>
      <div>라우터기본연습</div>
      <HeaderNav />
      <Routes>
        <Route
          path="/"
          element={
            <>
            </>
          }
        />
        <Route
          path="/introduce"
          element={
            <>
              <div>
                <a link href="notfound">인사말</a>
              </div>
              <div>

              </div>
              <div>
                <a link href="notfound">연혁</a>
              </div>
              <div>

              </div>
              <div>
                <a link href="notfound">오시는길</a>
              </div>
              <div>

              </div>
            </>
          }
        />
        <Route
          path="/gallery"
          element={
            <>
              <div>
                <a link href="notfound">창원</a>
              </div>
              <div>
                {}
              </div>
              <div>
                <a link href="notfound">마산</a>
              </div>
              <div>

              </div>
              <div>
                <a link href="notfound">진해</a>
              </div>
              <div>

              </div>
            </>
          }
        />
        <Route
          path="/customSupportServices"
          element={
            <>
              <div>
                <a link href="notfound">공지사항</a>
                
              </div>
              <div>
                <a link href="notfound">1:1</a>
              </div>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default TemporaryPracticePage;
