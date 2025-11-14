// import logo from './logo.svg';
import './App.css';

function App() {
  let name = '정우성';
  let age = '43';
  let marry = 'true'; //true, false, null, undefined 및 에러자료형은 직접 출력 불가

  return (
    <fragment>
      이름 : {name}
      나이 : {age}
      결혼 : {marry}
    </fragment>

    // true는 출력불가
    // 문자열 치환필요
    // marriage+'';
    // marriage.toString();
    // `${marriage}`
    // JSON.stringify(marry);
    // string(marry)
  );
}

export default App;