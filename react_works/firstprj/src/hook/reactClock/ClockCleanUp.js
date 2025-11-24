import React from 'react';
import { useEffect } from 'react';

function UseEffectCleanup(props) {

  const [hour, setHour] = React.useState(0);
  const [minute, setMinute] = React.useState(0);
  const [second, setSecond] = React.useState(0);

  const now = new Date();
  const h = now.getHours()
  const m = now.getMinutes()
  const s = now.getSeconds()

  useEffect(() => {
    console.log("UseEffectCleanup:useEffect 실행")

    const timer = setInterval(() => {

      setHour(h)
      setMinute(m)
      setSecond(s)

    }, 1000)

    return () => {
      console.log('cleanup 실행')
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
    </div>
  );
}

export default UseEffectCleanup;