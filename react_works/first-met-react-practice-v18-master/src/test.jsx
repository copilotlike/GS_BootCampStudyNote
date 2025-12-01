import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="여기를 클릭 없이 포커스!" />
      <button onClick={focusInput}>포커스 주기</button>
    </div>
  );
}

export default App;
