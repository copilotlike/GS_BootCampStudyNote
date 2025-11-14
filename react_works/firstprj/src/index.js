import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App3 from './App3';
import Exam3 from './exam3';
import reportWebVitals from './reportWebVitals';
import MyClass from './basic/MyClass'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <React.StrictMode> 개발자 모드라서 2번씩 처리함.*/}
    {/* <App />
    <App3 />
    <Exam3 /> */}
    <MyClass />
  {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
