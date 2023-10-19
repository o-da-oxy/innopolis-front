import React from 'react';
import './NavBtn.css'
import { useNavigate } from "react-router-dom";

const NavBtn = (props: { text: string; peopleCount?: number, selectedFile?: any }) => {
  let navigate = useNavigate();
  let clickHandler = async () => {
    if (props.text === 'Show Result') {
      // да простит меня первый принцип SOLID, но...
      if (props.selectedFile && props.peopleCount) {
        const formData = new FormData();
        console.log(props.selectedFile);
        formData.append('image', props.selectedFile);

        const response = await fetch('http://127.0.0.1/api/image', {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();
        const isPersentCount = props.peopleCount ? Math.floor(result.human_count / props.peopleCount * 100) : null;
        navigate('/result', { state: { peopleCountInGroup: props.peopleCount, peopleCountOnPhoto: result.human_count, isPresentCount: isPersentCount, imagePath: result.image_path } });
      }
      else {
        alert('Please, enter count of people in group and load a photo!');
      }
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