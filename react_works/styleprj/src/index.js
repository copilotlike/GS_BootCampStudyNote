import ReactDOM from 'react-dom/client';

//import VarGo from './components/VarGo';
//import NestingGo from './components/NestingGo';
//import CalcGo from './components/CalcGo';
//import ImGo from './components/ImGo';
// import ForGo from './components/forGo';
// import Mixed from './components/mixed';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
import ClassNameBindGo from './components/ClassNameBindGo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <StrictMode>
        {/* <NestingGo/> */}
        {/* <CalcGo/> */}
        {/* <ImGo/> */}
        {/* <ForGo/> */}
        {/* <Mixed/> */}
        <FunctionModule/>
          <ClassNameBindGo/>
        </StrictMode>
      {/* <VarGo/> */}

    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
