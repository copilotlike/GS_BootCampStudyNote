import React, { useState, useCallback, useRef, useEffect } from 'react';

const Test = () => {
  const [count, setCount] = useState(0);

  const stableFn = useCallback(() => {
    console.log('stableFn 실행');
  }, []);

  const normalFn = () => {
    console.log('normalFn 실행');
  };

  // 이전 렌더링에서 만든 함수 참조 저장
  const prevStable = useRef();
  const prevNormal = useRef();

  useEffect(() => {
    console.log('stableFn 동일성:', prevStable.current === stableFn);
    console.log('normalFn 동일성:', prevNormal.current === normalFn);

    prevStable.current = stableFn;
    prevNormal.current = normalFn;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>렌더링 유도</button>
    </div>
  );
};

export default Test;