import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBtn from '../NavBtn/NavBtn';
import './Result.css'

const Result = () => {
  const location = useLocation();
  const { peopleCount, imagePath }: any = location.state;

  const imageUrl = `http://localhost${imagePath}`;

  return (
    <div>
      {imageUrl ?
        <div>
          <p>Is Present: {peopleCount ?? 0} %</p>
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