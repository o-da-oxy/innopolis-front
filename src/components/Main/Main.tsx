import React, { useState, ChangeEvent } from 'react';
import NavBtn from '../NavBtn/NavBtn';
import './Main.css';

const Main: React.FC = () => {
  const [peopleCount, setPeopleCount] = useState<number>();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handlePeopleCountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPeopleCount(Number(e.target.value));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div>
      <form>
        <label>
          Number of People:
          <input type="number" value={peopleCount} onChange={handlePeopleCountChange} />
        </label>
        <label>
          Upload Photo:
          <input type="file" onChange={handleFileChange} />
        </label>
      </form>
      <NavBtn text='Show Result'/>
    </div>
  );
};

export default Main;