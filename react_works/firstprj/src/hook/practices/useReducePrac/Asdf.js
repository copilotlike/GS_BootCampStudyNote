import React, { useReducer } from 'react';
import ConHeader from './conTemp/ConHeader';
import ConSide from './conTemp/ConSide';
import ConMain from './conTemp/ConMain';
import ConFooter from './conTemp/ConFooter';

function rrr(state, action) {
  return {vvv: state.}
}

function Asdf(props) {
  const [theme, setTheme] = useReducer(rrr, {vvv : ''})

  return (
    <div>
      <div>current theme : {theme.vvv}</div>
        <ConHeader style={()=>Asdf()}/>
        <ConSide />
        <ConMain />
        <ConFooter />
    </div>
  );
}

export default Asdf;