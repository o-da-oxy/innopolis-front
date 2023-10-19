import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBtn from '../NavBtn/NavBtn';
import './Result.css'

const Result = () => {
  const location = useLocation();
  const { peopleCountInGroup, isPresentCount, peopleCountOnPhoto, imagePath }: any = location.state;

  const imageUrl = `http://localhost${imagePath}`;

  return (
    <div>
      {imageUrl ?
        <div>
          <p>Count of people in group: {peopleCountInGroup}</p>
          <p>Count of people on photo: {peopleCountOnPhoto}</p>
          <p>Is Present: {isPresentCount ?? 0} %</p>
          <img src={imageUrl} alt="Selected File" />
        </div>
      :
        <p>Please, load a photo!</p>
      }
      <NavBtn text='Back' />
    </div>
  );
}

export default Result;