import React from 'react';
import './NavBtn.css'
import { useNavigate } from "react-router-dom";

const NavBtn = (props: { text: string; peopleCount?: number, selectedFile?: any }) => {
  let navigate = useNavigate();
  let clickHandler = async() => {
    if (props.text === 'Show Result') {
      if (props.selectedFile) {
        const formData = new FormData();
        formData.append('file', props.selectedFile);

        const response = await fetch('http://localhost:3000', {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();
        const isPersentCount = props.peopleCount ? props.peopleCount / result.peopleCount : null;
        navigate('/result', { state: { peopleCount: isPersentCount, selectedFile: result.imagePath } });
      }
      alert('Please, load a photo!');
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