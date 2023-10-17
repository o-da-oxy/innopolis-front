import React from 'react';
import './NavBtn.css'
import { useNavigate } from "react-router-dom";

const NavBtn = (props: { text: string; }) => {
  let navigate = useNavigate();
  let clickHandler = () => {
    if (props.text === 'Show Result') {
      navigate('/result');
    }
    else if (props.text === 'Back') {
      navigate('/');
    }
  }

  return (
    <div className='nav'>
      <button className='navButton' onClick={clickHandler}>{props.text}</button>
    </div>
  )
}

export default NavBtn;