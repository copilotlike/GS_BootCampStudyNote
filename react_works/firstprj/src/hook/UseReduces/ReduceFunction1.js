export function ReduceFunction1(state, action) {
  console.log('rrr 실행',action)
  console.log('rrr 실행',state)
  
  if(action==='ppp'){ //증가하려면
    return {vvv:state.vvv+1}
  }
  if(action==='mmm'){ //감소하려면
    return {vvv:state.vvv-1}
  }
  return {vvv:1234}
}